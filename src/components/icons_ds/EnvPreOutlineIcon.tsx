import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvPreOutlineIcon = ({
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
        d="M3.5 11.9841L11.65 4.73406C12.05 4.38406 12.1 3.73406 11.75 3.33406C11.4 2.93406 10.75 2.88406 10.35 3.23406L1.35 11.2341C1.1 11.4341 1 11.6841 1 11.9841C1 12.2841 1.1 12.5341 1.35 12.7341L10.35 20.7341C10.55 20.8841 10.8 20.9841 11 20.9841C11.3 20.9841 11.55 20.8841 11.75 20.6341C12.1 20.2341 12.1 19.5841 11.65 19.2341L3.5 11.9841Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvPreOutlineIcon);
