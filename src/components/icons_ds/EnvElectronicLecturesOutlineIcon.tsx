import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvElectronicLecturesOutlineIcon = ({
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
      <g clipPath="url(#clip0_1384_2454)">
        <rect
          x="1.68823"
          y="2.75244"
          width="20.625"
          height="15.125"
          rx="2.0625"
          stroke={fill}
          strokeWidth="1.375"
        />
        <path
          d="M4.9976 15.1248C4.88635 15.1244 4.77685 15.0971 4.67846 15.0451C4.58006 14.9932 4.49569 14.9183 4.43256 14.8267C4.36942 14.7351 4.32939 14.6296 4.31589 14.5191C4.30238 14.4087 4.31581 14.2967 4.35501 14.1925L5.58335 10.9164V7.79146C5.58341 7.72095 5.60038 7.65148 5.63285 7.58888C5.68147 7.49177 5.76208 7.4144 5.8611 7.3698L11.9166 4.77471C12.0877 4.70107 12.2721 4.66309 12.4583 4.66309C12.6446 4.66309 12.829 4.70107 13.0001 4.77471L18.0729 6.94813C18.239 7.01784 18.3808 7.13506 18.4804 7.28508C18.5801 7.43509 18.6332 7.61121 18.6331 7.79131C18.633 7.97141 18.5797 8.14747 18.4799 8.29738C18.38 8.44728 18.2382 8.56435 18.072 8.63388L16.5833 9.2728V12.0915C16.584 12.2618 16.5369 12.4288 16.4475 12.5736C16.358 12.7185 16.2298 12.8354 16.0773 12.911L13.0725 14.4125C12.8815 14.5072 12.6711 14.5565 12.4579 14.5565C12.2447 14.5565 12.0343 14.5072 11.8433 14.4125L8.83935 12.911C8.68694 12.8353 8.55878 12.7184 8.46936 12.5735C8.37994 12.4287 8.33282 12.2618 8.33335 12.0915V9.27188L6.50001 8.4863V10.9164L7.72926 14.1962C7.76817 14.3001 7.78135 14.4119 7.76768 14.522C7.75401 14.6321 7.71389 14.7373 7.65076 14.8285C7.58762 14.9197 7.50334 14.9944 7.40511 15.0459C7.30689 15.0975 7.19763 15.1246 7.08668 15.1248H4.9976ZM6.75485 14.2081L6.04168 12.3051L5.32851 14.2081H6.75485ZM9.25001 12.0915L12.2539 13.593C12.3175 13.6244 12.3875 13.6407 12.4583 13.6407C12.5292 13.6407 12.5992 13.6244 12.6628 13.593L15.6667 12.0915V9.66513L13.0001 10.8073C12.829 10.8812 12.6447 10.9193 12.4583 10.9193C12.272 10.9193 12.0877 10.8812 11.9166 10.8073L9.25001 9.66513V12.0915ZM12.2778 9.9658C12.335 9.99008 12.3966 10.0026 12.4588 10.0026C12.521 10.0026 12.5826 9.99008 12.6398 9.9658L17.7118 7.79146L12.6389 5.61713C12.5817 5.59318 12.5204 5.58084 12.4583 5.58084C12.3963 5.58084 12.335 5.59318 12.2778 5.61713L7.20493 7.79146L12.2778 9.9658Z"
          fill={fill}
        />
        <rect
          x="1.34448"
          y="20.2837"
          width="21.3125"
          height="0.6875"
          rx="0.34375"
          fill={fill}
          stroke={fill}
          strokeWidth="0.6875"
        />
      </g>
      <defs>
        <clipPath id="clip0_1384_2454">
          <rect
            width={width}
            height={height}
            fill="white"
            transform="translate(1 1)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default memo(EnvElectronicLecturesOutlineIcon);