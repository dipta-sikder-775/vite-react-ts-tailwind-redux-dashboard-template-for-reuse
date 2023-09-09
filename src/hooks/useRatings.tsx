export interface IRatingsHook {
  currentRatings: number;
  maximumRatings?: number;
}

export interface IRatingsArray {
  key: number;
  value: number;
}

export enum ERatings {
  FULL = 1,
  HALF = 0.5,
  EMPTY = 0,
}

export default function useRatings({
  currentRatings,
  maximumRatings = 5,
}: IRatingsHook): IRatingsArray[] {
  const getRatings = (
    ratings: number,
    maximumNumberOfStars: number
  ): IRatingsArray[] => {
    const value = ratings.toFixed(1);
    const splittedValue = value?.toString().split(".");
    const wholeValue = parseInt(splittedValue[0]);
    const decimalValue = parseInt(splittedValue[1]);
    const stars: IRatingsArray[] = [];

    let upDatedStars = Array.from({
      length: maximumNumberOfStars,
    });

    for (let i = 0; i < wholeValue; i++) {
      if (wholeValue > 0) {
        stars.push({
          key: i,
          value: ERatings.FULL,
        });
      }
    }
    if (decimalValue > 0) {
      stars.push({
        key: stars.length,
        value: ERatings.HALF,
      });
    }

    if (ratings > maximumNumberOfStars) {
      throw new Error(
        `Ratings should be less than or equal to ${maximumNumberOfStars}`
      );
    } else if (ratings < 0 || !maximumNumberOfStars) {
      throw new Error(`Invalid ratings information`);
    } else {
      upDatedStars = upDatedStars.map((_, index) => {
        if (stars[index]) {
          return stars[index];
        }
        return {
          key: index,
          value: ERatings.EMPTY,
        };
      });
    }
    return upDatedStars as IRatingsArray[];
  };

  return getRatings(currentRatings, maximumRatings);
}
