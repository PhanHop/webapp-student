import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvAddOutlineIcon = ({
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
        d="M11 20.1667C5.9455 20.1667 1.83333 16.0545 1.83333 11C1.83333 5.9455 5.9455 1.83333 11 1.83333C16.0545 1.83333 20.1667 5.9455 20.1667 11C20.1667 16.0545 16.0545 20.1667 11 20.1667ZM11 0C4.93442 0 0 4.93442 0 11C0 17.0656 4.93442 22 11 22C17.0656 22 22 17.0656 22 11C22 4.93442 17.0656 0 11 0Z"
        fill={fill}
      />
      <path
        d="M15.9259 9.82363H11.9173V5.81413C11.9173 5.57101 11.8207 5.33785 11.6488 5.16595C11.4769 4.99404 11.2437 4.89746 11.0006 4.89746C10.7575 4.89746 10.5243 4.99404 10.3524 5.16595C10.1805 5.33785 10.0839 5.57101 10.0839 5.81413V9.82363H6.07536C5.83224 9.82363 5.59909 9.92021 5.42718 10.0921C5.25527 10.264 5.15869 10.4972 5.15869 10.7403C5.15869 10.9834 5.25527 11.2166 5.42718 11.3885C5.59909 11.5604 5.83224 11.657 6.07536 11.657H10.0839V15.6665C10.0839 15.9096 10.1805 16.1427 10.3524 16.3146C10.5243 16.4866 10.7575 16.5831 11.0006 16.5831C11.2437 16.5831 11.4769 16.4866 11.6488 16.3146C11.8207 16.1427 11.9173 15.9096 11.9173 15.6665V11.657H15.9268C16.1699 11.657 16.403 11.5604 16.575 11.3885C16.7469 11.2166 16.8434 10.9834 16.8434 10.7403C16.8434 10.4972 16.7469 10.264 16.575 10.0921C16.403 9.92021 16.1699 9.82363 15.9268 9.82363"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvAddOutlineIcon);