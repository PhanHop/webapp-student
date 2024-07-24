import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvLinkOutlineIcon = ({
  fill = "#243648",
  width = 24,
  height = 24,
}: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M16.5428 2.51921C17.233 3.17755 17.6531 4.06947 17.7211 5.02087C17.7891 5.97227 17.5001 6.91486 16.9105 7.66466L10.0691 14.2878C10.0264 14.3365 9.97824 14.3847 9.93279 14.4333C9.48555 14.8595 8.89147 15.0972 8.27369 15.0972C7.65592 15.0972 7.06184 14.8595 6.6146 14.4333C6.19432 14.0305 5.94924 13.4786 5.93223 12.8967C5.91522 12.3148 6.12765 11.7495 6.52369 11.3228C6.554 11.2907 6.5843 11.2604 6.6146 11.2319C6.66233 11.1833 6.71597 11.141 6.76415 11.0956L12.2073 5.83648C12.2128 5.82557 12.2232 5.82012 12.2287 5.80966C12.3627 5.68479 12.539 5.61536 12.7221 5.61536C12.9052 5.61536 13.0816 5.68479 13.2155 5.80966C13.3409 5.92638 13.4153 6.08772 13.4227 6.25883C13.4301 6.42994 13.3699 6.5971 13.2551 6.72421C13.2423 6.7383 13.2291 6.75148 13.2155 6.76421C13.1986 6.78494 13.1789 6.80315 13.1569 6.8183L7.77278 12.066C7.71498 12.1013 7.66131 12.1429 7.61279 12.1901C7.44494 12.3516 7.34734 12.5727 7.34104 12.8055C7.33475 13.0383 7.42027 13.2643 7.57915 13.4347C7.59006 13.4465 7.60142 13.4574 7.61279 13.4688C7.79023 13.6401 8.02726 13.7358 8.27392 13.7358C8.52058 13.7358 8.75761 13.6401 8.93506 13.4688C8.98341 13.4235 9.02642 13.3729 9.06324 13.3178L15.8996 6.68921C16.2288 6.19935 16.3738 5.60874 16.309 5.02214C16.2442 4.43553 15.9737 3.89084 15.5455 3.48466C15.1091 3.06723 14.5462 2.80678 13.9455 2.74433C13.3448 2.68187 12.7403 2.82094 12.2273 3.13966L4.58188 10.7274C3.94601 11.4953 3.6249 12.4758 3.68327 13.4711C3.74164 14.4665 4.17515 15.4027 4.89642 16.091C5.63408 16.7921 6.59732 17.2076 7.6135 17.263C8.62969 17.3184 9.63238 17.0101 10.4419 16.3933L15.6896 11.3183L15.7001 11.3238C15.8341 11.1984 16.011 11.1291 16.1946 11.1301C16.3781 11.1312 16.5542 11.2024 16.6869 11.3292C16.8113 11.4467 16.8847 11.6084 16.891 11.7795C16.8974 11.9506 16.8363 12.1173 16.721 12.2438C16.7101 12.2557 16.6987 12.2672 16.6869 12.2783L16.6923 12.2838L11.381 17.4215L11.3755 17.4092C10.294 18.2568 8.94389 18.6873 7.5714 18.6222C6.19892 18.5571 4.89557 18.0008 3.89915 17.0547C2.91428 16.1147 2.33116 14.8302 2.27186 13.47C2.21255 12.1099 2.68165 10.7795 3.58097 9.75739L11.221 2.1633C12.0099 1.59174 12.9741 1.31441 13.9462 1.37942C14.9183 1.44443 15.8369 1.84768 16.5428 2.51921Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvLinkOutlineIcon);
