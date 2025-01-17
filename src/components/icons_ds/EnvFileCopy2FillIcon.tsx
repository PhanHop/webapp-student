import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvFileCopy2FillIcon = ({
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
        d="M7 6V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18H17V21C17 21.552 16.55 22 15.993 22H4.007C3.87509 22.0009 3.7443 21.9757 3.62217 21.9259C3.50003 21.8761 3.38896 21.8025 3.29536 21.7096C3.20176 21.6166 3.12748 21.5061 3.07678 21.3843C3.02609 21.2625 3 21.1319 3 21L3.003 7C3.003 6.448 3.453 6 4.009 6H7ZM9 6H17V16H19V4H9V6ZM7 11V13H13V11H7ZM7 15V17H13V15H7Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvFileCopy2FillIcon);
