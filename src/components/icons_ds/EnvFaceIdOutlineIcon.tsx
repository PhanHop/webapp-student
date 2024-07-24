import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvFaceIdOutlineIcon = ({
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
        d="M16.8095 15.2226C17.0784 15.5034 17.0604 15.9415 16.7693 16.2009C15.4672 17.3611 13.7735 18 12 18C10.2265 18 8.53275 17.3611 7.23071 16.2009C6.93955 15.9415 6.92156 15.5034 7.1905 15.2226C7.45946 14.9417 7.91343 14.9243 8.20464 15.1837C9.24067 16.1069 10.5886 16.6154 12 16.6154C13.4114 16.6154 14.7593 16.1069 15.7954 15.1837C16.0865 14.9243 16.5405 14.9417 16.8095 15.2226Z"
        fill={fill}
      />
      <circle cx="8" cy="9" r="1" fill={fill} />
      <circle cx="16" cy="9" r="1" fill={fill} />
      <path
        d="M23 17V19C23 21.2091 21.2091 23 19 23H17"
        stroke={fill}
        strokeWidth="1.63636"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 1L19 1C21.2091 1 23 2.79086 23 5L23 7"
        stroke={fill}
        strokeWidth="1.63636"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 7L1 5C1 2.79086 2.79086 1 5 0.999999L7 0.999999"
        stroke={fill}
        strokeWidth="1.63636"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 17V19C1 21.2091 2.79086 23 5 23H7"
        stroke={fill}
        strokeWidth="1.63636"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(EnvFaceIdOutlineIcon);
