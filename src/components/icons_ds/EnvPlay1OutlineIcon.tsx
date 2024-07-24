import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvPlay1OutlineIcon = ({
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
        d="M21.7969 11.25C21.7969 17.07 17.07 21.7969 11.25 21.7969C5.42999 21.7969 0.703125 17.07 0.703125 11.25C0.703125 5.42999 5.42999 0.703125 11.25 0.703125C17.07 0.703125 21.7969 5.42999 21.7969 11.25Z"
        stroke={fill}
        strokeWidth="1.40625"
      />
      <path
        d="M7.03125 11.625V7.70103C7.03125 6.77781 8.0302 6.20039 8.8302 6.66119L12.2396 8.62499L15.6788 10.5903C16.4822 11.0494 16.4857 12.2066 15.685 12.6705L12.2396 14.6667L8.8302 16.6305C8.0302 17.0913 7.03125 16.5139 7.03125 15.5906V11.625Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvPlay1OutlineIcon);
