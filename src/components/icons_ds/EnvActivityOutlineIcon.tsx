import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvActivityOutlineIcon = ({
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
        d="M12 1.75C6.35 1.75 1.75 6.35 1.75 12C1.75 17.65 6.35 22.25 12 22.25C17.65 22.25 22.25 17.65 22.25 12C22.25 6.35 17.65 1.75 12 1.75ZM12 20.75C7.2 20.75 3.25 16.8 3.25 12C3.25 7.2 7.2 3.25 12 3.25C16.8 3.25 20.75 7.2 20.75 12C20.75 16.8 16.8 20.75 12 20.75Z"
        fill={fill}
      />
      <path
        d="M16.3 13.3L12.75 11.65V6.5C12.75 6.1 12.4 5.75 12 5.75C11.6 5.75 11.25 6.1 11.25 6.5V12.1C11.25 12.4 11.4 12.65 11.7 12.8L15.7 14.7C15.8 14.75 15.9 14.75 16 14.75C16.3 14.75 16.55 14.6 16.7 14.3C16.85 13.95 16.7 13.5 16.3 13.3Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvActivityOutlineIcon);
