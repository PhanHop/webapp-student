import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvFilter2OutlineIcon = ({
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
      <g clipPath="url(#clip0_1384_3764)">
        <path
          d="M22.8402 2.97153C23.2983 2.42989 22.9133 1.6001 22.2039 1.6001H1.79608C1.08673 1.6001 0.701727 2.42989 1.15978 2.97153L9.40297 12.7191C9.53019 12.8696 9.59999 13.0602 9.59999 13.2572V20.2851C9.59999 20.6007 9.77833 20.8893 10.0606 21.0304L13.194 22.5971C13.7481 22.8741 14.4 22.4712 14.4 21.8517V13.2572C14.4 13.0602 14.4698 12.8696 14.597 12.7191L22.8402 2.97153Z"
          stroke={fill}
          strokeWidth="1.62963"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1384_3764">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default memo(EnvFilter2OutlineIcon);
