import { useAtom } from "jotai";
import {
  BoundingBoxes2DAtom,
  ImageSentAtom,
  ImageSrcAtom,
} from "./atoms";

export function useResetState() {
  const [, setImageSent] = useAtom(ImageSentAtom);
  const [, setBoundingBoxes2D] = useAtom(BoundingBoxes2DAtom);
  const [, setImageSrc] = useAtom(ImageSrcAtom);
  return () => {
    setImageSent(false);
    setImageSrc("");
    setBoundingBoxes2D([]);
  };
}