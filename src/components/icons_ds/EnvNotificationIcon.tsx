import { SvgIcon } from "@mui/material";
import { IIconProps } from "model/type";
import React, { memo } from "react";

const EnvNotificationIcon = ({ sx, ...otherProps }: IIconProps) => {
  return (
    <SvgIcon
      sx={{
        fontSize: "inherit",
        ...sx,
      }}
      {...otherProps}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="12" fill="#FF9600" />
      <path
        d="M7 7.35C7 6.99196 7.14223 6.64858 7.39541 6.39541C7.64858 6.14223 7.99196 6 8.35 6H10.9024V8.8488C10.9024 9.02608 10.9373 9.20163 11.0052 9.36542C11.073 9.52921 11.1724 9.67804 11.2978 9.80339C11.551 10.0566 11.8944 10.1988 12.2524 10.1988H15.1V15.15C15.1 15.508 14.9578 15.8514 14.7046 16.1046C14.4514 16.3578 14.108 16.5 13.75 16.5H8.35C7.99196 16.5 7.64858 16.3578 7.39541 16.1046C7.14223 15.8514 7 15.508 7 15.15V7.35ZM9.25 11.7C9.13065 11.7 9.01619 11.7474 8.9318 11.8318C8.84741 11.9162 8.8 12.0307 8.8 12.15C8.8 12.2693 8.84741 12.3838 8.9318 12.4682C9.01619 12.5526 9.13065 12.6 9.25 12.6C9.36935 12.6 9.48381 12.5526 9.5682 12.4682C9.65259 12.3838 9.7 12.2693 9.7 12.15C9.7 12.0307 9.65259 11.9162 9.5682 11.8318C9.48381 11.7474 9.36935 11.7 9.25 11.7ZM8.8 13.95C8.8 14.0693 8.84741 14.1838 8.9318 14.2682C9.01619 14.3526 9.13065 14.4 9.25 14.4C9.36935 14.4 9.48381 14.3526 9.5682 14.2682C9.65259 14.1838 9.7 14.0693 9.7 13.95C9.7 13.8307 9.65259 13.7162 9.5682 13.6318C9.48381 13.5474 9.36935 13.5 9.25 13.5C9.13065 13.5 9.01619 13.5474 8.9318 13.6318C8.84741 13.7162 8.8 13.8307 8.8 13.95ZM10.6 12.15C10.6 12.3984 10.8016 12.6 11.05 12.6H12.8824C13.0017 12.6 13.1162 12.5526 13.2006 12.4682C13.285 12.3838 13.3324 12.2693 13.3324 12.15C13.3324 12.0307 13.285 11.9162 13.2006 11.8318C13.1162 11.7474 13.0017 11.7 12.8824 11.7H11.05C10.9307 11.7 10.8162 11.7474 10.7318 11.8318C10.6474 11.9162 10.6 12.0307 10.6 12.15ZM11.05 13.5C10.9307 13.5 10.8162 13.5474 10.7318 13.6318C10.6474 13.7162 10.6 13.8307 10.6 13.95C10.6 14.0693 10.6474 14.1838 10.7318 14.2682C10.8162 14.3526 10.9307 14.4 11.05 14.4H12.8824C13.0017 14.4 13.1162 14.3526 13.2006 14.2682C13.285 14.1838 13.3324 14.0693 13.3324 13.95C13.3324 13.8307 13.285 13.7162 13.2006 13.6318C13.1162 13.5474 13.0017 13.5 12.8824 13.5H11.05ZM11.8024 8.8488V6.2808C11.8484 6.3156 11.892 6.3538 11.9332 6.3954L14.7046 9.1668C14.7466 9.2088 14.7852 9.2528 14.8204 9.2988H12.2524C12.1331 9.2988 12.0186 9.25139 11.9342 9.167C11.8498 9.08261 11.8024 8.96815 11.8024 8.8488ZM8.5774 17.1C8.67045 17.3632 8.84279 17.591 9.07069 17.7522C9.2986 17.9134 9.57086 18 9.85 18H13.75C14.1243 18 14.4949 17.9263 14.8406 17.7831C15.1864 17.6398 15.5006 17.4299 15.7653 17.1653C16.0299 16.9006 16.2398 16.5864 16.3831 16.2406C16.5263 15.8949 16.6 15.5243 16.6 15.15V11.6214C16.5999 11.4441 16.5649 11.2685 16.497 11.1047C16.429 10.9409 16.3295 10.7921 16.204 10.6668L15.7 10.1622V15.15C15.7 15.6672 15.4946 16.1632 15.1289 16.5289C14.7632 16.8946 14.2672 17.1 13.75 17.1H8.5774Z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default memo(EnvNotificationIcon);