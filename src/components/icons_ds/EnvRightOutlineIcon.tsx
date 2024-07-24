import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvRightOutlineIcon = ({
  fill = "#243648",
  width = 24,
  height = 24,
}: IIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.875 10H18.125"
        stroke={fill}
        strokeWidth="1.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 1.875L18.125 10L10 18.125"
        stroke={fill}
        strokeWidth="1.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(EnvRightOutlineIcon);
