import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvPlusOutlineIcon = ({
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
        d="M11 1.25V20.75"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.25 11H20.75"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(EnvPlusOutlineIcon);
