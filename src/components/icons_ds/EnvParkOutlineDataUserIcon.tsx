import { IIconProps } from "model/type";
import React, { memo } from "react";

const EnvParkOutlineDataUserIcon = ({
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
        d="M11 4V10C11 11.105 8.985 12 6.5 12C4.015 12 2 11.105 2 10V4"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 7C11 8.105 8.985 9 6.5 9C4.015 9 2 8.105 2 7M16 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V8M8 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V16M11 4C11 5.105 8.985 6 6.5 6C4.015 6 2 5.105 2 4C2 2.895 4.015 2 6.5 2C8.985 2 11 2.895 11 4Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 17C18.8807 17 20 15.8807 20 14.5C20 13.1193 18.8807 12 17.5 12C16.1193 12 15 13.1193 15 14.5C15 15.8807 16.1193 17 17.5 17Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 22H13C13 21.4091 13.1164 20.8239 13.3425 20.2779C13.5687 19.732 13.9002 19.2359 14.318 18.818C14.7359 18.4002 15.232 18.0687 15.7779 17.8425C16.3239 17.6164 16.9091 17.5 17.5 17.5C18.0909 17.5 18.6761 17.6164 19.2221 17.8425C19.768 18.0687 20.2641 18.4002 20.682 18.818C21.0998 19.2359 21.4313 19.732 21.6575 20.2779C21.8836 20.8239 22 21.4091 22 22Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(EnvParkOutlineDataUserIcon);
