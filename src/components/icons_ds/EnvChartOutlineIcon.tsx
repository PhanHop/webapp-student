import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvChartOutlineIcon = ({
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
        d="M2.58752 1.95312V21.477L22.0102 21.4082"
        stroke={fill}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 3.98481L2.58753 2L4.16526 3.98481"
        stroke={fill}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.0205 19.8262L23 21.4081L21.0205 22.9999"
        stroke={fill}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.58752 21.4767L7.84009 12.8398"
        stroke={fill}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.10415 12.8302C9.96468 12.8302 10.6623 12.1307 10.6623 11.2679C10.6623 10.405 9.96468 9.70557 9.10415 9.70557C8.24362 9.70557 7.54602 10.405 7.54602 11.2679C7.54602 12.1307 8.24362 12.8302 9.10415 12.8302Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4245 16.5243C17.2309 16.5243 17.8846 15.8688 17.8846 15.0602C17.8846 14.2517 17.2309 13.5962 16.4245 13.5962C15.6181 13.5962 14.9644 14.2517 14.9644 15.0602C14.9644 15.8688 15.6181 16.5243 16.4245 16.5243Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.1185 8.94872C21.9303 8.94872 22.5884 8.28885 22.5884 7.47485C22.5884 6.66085 21.9303 6.00098 21.1185 6.00098C20.3067 6.00098 19.6486 6.66085 19.6486 7.47485C19.6486 8.28885 20.3067 8.94872 21.1185 8.94872Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5056 11.9463L15.1702 14.334"
        stroke={fill}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.473 14.0385L20.4815 8.94873"
        stroke={fill}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(EnvChartOutlineIcon);
