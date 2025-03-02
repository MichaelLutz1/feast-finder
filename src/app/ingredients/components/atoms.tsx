import { atom } from "jotai";
import {
  defaultPromptParts,
  defaultPrompts,
  modelOptions
} from "@/app/ingredients/components/consts";
import { BoundingBox2DType, DetectTypes } from "@/app/ingredients/components/Types";
import { Ingredient } from "@/lib/types";

export const ImageSrcAtom = atom<string | null>("");

export const BoundingBoxes2DAtom = atom<BoundingBox2DType[]>([]);

export const PromptsAtom = atom<Record<DetectTypes, string[]>>({
  ...defaultPromptParts,
});
export const CustomPromptsAtom = atom<Record<DetectTypes, string>>({
  ...defaultPrompts,
});

export type PointingType = {
  point: {
    x: number;
    y: number;
  };
  label: string;
};

export const DetectTypeAtom = atom<DetectTypes>("2D bounding boxes");

export const ModelSelectedAtom = atom<string>(modelOptions[0]);

export const LinesAtom = atom<[[number, number][], string][]>([]);

export const IsUploadedImageAtom = atom(false);


export const ScannedIngredientsAtom = atom<Ingredient[]>([]);

export const IngredientInventoryAtom = atom<Ingredient[]>([]);
