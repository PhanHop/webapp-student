import { IIconProps } from "model/type";
import React, { memo } from "react";

const EnvDefaultImageIcon = ({
  fill = "#243648",
  width = 24,
  height = 24,
  ...otherProps
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
        d="M16 12L8 12"
        stroke="#B7BCC2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9"
        stroke="#B7BCC2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(EnvDefaultImageIcon);
