import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvArrowUpOutlineIcon = ({
  fill = "#243648",
  width = 20,
  height = 20,
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
        d="M10.0133 7.08333L16.055 13.875C16.3466 14.2083 16.8883 14.25 17.2216 13.9583C17.555 13.6667 17.5966 13.125 17.305 12.7917L10.6383 5.29167C10.4716 5.08333 10.2633 5 10.0133 5C9.76329 5 9.55495 5.08333 9.38829 5.29167L2.72162 12.7917C2.59662 12.9583 2.51329 13.1667 2.51329 13.3333C2.51329 13.5833 2.59662 13.7917 2.80496 13.9583C3.13829 14.25 3.67996 14.25 3.97162 13.875L10.0133 7.08333Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvArrowUpOutlineIcon);
