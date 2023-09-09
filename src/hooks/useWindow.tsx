import React, { useEffect } from "react";
import { IUseWindowSize, TScreens } from "./useWindow.types";

const screenSizes: {
  [key in TScreens]: number;
} = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export default function useWindow(): IUseWindowSize {
  const [windowSize, setWindowSize] = React.useState<number>(0);

  useEffect(() => {
    if (window) {
      setWindowSize(window.innerWidth);

      const handleResize = () => {
        setWindowSize(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const isGreaterThan = (size: TScreens): boolean =>
    windowSize > screenSizes[size];

  const isLessThan = (size: TScreens): boolean =>
    windowSize < screenSizes[size];

  const isBetween = (min: TScreens, max: TScreens): boolean =>
    windowSize > screenSizes[min] && windowSize < screenSizes[max];

  const isBetweenOrEqual = (min: TScreens, max: TScreens): boolean =>
    windowSize >= screenSizes[min] && windowSize <= screenSizes[max];

  const isGreaterThanEqual = (size: TScreens): boolean =>
    windowSize >= screenSizes[size];

  const isLessThanEqual = (size: TScreens): boolean =>
    windowSize <= screenSizes[size];

  const isEqual = (size: TScreens): boolean => windowSize === screenSizes[size];

  return {
    windowSize,
    isGreaterThan,
    isLessThan,
    isBetween,
    isBetweenOrEqual,
    isGreaterThanEqual,
    isLessThanEqual,
    isEqual,
  };
}
