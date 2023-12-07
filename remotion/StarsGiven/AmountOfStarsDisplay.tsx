import { useMemo } from "react";
import { SevenSegment } from "../SevenSegment/SevenSegmentNumber";

export const AmountOfStarsDisplay: React.FC<{
  totalStarCount: number;
  starCount: number;
}> = ({ totalStarCount, starCount }) => {
  const fontSizeOfSevenSegmentDisplay = useMemo(() => {
    const digits = Number(totalStarCount).toString().length;
    if (digits === 1) {
      return 900;
    }

    if (digits === 2) {
      return 800;
    }

    if (digits === 3) {
      return 600;
    }

    return 500;
  }, [totalStarCount]);

  return (
    <div style={{ position: "absolute" }}>
      <SevenSegment
        fontSize={fontSizeOfSevenSegmentDisplay}
        num={starCount}
        max={totalStarCount}
      />
    </div>
  );
};
