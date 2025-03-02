import { useAtom } from "jotai";
import {
  BoundingBoxes2DAtom,
  ImageSrcAtom,
} from "./atoms";

export function useResetState() {
  const [, setBoundingBoxes2D] = useAtom(BoundingBoxes2DAtom);
  const [, setImageSrc] = useAtom(ImageSrcAtom);
  return () => {
    setImageSrc("");
    setBoundingBoxes2D([]);
  };
}
