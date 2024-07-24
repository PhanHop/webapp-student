import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvArrowDownOutlineIcon = ({
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
        d="M9.98671 12.9167L3.94505 6.125C3.65338 5.79167 3.11171 5.75 2.77838 6.04167C2.44505 6.33333 2.40338 6.875 2.69505 7.20833L9.36171 14.7083C9.52838 14.9167 9.73671 15 9.98671 15C10.2367 15 10.445 14.9167 10.6117 14.7083L17.2784 7.20833C17.4034 7.04167 17.4867 6.83333 17.4867 6.66667C17.4867 6.41667 17.4034 6.20833 17.195 6.04167C16.8617 5.75 16.32 5.75 16.0284 6.125L9.98671 12.9167Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvArrowDownOutlineIcon);
