import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvArrowLeftOutlineIcon = ({
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
        d="M7.08333 10.4867L13.875 4.44505C14.2083 4.15338 14.25 3.61171 13.9583 3.27838C13.6667 2.94505 13.125 2.90338 12.7917 3.19505L5.29167 9.86171C5.08333 10.0284 5 10.2367 5 10.4867C5 10.7367 5.08333 10.945 5.29167 11.1117L12.7917 17.7784C12.9583 17.9034 13.1667 17.9867 13.3333 17.9867C13.5833 17.9867 13.7917 17.9034 13.9583 17.695C14.25 17.3617 14.25 16.82 13.875 16.5284L7.08333 10.4867Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvArrowLeftOutlineIcon);
