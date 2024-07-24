import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvGifOutlineIcon = ({
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
        d="M15.0173 2.15625C15.161 2.15586 15.3034 2.18397 15.4362 2.23897C15.5689 2.29396 15.6895 2.37475 15.7908 2.47664L20.0156 6.70148C20.1175 6.80282 20.1983 6.92336 20.2533 7.05612C20.3083 7.18887 20.3364 7.33122 20.336 7.47492V20.7499C20.336 21.3532 19.8403 21.8438 19.2312 21.8438H4.76109C4.15172 21.8438 3.65625 21.3532 3.65625 20.7499V3.25008C3.65625 2.6468 4.15195 2.15625 4.76109 2.15625H15.0173ZM15.0173 1.5H4.76109C3.78844 1.5 3 2.28352 3 3.25008V20.7499C3 21.7165 3.78844 22.5 4.76109 22.5H19.2312C20.2038 22.5 20.9923 21.7165 20.9923 20.7499V7.47492C20.9922 7.01078 20.8078 6.56566 20.4797 6.23742L16.2548 2.01258C15.9266 1.68444 15.4815 1.50007 15.0173 1.5Z"
        fill={fill}
      />
      <path
        d="M15 1.5V5.50008C15.0001 6.03047 15.2108 6.53912 15.5858 6.91417C15.9609 7.28921 16.4695 7.49994 16.9999 7.5H21L15 1.5Z"
        fill={fill}
      />
      <path
        d="M13.3455 19.4998V16.6377H15.2405V17.1366H13.9506V17.8186H15.1147V18.3175H13.9506V19.4998H13.3455Z"
        fill={fill}
      />
      <path d="M12.8478 16.6377V19.4998H12.2427V16.6377H12.8478Z" fill={fill} />
      <path
        d="M11.1466 17.5629C11.1271 17.4949 11.0996 17.4348 11.0642 17.3826C11.0288 17.3295 10.9854 17.2848 10.9342 17.2485C10.8839 17.2112 10.8261 17.1828 10.7609 17.1632C10.6966 17.1437 10.6253 17.1339 10.5471 17.1339C10.4008 17.1339 10.2722 17.1702 10.1614 17.2429C10.0514 17.3156 9.96572 17.4213 9.90423 17.5601C9.84274 17.698 9.812 17.8666 9.812 18.066C9.812 18.2654 9.84228 18.435 9.90283 18.5747C9.96339 18.7145 10.0491 18.8211 10.16 18.8948C10.2708 18.9674 10.4017 19.0038 10.5527 19.0038C10.6896 19.0038 10.8066 18.9795 10.9035 18.9311C11.0013 18.8817 11.0758 18.8123 11.1271 18.7229C11.1792 18.6334 11.2053 18.5277 11.2053 18.4056L11.3283 18.4238H10.5904V17.9682H11.7881V18.3288C11.7881 18.5803 11.735 18.7965 11.6288 18.9772C11.5226 19.157 11.3763 19.2958 11.1899 19.3937C11.0036 19.4906 10.7903 19.539 10.5499 19.539C10.2816 19.539 10.0458 19.4798 9.84274 19.3615C9.63964 19.2423 9.48125 19.0732 9.36759 18.8542C9.25485 18.6343 9.19849 18.3735 9.19849 18.0716C9.19849 17.8396 9.23203 17.6328 9.29911 17.4511C9.36712 17.2685 9.46215 17.1139 9.5842 16.9871C9.70625 16.8604 9.84833 16.764 10.0104 16.6979C10.1726 16.6317 10.3482 16.5986 10.5373 16.5986C10.6994 16.5986 10.8503 16.6224 10.9901 16.6699C11.1299 16.7165 11.2538 16.7826 11.3618 16.8684C11.4708 16.9541 11.5598 17.0561 11.6288 17.1744C11.6977 17.2918 11.742 17.4213 11.7615 17.5629H11.1466Z"
        fill={fill}
      />
      <path
        d="M9.75 12V10.038C9.75 9.5764 10.2495 9.2877 10.6495 9.5181L12.3542 10.5L14.0738 11.4826C14.4755 11.7122 14.4772 12.2908 14.0769 12.5227L12.3542 13.5208L10.6495 14.5027C10.2495 14.7331 9.75 14.4444 9.75 13.9828V12Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvGifOutlineIcon);
