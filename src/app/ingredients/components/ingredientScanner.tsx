'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Upload, Camera } from "lucide-react";
import { useResetState } from "./hooks";


import { useAtom } from "jotai";
import getStroke from "perfect-freehand";
import {GoogleGenerativeAI} from "@google/generative-ai";
import {
  BoundingBoxes2DAtom,
  DetectTypeAtom,
  ModelSelectedAtom,
  HoverEnteredAtom,
  LinesAtom,
  ImageSrcAtom,
  IsUploadedImageAtom,
  ImageSentAtom
} from "./atoms";
import { lineOptions } from "./consts";
import { getSvgPathFromStroke, loadImage } from "./utils";


const client = new GoogleGenerativeAI("AIzaSyDwAu7Hh3S3KpA8pi7r-qPO9ZiQkPUcGb4");

export function IngredientScanner() {
  const resetState = useResetState();
  const [isLoading, setIsLoading] = useState(false);
  const [ingredients, setIngredients] = useState<string[]>([]);

  const [, setBoundingBoxes2D] = useAtom(BoundingBoxes2DAtom);
  const [detectType] = useAtom(DetectTypeAtom);
  const [modelSelected] = useAtom(ModelSelectedAtom);
  const [, setHoverEntered] = useAtom(HoverEnteredAtom);
  const [lines] = useAtom(LinesAtom);
  const [imageSrc] = useAtom(ImageSrcAtom);

  const [, setImageSrc] = useAtom(ImageSrcAtom);
  const [, setIsUploadedImage] = useAtom(IsUploadedImageAtom);
  const [, setImageSent] = useAtom(ImageSentAtom);


  const get2dPrompt = 
    `Detect
    only items that are food ingredients or food related items that can be used to make a recipe
    , with no more than 20 items. Output a json list where each entry contains the 2D bounding box in "box_2d" and
    a the ingredient name in "label", afterwards include a comma seperated string of recipes with links to the recipes. IF you cannot process the image, explain why. Return an empty list if you cannot process the image.`


  async function handleSend() {
    setIsLoading(true);
    let activeDataURL;
    const maxSize = 640;
    const copyCanvas = document.createElement("canvas");
    const ctx = copyCanvas.getContext("2d")!;

   if (imageSrc) {
      const image = await loadImage(imageSrc);
      const scale = Math.min(maxSize / image.width, maxSize / image.height);
      copyCanvas.width = image.width * scale;
      copyCanvas.height = image.height * scale;
      console.log(copyCanvas)
      ctx.drawImage(image, 0, 0, image.width * scale, image.height * scale);
    }
    else {
      console.log("no image")
    }
    activeDataURL = copyCanvas.toDataURL("image/png");

    if (lines.length > 0) {
      for (const line of lines) {
        const p = new Path2D(
          getSvgPathFromStroke(
            getStroke(
              line[0].map(([x, y]) => [
                x * copyCanvas.width,
                y * copyCanvas.height,
                0.5,
              ]),
              lineOptions,
            ),
          ),
        );
        ctx.fillStyle = line[1];
        ctx.fill(p);
      }
      activeDataURL = copyCanvas.toDataURL("image/png");
    }


    setHoverEntered(false);

    let response = (await client
      .getGenerativeModel(
        {model: modelSelected},
        {apiVersion: 'v1beta'}
      )
      .generateContent({
        contents: [
          {
            role: "user",
            parts: [
              {text: get2dPrompt},
              {inlineData: {
                data: activeDataURL.replace("data:image/png;base64,", ""),
                mimeType: "image/png"
              }}
            ]
          }
        ],
        generationConfig: {temperature : 0.5}
      })).response.text()

    if (response.includes("```json")) {
      response = response.split("```json")[1].split("```")[0];
    }
    console.log(response)
    setIsLoading(false);
    const parsedResponse = JSON.parse(response);
    if (detectType === "2D bounding boxes") {
      const formattedBoxes = parsedResponse.map(
        (box: { box_2d: [number, number, number, number]; label: string; recipe: string }) => {
          const [ymin, xmin, ymax, xmax] = box.box_2d;
          return {
            x: xmin / 1000,
            y: ymin / 1000,
            width: (xmax - xmin) / 1000,
            height: (ymax - ymin) / 1000,
            label: box.label,
          };
        },
      );
      setHoverEntered(false);
      setBoundingBoxes2D(formattedBoxes);
      setIngredients(formattedBoxes.map((box: {label: string}) => box.label));
    } 
  }

  return (
    <div className="grid gap-6">
      <Card className="border dashed">
        <CardContent className="p-6 ">
          <div className="flex flex-col items-center gap-4">
            {!imageSrc ? (
              <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg p-8 text-center w-[1000px]">
                <div className="flex flex-col items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Utensils className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Upload an image of your ingredients</h3>
                    <p className="text-sm text-muted-foreground">
                      Snap a photo or upload an image to identify ingredients
                    </p>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <label className="cursor-pointer button variant-outline">
                      <Upload className="h-4 w-4 mr-2" />
                        Upload Image
                        <input
                          id="image-upload"
                          className="hidden"
                          type="file"
                          accept=".jpg, .jpeg, .png, .webp"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = (e) => {
                                resetState();
                                setImageSrc(e.target?.result as string);
                                setIsUploadedImage(true);
                                setImageSent(false);
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                    </label>
                    <Button variant="outline">
                      <Camera className="h-4 w-4 mr-2" />
                      Take Photo
                    </Button>
                  </div>
                </div>
              </div>
            ) : (

              <div className="space-y-4">
                {!isLoading && ingredients.length === 0 && (
                  <Button onClick={handleSend} className="w-full">
                    Identify Ingredients
                  </Button>
                )}
                
                {isLoading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Identified Ingredients:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center gap-2 p-2 bg-secondary rounded-md">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex justify-between pt-4">
                      <Button variant="outline" onClick={() => {
                          setIngredients([]);
                          resetState();
                      }}>
                        Try Another Image
                      </Button>
                      <Button>
                        Find Recipes
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}