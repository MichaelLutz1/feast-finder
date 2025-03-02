import { atom } from "jotai";
import {
  colors,
  defaultPromptParts,
  defaultPrompts,
  modelOptions
} from "@/app/ingredients/components/consts";
import { BoundingBox2DType, DetectTypes } from "@/app/ingredients/components/Types";

export const ImageSrcAtom = atom<string | null>("");

export const ImageSentAtom = atom(false);

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

export const RevealOnHoverModeAtom = atom<boolean>(true);

export const FOVAtom = atom<number>(60);


// export const PromptAtom = atom<string>("main objects");

export const DrawModeAtom = atom<boolean>(false);

export const DetectTypeAtom = atom<DetectTypes>("2D bounding boxes");

export const ModelSelectedAtom = atom<string>(modelOptions[0]);

export const LinesAtom = atom<[[number, number][], string][]>([]);

export const JsonModeAtom = atom(false);

export const ActiveColorAtom = atom(colors[6]);

export const HoverEnteredAtom = atom(false);

export const HoveredBoxAtom = atom<number | null>(null);

export const InitFinishedAtom = atom(true);


export const IsUploadedImageAtom = atom(false);

export const ShowConfigAtom = atom(true);