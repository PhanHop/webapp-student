import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvImageOutlineIcon = ({
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
      <rect
        x="0.85"
        y="0.85"
        width="18.3"
        height="18.3"
        rx="1.8375"
        stroke={fill}
        strokeWidth="1.2"
      />
      <path
        d="M7.39757 10.2474L2.94014 16.9335C2.83215 17.0955 2.94827 17.3125 3.14295 17.3125H16.9181C17.0993 17.3125 17.2172 17.1218 17.1361 16.9597L15.0262 12.74C14.9518 12.5912 14.7535 12.559 14.6359 12.6766L12.6099 14.7026C12.5147 14.7978 12.3603 14.7978 12.2651 14.7026L7.77274 10.2102C7.66398 10.1015 7.4829 10.1194 7.39757 10.2474Z"
        fill={fill}
      />
      <circle cx="5.125" cy="5.125" r="2.4375" fill={fill} />
    </svg>
  );
};

export default memo(EnvImageOutlineIcon);
