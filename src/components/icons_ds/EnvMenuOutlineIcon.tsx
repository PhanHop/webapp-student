import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvMenuOutlineIcon = ({
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
        d="M2 19.7857C2 20.4563 2.54365 21 3.21429 21H20.7857C21.4563 21 22 20.4563 22 19.7857C22 19.1151 21.4563 18.5714 20.7857 18.5714H3.21428C2.54365 18.5714 2 19.1151 2 19.7857ZM2 12.5C2 13.1706 2.54365 13.7143 3.21429 13.7143H20.7857C21.4563 13.7143 22 13.1706 22 12.5C22 11.8294 21.4563 11.2857 20.7857 11.2857H3.21428C2.54365 11.2857 2 11.8294 2 12.5ZM3.21428 4C2.54365 4 2 4.54365 2 5.21429C2 5.88492 2.54365 6.42857 3.21429 6.42857H20.7857C21.4563 6.42857 22 5.88492 22 5.21429C22 4.54365 21.4563 4 20.7857 4H3.21428Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvMenuOutlineIcon);
