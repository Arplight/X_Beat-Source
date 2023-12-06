import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useGallery(firstImage) {
  const [currentImage, setCurrentImage] = useState(firstImage);
  const { pathname } = useLocation();
  useEffect(() => {
    setCurrentImage(firstImage);
  }, [pathname]);
  return [currentImage, setCurrentImage];
}
