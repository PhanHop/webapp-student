import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvZoomOutOutlineIcon = ({
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
      <g clipPath="url(#clip0_1384_4050)">
        <path
          d="M18.0356 16.8171L18.0241 16.8303L18.0365 16.8427L23.0186 21.8111C23.155 21.9746 23.2238 22.1933 23.2307 22.4131C23.2376 22.6325 23.1827 22.8512 23.0739 23.0147C22.9108 23.1764 22.6931 23.2313 22.4726 23.2313C22.2515 23.2313 22.0332 23.1761 21.87 23.0134L16.8872 18.0444L16.8753 18.0326L16.8622 18.0431C15.1296 19.4365 12.9502 20.328 10.5476 20.328C5.18321 20.328 0.76875 15.9257 0.76875 10.5763C0.76875 5.22677 5.18335 0.76875 10.5476 0.76875C15.9119 0.76875 20.3264 5.17107 20.3264 10.5205C20.3264 12.9169 19.4881 15.1457 18.0356 16.8171ZM2.41083 10.5763C2.41083 15.0532 6.05837 18.6906 10.5476 18.6906C15.0368 18.6906 18.6843 15.0532 18.6843 10.5763C18.6843 6.0994 15.0368 2.46202 10.5476 2.46202C6.05837 2.46202 2.41083 6.0994 2.41083 10.5763Z"
          fill={fill}
          stroke={fill}
          strokeWidth="0.0375"
        />
        <path
          d="M14.1 9.75H6.9C6.42 9.75 6 10.1 6 10.5C6 10.9 6.42 11.25 6.9 11.25H14.1C14.58 11.25 15 10.9 15 10.5C15 10.1 14.58 9.75 14.1 9.75Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1384_4050">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default memo(EnvZoomOutOutlineIcon);
