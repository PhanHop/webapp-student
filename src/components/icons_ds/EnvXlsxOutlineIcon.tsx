import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvXlsxOutlineIcon = ({
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
        d="M15.5173 1.15625C15.661 1.15586 15.8034 1.18397 15.9362 1.23897C16.0689 1.29396 16.1895 1.37475 16.2908 1.47664L20.5156 5.70148C20.6175 5.80282 20.6983 5.92336 20.7533 6.05612C20.8083 6.18887 20.8364 6.33122 20.836 6.47492V19.7499C20.836 20.3532 20.3403 20.8438 19.7312 20.8438H5.26109C4.65172 20.8438 4.15625 20.3532 4.15625 19.7499V2.25008C4.15625 1.6468 4.65195 1.15625 5.26109 1.15625H15.5173ZM15.5173 0.5H5.26109C4.28844 0.5 3.5 1.28352 3.5 2.25008V19.7499C3.5 20.7165 4.28844 21.5 5.26109 21.5H19.7312C20.7038 21.5 21.4923 20.7165 21.4923 19.7499V6.47492C21.4922 6.01078 21.3078 5.56566 20.9797 5.23742L16.7548 1.01258C16.4266 0.684441 15.9815 0.500073 15.5173 0.5Z"
        fill={fill}
      />
      <path
        d="M15.5 0.5V4.50008C15.5001 5.03047 15.7108 5.53912 16.0858 5.91417C16.4609 6.28921 16.9695 6.49994 17.4999 6.5H21.5L15.5 0.5Z"
        fill={fill}
      />
      <path
        d="M1.5 17.25H9.5C9.76522 17.25 10.0196 17.1446 10.2071 16.9571C10.3946 16.7696 10.5 16.5152 10.5 16.25V8.25C10.5 7.98478 10.3946 7.73043 10.2071 7.54289C10.0196 7.35536 9.76522 7.25 9.5 7.25H1.5C1.23478 7.25 0.980429 7.35536 0.792893 7.54289C0.605357 7.73043 0.5 7.98478 0.5 8.25V16.25C0.5 16.5152 0.605357 16.7696 0.792893 16.9571C0.980429 17.1446 1.23478 17.25 1.5 17.25Z"
        fill={fill}
      />
      <path
        d="M2.75 14L4.65155 11.3676L2.90967 8.75H4.31147L5.26224 10.4232C5.34955 10.5818 5.40961 10.7002 5.44241 10.7782H5.45471C5.51791 10.6514 5.58327 10.5282 5.65153 10.4086L6.6679 8.75H7.95466L6.16792 11.3531L8 14H6.63076L5.53238 12.1621C5.48063 12.0841 5.43672 12.002 5.40117 11.9168H5.38501C5.36571 11.9755 5.32351 12.0547 5.25814 12.1548L4.1272 14H2.75Z"
        fill="#F9F7F7"
      />
      <path
        d="M6.69171 15.1196L6.89527 15.5073L7.10388 15.1196H7.41933L7.09811 15.674L7.42799 16.2284H7.11399L6.89527 15.8451L6.68016 16.2284H6.36255L6.69171 15.674L6.3741 15.1196H6.69171Z"
        fill="white"
      />
      <path
        d="M6.21574 15.4356L5.93423 15.4529C5.92941 15.4288 5.91907 15.4072 5.90319 15.3879C5.88731 15.3682 5.86637 15.3526 5.84039 15.341C5.81488 15.329 5.78432 15.323 5.74871 15.323C5.70107 15.323 5.66089 15.3331 5.62816 15.3533C5.59544 15.373 5.57908 15.3995 5.57908 15.4327C5.57908 15.4592 5.58966 15.4815 5.61084 15.4998C5.63201 15.5181 5.66835 15.5328 5.71984 15.5439L5.92051 15.5843C6.02831 15.6064 6.10867 15.642 6.16161 15.6911C6.21454 15.7402 6.24101 15.8047 6.24101 15.8846C6.24101 15.9572 6.21959 16.021 6.17677 16.0759C6.13442 16.1307 6.07619 16.1736 6.00208 16.2044C5.92845 16.2347 5.84351 16.2498 5.74727 16.2498C5.60049 16.2498 5.48355 16.2193 5.39645 16.1582C5.30983 16.0966 5.25906 16.0128 5.24414 15.907L5.54659 15.8911C5.55574 15.9358 5.57787 15.97 5.613 15.9936C5.64813 16.0167 5.69313 16.0282 5.74799 16.0282C5.80189 16.0282 5.8452 16.0179 5.87792 15.9972C5.91113 15.976 5.92797 15.9488 5.92845 15.9156C5.92797 15.8877 5.91618 15.8648 5.89308 15.847C5.86998 15.8288 5.83437 15.8148 5.78625 15.8052L5.59424 15.7669C5.48596 15.7453 5.40535 15.7077 5.35242 15.6543C5.29996 15.6009 5.27374 15.5328 5.27374 15.45C5.27374 15.3788 5.29299 15.3174 5.33148 15.266C5.37046 15.2145 5.42508 15.1748 5.49534 15.1468C5.56608 15.1189 5.64886 15.105 5.74366 15.105C5.8837 15.105 5.9939 15.1346 6.07426 15.1938C6.15511 15.253 6.20227 15.3336 6.21574 15.4356Z"
        fill="white"
      />
      <path d="M5.04701 14.75V16.2283H4.7395V14.75H5.04701Z" fill="white" />
      <path
        d="M3.82916 15.1196L4.03272 15.5073L4.24134 15.1196H4.55678L4.23556 15.674L4.56544 16.2284H4.25144L4.03272 15.8451L3.81761 16.2284H3.5L3.82916 15.674L3.51155 15.1196H3.82916Z"
        fill="white"
      />
      <path
        d="M11.9748 10.2499H14.4498C14.5095 10.2499 14.5667 10.2736 14.6089 10.3158C14.6511 10.358 14.6748 10.4152 14.6748 10.4749V10.9249C14.6748 10.9846 14.6511 11.0418 14.6089 11.084C14.5667 11.1262 14.5095 11.1499 14.4498 11.1499H11.9748C11.9151 11.1499 11.8579 11.1262 11.8157 11.084C11.7735 11.0418 11.7498 10.9846 11.7498 10.9249V10.4749C11.7498 10.4152 11.7735 10.358 11.8157 10.3158C11.8579 10.2736 11.9151 10.2499 11.9748 10.2499Z"
        fill={fill}
      />
      <path
        d="M15.5749 10.2499H18.0499C18.1096 10.2499 18.1668 10.2736 18.209 10.3158C18.2512 10.358 18.2749 10.4152 18.2749 10.4749V10.9249C18.2749 10.9846 18.2512 11.0418 18.209 11.084C18.1668 11.1262 18.1096 11.1499 18.0499 11.1499H15.5749C15.5152 11.1499 15.458 11.1262 15.4158 11.084C15.3736 11.0418 15.3499 10.9846 15.3499 10.9249V10.4749C15.3499 10.4152 15.3736 10.358 15.4158 10.3158C15.458 10.2736 15.5152 10.2499 15.5749 10.2499Z"
        fill={fill}
      />
      <path
        d="M11.9748 12.0502H14.4498C14.5095 12.0502 14.5667 12.0739 14.6089 12.1161C14.6511 12.1583 14.6748 12.2155 14.6748 12.2752V12.7252C14.6748 12.7849 14.6511 12.8421 14.6089 12.8843C14.5667 12.9265 14.5095 12.9502 14.4498 12.9502H11.9748C11.9151 12.9502 11.8579 12.9265 11.8157 12.8843C11.7735 12.8421 11.7498 12.7849 11.7498 12.7252V12.2752C11.7498 12.2155 11.7735 12.1583 11.8157 12.1161C11.8579 12.0739 11.9151 12.0502 11.9748 12.0502Z"
        fill={fill}
      />
      <path
        d="M15.5749 12.0502H18.0499C18.1096 12.0502 18.1668 12.0739 18.209 12.1161C18.2512 12.1583 18.2749 12.2155 18.2749 12.2752V12.7252C18.2749 12.7849 18.2512 12.8421 18.209 12.8843C18.1668 12.9265 18.1096 12.9502 18.0499 12.9502H15.5749C15.5152 12.9502 15.458 12.9265 15.4158 12.8843C15.3736 12.8421 15.3499 12.7849 15.3499 12.7252V12.2752C15.3499 12.2155 15.3736 12.1583 15.4158 12.1161C15.458 12.0739 15.5152 12.0502 15.5749 12.0502Z"
        fill={fill}
      />
      <path
        d="M11.9748 13.85H14.4498C14.5095 13.85 14.5667 13.8737 14.6089 13.9159C14.6511 13.9581 14.6748 14.0153 14.6748 14.075V14.525C14.6748 14.5847 14.6511 14.6419 14.6089 14.6841C14.5667 14.7263 14.5095 14.75 14.4498 14.75H11.9748C11.9151 14.75 11.8579 14.7263 11.8157 14.6841C11.7735 14.6419 11.7498 14.5847 11.7498 14.525V14.075C11.7498 14.0153 11.7735 13.9581 11.8157 13.9159C11.8579 13.8737 11.9151 13.85 11.9748 13.85Z"
        fill={fill}
      />
      <path
        d="M15.5749 13.85H18.0499C18.1096 13.85 18.1668 13.8737 18.209 13.9159C18.2512 13.9581 18.2749 14.0153 18.2749 14.075V14.525C18.2749 14.5847 18.2512 14.6419 18.209 14.6841C18.1668 14.7263 18.1096 14.75 18.0499 14.75H15.5749C15.5152 14.75 15.458 14.7263 15.4158 14.6841C15.3736 14.6419 15.3499 14.5847 15.3499 14.525V14.075C15.3499 14.0153 15.3736 13.9581 15.4158 13.9159C15.458 13.8737 15.5152 13.85 15.5749 13.85Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvXlsxOutlineIcon);
