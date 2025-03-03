import { useAtom } from "jotai";
import { useState, useRef, useMemo, useCallback } from "react";
import {
  ImageSrcAtom,
  BoundingBoxes2DAtom,
  BoxesShownAtom,
} from "./atoms";
import { ResizePayload, useResizeDetector } from "react-resize-detector";

const boxColorMap: Record<string, string> = {
  fruit: "#FF4D4D",      // Red
  vegetable: "#4CAF50",  // Green
  meat: "#D32F2F",       // Dark Red
  dairy: "#FFC0CB",      // Pink
  grain: "#A67C00",      // Brownish Yellow
  spice: "#8B4513",      // Dark Brown
  seafood: "#1E88E5",    // Blue
  condiment: "#708090",  // Slate Gray
  nut: "#D2B48C",        // Tan
  beverage: "#00BFFF",   // Light Blue
  other: "#808080",      // Gray
};

export function Content() {
  const [imageSrc] = useAtom(ImageSrcAtom);
  const [boundingBoxes2D] = useAtom(BoundingBoxes2DAtom);

  const [boxesShown,] = useAtom(BoxesShownAtom)


  // Handling resize and aspect ratios
  const boundingBoxContainerRef = useRef<HTMLDivElement | null>(null);
  const [containerDims, setContainerDims] = useState({
    width: 0,
    height: 0,
  });
  const [activeMediaDimensions, setActiveMediaDimensions] = useState({
    width: 1,
    height: 1,
  });

  const onResize = useCallback(
    (el: ResizePayload) => {
      if (el.width && el.height) {
        setContainerDims({
          width: el.width,
          height: el.height,
        });
      }
    },
    [],
  );

  const { ref: containerRef } = useResizeDetector({ onResize });

  const boundingBoxContainer = useMemo(() => {
    const { width, height } = activeMediaDimensions;
    const aspectRatio = width / height;
    const containerAspectRatio = containerDims.width / containerDims.height;
    if (aspectRatio < containerAspectRatio) {
      return {
        height: containerDims.height,
        width: containerDims.height * aspectRatio,
      };
    } else {
      return {
        width: containerDims.width,
        height: containerDims.width / aspectRatio,
      };
    }
  }, [containerDims, activeMediaDimensions]);


  return (
    <div ref={containerRef} className="w-full grow relative">
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          className="absolute top-0 left-0 w-full h-full object-contain"
          alt="Uploaded image"
          onLoad={(e) => {
            setActiveMediaDimensions({
              width: e.currentTarget.naturalWidth,
              height: e.currentTarget.naturalHeight,
            });
          }}
        />
      ) : null}
      <div
        className={`absolute w-full h-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        ref={boundingBoxContainerRef}
        style={{
          width: boundingBoxContainer.width,
          height: boundingBoxContainer.height,
        }}
      >
        {boxesShown &&
          boundingBoxes2D.map((box, i) => {
            const color = boxColorMap[box.ingredient.type]
            console.log(color)

            return (
              <div
                key={i}
                className={`absolute bbox border-2`}
                style={{
                  borderColor: color,
                  transformOrigin: "0 0",
                  top: box.y * 100 + "%",
                  left: box.x * 100 + "%",
                  width: box.width * 100 + "%",
                  height: box.height * 100 + "%",
                }}
              >
                <div style={{ backgroundColor: color }} className="text-white absolute left-0 top-0 text-sm px-1">
                  {box.label}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  );
}
