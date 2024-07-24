import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvHideOutlineIcon = ({
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
        d="M22.9862 10.0478C23.225 9.68964 23.1454 9.21214 22.8271 8.93361C22.469 8.65507 21.9915 8.73465 21.7129 9.09277C21.6732 9.13255 17.2564 14.3452 12.004 14.3452C6.91076 14.3452 2.29503 9.09277 2.25524 9.05297C1.9767 8.73465 1.45942 8.69486 1.14109 8.97339C0.822763 9.25193 0.782976 9.76921 1.06151 10.0875C1.14109 10.2069 2.09607 11.2813 3.60812 12.475L1.57878 14.5839C1.26045 14.9022 1.30025 15.4195 1.61858 15.698C1.69816 15.8572 1.89711 15.9368 2.09606 15.9368C2.29502 15.9368 2.49397 15.8572 2.65313 15.6981L4.84163 13.43C5.87619 14.1462 7.10971 14.8227 8.4626 15.3001L7.62699 18.1253C7.50762 18.563 7.74637 19.0007 8.18406 19.1201C8.26364 19.1201 8.34322 19.1201 8.42281 19.1201C8.78093 19.1201 9.09925 18.8813 9.17883 18.5232L10.0144 15.6981C10.6511 15.8174 11.3275 15.897 12.004 15.897C12.6804 15.897 13.3569 15.8174 13.9935 15.6981L14.8291 18.4834C14.9087 18.8415 15.2668 19.0803 15.5852 19.0803C15.6647 19.0803 15.7443 19.0803 15.7841 19.0405C16.2218 18.9211 16.4606 18.4834 16.3412 18.0457L15.5056 15.2604C16.8585 14.7829 18.092 14.1064 19.1265 13.3902L21.2753 15.6185C21.4344 15.7776 21.6334 15.8572 21.8323 15.8572C22.0313 15.8572 22.2302 15.7776 22.3894 15.6185C22.7077 15.3001 22.7077 14.8226 22.4292 14.5043L20.3999 12.3954C22.0313 11.2017 22.9862 10.0478 22.9862 10.0478Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvHideOutlineIcon);