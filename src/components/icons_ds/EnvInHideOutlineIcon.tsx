import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvInHideOutlineIcon = ({
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
        d="M19.6344 9.62192C17.5163 7.69755 14.9269 6.54555 12.0678 6.54555C9.20876 6.54555 6.61938 7.69755 4.50127 9.62192C3.01676 10.9729 1.91189 12.6878 1.88571 13.0779C1.88833 13.0229 1.91451 13.0962 1.97473 13.2245C2.09254 13.468 2.27582 13.7744 2.51407 14.1121C3.07436 14.9028 3.85458 15.7589 4.74738 16.5365C6.97284 18.4714 9.5308 19.6365 12.0678 19.6365C14.6048 19.6365 17.1628 18.4714 19.3856 16.5392C20.2784 15.7616 21.0587 14.9054 21.6189 14.1147C21.8572 13.777 22.0431 13.4706 22.1609 13.2272C22.2185 13.1093 22.2421 13.036 22.2499 13.0674C22.2002 12.6538 21.1032 10.9572 19.6344 9.62192ZM12.0678 21.0922C5.52236 21.0922 0.432617 14.5467 0.432617 13.091C0.432617 11.6353 4.79451 5.08984 12.0678 5.08984C19.3411 5.08984 23.703 11.6353 23.703 13.091C23.703 14.5467 18.6133 21.0922 12.0678 21.0922ZM12.0678 17.4555C14.4765 17.4555 16.4323 15.5024 16.4323 13.091C16.4323 10.6797 14.4765 8.7265 12.0678 8.7265C9.65909 8.7265 7.70331 10.6823 7.70331 13.091C7.70331 15.4997 9.65909 17.4555 12.0678 17.4555ZM12.0678 15.9998C10.4603 15.9998 9.15902 14.6986 9.15902 13.091C9.15902 11.4834 10.4603 10.1822 12.0678 10.1822C13.6754 10.1822 14.9766 11.4834 14.9766 13.091C14.9766 14.6986 13.6754 15.9998 12.0678 15.9998Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvInHideOutlineIcon);