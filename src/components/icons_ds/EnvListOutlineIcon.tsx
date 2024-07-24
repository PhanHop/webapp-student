import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvListOutlineIcon = ({
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
        d="M3.62162 10.4C2.72432 10.4 2 11.1147 2 12C2 12.8853 2.72432 13.6 3.62162 13.6C4.51892 13.6 5.24324 12.8853 5.24324 12C5.24324 11.1147 4.51892 10.4 3.62162 10.4ZM3.62162 4C2.72432 4 2 4.71467 2 5.6C2 6.48533 2.72432 7.2 3.62162 7.2C4.51892 7.2 5.24324 6.48533 5.24324 5.6C5.24324 4.71467 4.51892 4 3.62162 4ZM3.62162 16.8C2.72432 16.8 2 17.5253 2 18.4C2 19.2747 2.73514 20 3.62162 20C4.50811 20 5.24324 19.2747 5.24324 18.4C5.24324 17.5253 4.51892 16.8 3.62162 16.8ZM6.86486 18.4C6.86486 18.9891 7.34243 19.4667 7.93153 19.4667H21.9333C22.5224 19.4667 23 18.9891 23 18.4C23 17.8109 22.5224 17.3333 21.9333 17.3333H7.93153C7.34243 17.3333 6.86486 17.8109 6.86486 18.4ZM6.86486 12C6.86486 12.5891 7.34243 13.0667 7.93153 13.0667H21.9333C22.5224 13.0667 23 12.5891 23 12C23 11.4109 22.5224 10.9333 21.9333 10.9333H7.93153C7.34243 10.9333 6.86486 11.4109 6.86486 12ZM7.93153 4.53333C7.34243 4.53333 6.86486 5.0109 6.86486 5.6C6.86486 6.1891 7.34243 6.66667 7.93153 6.66667H21.9333C22.5224 6.66667 23 6.1891 23 5.6C23 5.0109 22.5224 4.53333 21.9333 4.53333H7.93153Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvListOutlineIcon);
