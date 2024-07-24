import { IIconProps } from "model/type";
import React, { memo } from "react";

const EnvUpdateAlt = ({
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
        d="M5.7 9C6.1 7 7.9 5.5 10 5.5C11.5 5.5 12.7 6.2 13.5 7.3L15.2 5.3C14 3.9 12.1 3 10 3C6.5 3 3.6 5.6 3.1 9H1L4.5 13L8 9H5.7ZM15.5 7L12 11H14.3C13.8 13 12.1 14.5 10 14.5C8.5 14.5 7.3 13.8 6.5 12.7L4.8 14.6C6 16.1 7.9 17 10 17C13.5 17 16.4 14.4 16.9 11H19L15.5 7Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvUpdateAlt);
