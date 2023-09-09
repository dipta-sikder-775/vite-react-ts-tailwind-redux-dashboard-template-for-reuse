export type TScreens = "sm" | "md" | "lg" | "xl" | "2xl";

export interface IUseWindowSize {
  windowSize: number | undefined;
  isGreaterThan: (size: TScreens) => boolean;
  isLessThan: (size: TScreens) => boolean;
  isBetween: (min: TScreens, max: TScreens) => boolean;
  isBetweenOrEqual: (min: TScreens, max: TScreens) => boolean;
  isGreaterThanEqual: (size: TScreens) => boolean;
  isLessThanEqual: (size: TScreens) => boolean;
  isEqual: (size: TScreens) => boolean;
}
