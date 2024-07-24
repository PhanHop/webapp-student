import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvArrowRightOutlineIcon1 = ({
  fill = "#243648",
  width = 24,
  height = 24,
}: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M12.0843 10.5001L5.2926 16.5418C4.95927 16.8334 4.9176 17.3751 5.20927 17.7084C5.50094 18.0418 6.0426 18.0834 6.37594 17.7918L13.8759 11.1251C14.0843 10.9584 14.1676 10.7501 14.1676 10.5001C14.1676 10.2501 14.0843 10.0418 13.8759 9.8751L6.37594 3.20844C6.20927 3.08344 6.00094 3.0001 5.83427 3.0001C5.58427 3.0001 5.37594 3.08344 5.20927 3.29177C4.9176 3.6251 4.9176 4.16677 5.2926 4.45844L12.0843 10.5001Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvArrowRightOutlineIcon1);
