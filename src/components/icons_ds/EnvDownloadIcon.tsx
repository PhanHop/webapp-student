import { SvgIcon } from "@mui/material";
import { IIconProps } from "model/type";
import React, { memo } from "react";

const EnvDownloadIcon = ({ sx, ...otherProps }: IIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 20 21"
      sx={{
        fontSize: "inherit",
        ...sx,
      }}
      {...otherProps}
    >
      <g clipPath="url(#clip0_14377_16766)">
        <path
          d="M8.4375 0.376953H11.5625C12.082 0.376953 12.5 0.794922 12.5 1.31445V7.87695H15.9258C16.6211 7.87695 16.9688 8.7168 16.4766 9.20898L10.5352 15.1543C10.2422 15.4473 9.76172 15.4473 9.46875 15.1543L3.51953 9.20898C3.02734 8.7168 3.375 7.87695 4.07031 7.87695H7.5V1.31445C7.5 0.794922 7.91797 0.376953 8.4375 0.376953ZM20 15.0645V19.4395C20 19.959 19.582 20.377 19.0625 20.377H0.9375C0.417969 20.377 0 19.959 0 19.4395V15.0645C0 14.5449 0.417969 14.127 0.9375 14.127H6.66797L8.58203 16.041C9.36719 16.8262 10.6328 16.8262 11.418 16.041L13.332 14.127H19.0625C19.582 14.127 20 14.5449 20 15.0645ZM15.1562 18.502C15.1562 18.0723 14.8047 17.7207 14.375 17.7207C13.9453 17.7207 13.5938 18.0723 13.5938 18.502C13.5938 18.9316 13.9453 19.2832 14.375 19.2832C14.8047 19.2832 15.1562 18.9316 15.1562 18.502ZM17.6562 18.502C17.6562 18.0723 17.3047 17.7207 16.875 17.7207C16.4453 17.7207 16.0938 18.0723 16.0938 18.502C16.0938 18.9316 16.4453 19.2832 16.875 19.2832C17.3047 19.2832 17.6562 18.9316 17.6562 18.502Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_14377_16766">
          <rect
            width="20"
            height="20"
            fill="currentColor"
            transform="translate(0 0.376953)"
          />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default memo(EnvDownloadIcon);
