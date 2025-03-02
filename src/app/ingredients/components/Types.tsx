import { Ingredient } from "@/lib/types";

export type DetectTypes = "2D bounding boxes";

export type BoundingBox2DType = {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  ingredient: Ingredient
};

