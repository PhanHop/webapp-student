import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvDownloadOutlineIcon = ({
  fill = "#243648",
  width = 24,
  height = 24,
}: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
    >
      <g id="Group 57788">
        <path
          id="Vector"
          d="M21.1538 15.2778C20.7026 15.2778 20.3077 15.7056 20.3077 16.1945V19.8612C20.3077 20.0445 20.1949 20.1668 20.0256 20.1668H1.97436C1.80513 20.1668 1.69231 20.0445 1.69231 19.8612V16.1945C1.69231 15.7056 1.29744 15.2778 0.846154 15.2778C0.394872 15.2778 0 15.7056 0 16.1945V19.8612C0 21.0223 0.902564 22.0001 1.97436 22.0001H20.0256C21.0974 22.0001 22 21.0223 22 19.8612V16.1945C22 15.7056 21.6051 15.2778 21.1538 15.2778Z"
          fill={fill}
        />
        <path
          id="Vector_2"
          d="M10.3792 16.8668C10.5485 17.0502 10.7741 17.1113 10.9997 17.1113C11.2254 17.1113 11.451 17.0502 11.6203 16.8668L17.2613 10.7557C17.5997 10.389 17.5997 9.839 17.2613 9.47233C16.9228 9.10565 16.4151 9.10565 16.0767 9.47233L11.9023 13.9946V0.916677C11.9023 0.427782 11.5074 0 11.0562 0C10.6049 0 10.1536 0.427782 10.1536 0.916677V13.9946L5.97923 9.47233C5.64077 9.10565 5.13308 9.10565 4.79462 9.47233C4.45616 9.839 4.45616 10.389 4.79462 10.7557L10.3792 16.8668Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default memo(EnvDownloadOutlineIcon);
