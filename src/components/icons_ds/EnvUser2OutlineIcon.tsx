import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvUser2OutlineIcon = ({
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
        d="M12 11.75C14.704 11.75 16.75 9.31401 16.75 6.5C16.75 3.68599 14.704 1.25 12 1.25C9.29604 1.25 7.25 3.68599 7.25 6.5C7.25 9.31401 9.29604 11.75 12 11.75Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M3 21.1429C3 17.198 6.19797 14 10.1429 14H13.8571C17.802 14 21 17.198 21 21.1429V21.1429C21 21.6162 20.6162 22 20.1429 22H3.85714C3.38376 22 3 21.6162 3 21.1429V21.1429Z"
        stroke={fill}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default memo(EnvUser2OutlineIcon);
