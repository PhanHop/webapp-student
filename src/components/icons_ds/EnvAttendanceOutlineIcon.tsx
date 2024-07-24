import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvAttendanceOutlineIcon = ({
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
        d="M20.2266 1.5H3.77344C2.94492 1.5 2.27344 2.17148 2.27344 3V21C2.27344 21.8285 2.94492 22.5 3.77344 22.5H20.2266C21.0551 22.5 21.7266 21.8285 21.7266 21V3C21.7266 2.17148 21.0551 1.5 20.2266 1.5ZM20.2266 20.25C20.2266 20.6641 19.8907 21 19.4766 21H4.52344C4.1093 21 3.77344 20.6641 3.77344 20.25V3.75C3.77344 3.33586 4.1093 3 4.52344 3H19.4766C19.8907 3 20.2266 3.33586 20.2266 3.75V20.25Z"
        fill={fill}
      />
      <path
        d="M10.1318 6.55713H8.81934V5.24463C8.81934 4.83049 8.48348 4.49463 8.06934 4.49463C7.6552 4.49463 7.31934 4.83049 7.31934 5.24463V6.55713H6.00684C5.5927 6.55713 5.25684 6.89299 5.25684 7.30713C5.25684 7.72127 5.5927 8.05713 6.00684 8.05713H7.31934V9.36963C7.31934 9.78377 7.6552 10.1196 8.06934 10.1196C8.48348 10.1196 8.81934 9.78377 8.81934 9.36963V8.05713H10.1318C10.546 8.05713 10.8818 7.72127 10.8818 7.30713C10.8818 6.89299 10.546 6.55713 10.1318 6.55713ZM17.9047 8.05713H14.7171C14.303 8.05713 13.9671 7.72127 13.9671 7.30713C13.9671 6.89299 14.303 6.55713 14.7171 6.55713H17.9047C18.3188 6.55713 18.6547 6.89299 18.6547 7.30713C18.6547 7.7215 18.3188 8.05713 17.9047 8.05713ZM17.9047 13.0261H6.00684C5.5927 13.0261 5.25684 12.6903 5.25684 12.2761C5.25684 11.862 5.5927 11.5261 6.00684 11.5261H17.9047C18.3188 11.5261 18.6547 11.862 18.6547 12.2761C18.6547 12.6905 18.3188 13.0261 17.9047 13.0261ZM17.9047 17.9951H6.00684C5.5927 17.9951 5.25684 17.6592 5.25684 17.2451C5.25684 16.831 5.5927 16.4951 6.00684 16.4951H17.9047C18.3188 16.4951 18.6547 16.831 18.6547 17.2451C18.6547 17.6595 18.3188 17.9951 17.9047 17.9951Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvAttendanceOutlineIcon);
