import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvHierarchyOutlineIcon = ({
  fill = "#243648",
  width = 24,
  height = 24,
}: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.5 2L17.375 4.875L13.75 8.5L15.5 10.25L19.125 6.625L22 9.5V2H14.5ZM9.5 2H2V9.5L4.875 6.625L10.75 12.5V22H13.25V11.5L6.625 4.875L9.5 2Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvHierarchyOutlineIcon);
