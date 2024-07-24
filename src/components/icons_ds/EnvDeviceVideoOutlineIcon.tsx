import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvDeviceVideoOutlineIcon = ({
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
        d="M13.8621 13.7271L9.84456 16.2093C9.72563 16.2828 9.58896 16.3235 9.44875 16.3271C9.30853 16.3307 9.16989 16.2972 9.04722 16.23C8.92454 16.1628 8.8223 16.0644 8.75111 15.9449C8.67992 15.8255 8.64238 15.6894 8.64238 15.5507V10.5872C8.64256 10.4483 8.68038 10.312 8.7519 10.1924C8.82342 10.0729 8.92604 9.97447 9.04907 9.9074C9.17211 9.84033 9.31108 9.80706 9.45152 9.81106C9.59197 9.81505 9.72878 9.85616 9.84771 9.93011L9.84456 9.92856L13.8621 12.4107C13.9749 12.4804 14.068 12.5772 14.1326 12.6921C14.1973 12.807 14.2314 12.9362 14.2317 13.0677C14.232 13.1992 14.1985 13.3286 14.1344 13.4438C14.0703 13.559 13.9777 13.6562 13.8652 13.7264L13.8621 13.7271ZM2.35644 4.91451C2.14805 4.91451 1.94819 4.99634 1.80084 5.14199C1.65348 5.28764 1.5707 5.48518 1.5707 5.69116V19.6701C1.5707 19.876 1.65348 20.0736 1.80084 20.2192C1.94819 20.3649 2.14805 20.4467 2.35644 20.4467H19.642C19.8504 20.4467 20.0502 20.3649 20.1976 20.2192C20.3449 20.0736 20.4277 19.876 20.4277 19.6701V5.69116C20.4277 5.48518 20.3449 5.28764 20.1976 5.14199C20.0502 4.99634 19.8504 4.91451 19.642 4.91451H2.35644ZM17.218 3.36122H19.6428C20.2679 3.36122 20.8675 3.60669 21.3096 4.04364C21.7516 4.48059 22 5.07322 22 5.69116V19.6701C22 20.288 21.7516 20.8806 21.3096 21.3176C20.8675 21.7545 20.2679 22 19.6428 22H2.35723C1.73205 22 1.13248 21.7545 0.690416 21.3176C0.24835 20.8806 0 20.288 0 19.6701V5.69116C0 5.07322 0.24835 4.48059 0.690416 4.04364C1.13248 3.60669 1.73205 3.36122 2.35723 3.36122H4.78203L2.7226 1.32562C2.64965 1.25351 2.59178 1.16791 2.5523 1.0737C2.51281 0.979484 2.49249 0.878507 2.49249 0.776531C2.49249 0.674555 2.51281 0.573579 2.5523 0.479365C2.59178 0.385152 2.64965 0.299548 2.7226 0.227441C2.79555 0.155333 2.88216 0.0981342 2.97747 0.0591099C3.07279 0.0200855 3.17495 -1.07449e-09 3.27812 0C3.38129 1.07449e-09 3.48345 0.0200855 3.57876 0.0591099C3.67408 0.0981342 3.76068 0.155333 3.83364 0.227441L7.00411 3.36122H14.9959L18.1664 0.227441C18.2393 0.155333 18.3259 0.0981342 18.4212 0.0591099C18.5166 0.0200855 18.6187 7.59777e-10 18.7219 0C18.8251 -7.59777e-10 18.9272 0.0200855 19.0225 0.0591099C19.1178 0.0981342 19.2044 0.155333 19.2774 0.227441C19.3504 0.299548 19.4082 0.385152 19.4477 0.479365C19.4872 0.573579 19.5075 0.674555 19.5075 0.776531C19.5075 0.878507 19.4872 0.979484 19.4477 1.0737C19.4082 1.16791 19.3504 1.25351 19.2774 1.32562L17.218 3.36122Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvDeviceVideoOutlineIcon);
