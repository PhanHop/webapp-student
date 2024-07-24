import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvCancelFillOutlineIcon = ({
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
      <g clipPath="url(#clip0_1384_3977)">
        <circle cx="11" cy="11" r="11" fill={fill} />
        <path
          d="M11.8352 11.0006L16.0332 5.99661C16.1035 5.91345 16.0444 5.78711 15.9356 5.78711H14.6594C14.5843 5.78711 14.5123 5.82069 14.4627 5.87827L11.0004 10.0059L7.53798 5.87827C7.49001 5.82069 7.41804 5.78711 7.34128 5.78711H6.06508C5.95633 5.78711 5.89716 5.91345 5.96753 5.99661L10.1655 11.0006L5.96753 16.0047C5.95176 16.0232 5.94165 16.0459 5.93839 16.07C5.93513 16.0941 5.93885 16.1187 5.94912 16.1407C5.95939 16.1628 5.97578 16.1814 5.99633 16.1944C6.01689 16.2075 6.04075 16.2143 6.06508 16.2142H7.34128C7.41644 16.2142 7.48841 16.1806 7.53798 16.123L11.0004 11.9954L14.4627 16.123C14.5107 16.1806 14.5827 16.2142 14.6594 16.2142H15.9356C16.0444 16.2142 16.1035 16.0878 16.0332 16.0047L11.8352 11.0006Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1384_3977">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default memo(EnvCancelFillOutlineIcon);
