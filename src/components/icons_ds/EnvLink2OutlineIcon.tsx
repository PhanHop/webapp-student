import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvLink2OutlineIcon = ({
  fill = "#243648",
  width = 20,
  height = 10,
}: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 10"
      fill="none"
    >
      <path
        d="M12.3864 1.25H14.7727C15.295 1.25 15.8122 1.35288 16.2948 1.55275C16.7773 1.75263 17.2158 2.04559 17.5851 2.41492C17.9544 2.78424 18.2474 3.22269 18.4472 3.70524C18.6471 4.18778 18.75 4.70497 18.75 5.22727C18.75 5.74958 18.6471 6.26676 18.4472 6.74931C18.2474 7.23185 17.9544 7.67031 17.5851 8.03963C17.2158 8.40895 16.7773 8.70192 16.2948 8.90179C15.8122 9.10167 15.295 9.20455 14.7727 9.20455H12.3864M7.61364 9.20455H5.22727C4.70497 9.20455 4.18778 9.10167 3.70524 8.90179C3.22269 8.70192 2.78424 8.40895 2.41492 8.03963C1.66903 7.29375 1.25 6.28211 1.25 5.22727C1.25 4.17243 1.66903 3.1608 2.41492 2.41492C3.1608 1.66903 4.17243 1.25 5.22727 1.25H7.61364"
        stroke={fill}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.81824 5.22754H13.1819"
        stroke={fill}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(EnvLink2OutlineIcon);
