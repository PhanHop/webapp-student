import React, { memo } from "react";
import { IIconProps } from "model/type";
import { SvgIcon } from "@mui/material";

const EnvMore1OutlineIcon = ({
  fill = "#000000",
  width = 24,
  height = 24,
  sx,
}: IIconProps) => {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      sx={{ ...sx }}
      fill="none"
    >
      <path
        d="M5.25 14.25C4.0095 14.25 3 13.2405 3 12C3 10.7595 4.0095 9.75 5.25 9.75C6.4905 9.75 7.5 10.7595 7.5 12C7.5 13.2405 6.4905 14.25 5.25 14.25ZM12 14.25C10.7595 14.25 9.75 13.2405 9.75 12C9.75 10.7595 10.7595 9.75 12 9.75C13.2405 9.75 14.25 10.7595 14.25 12C14.25 13.2405 13.2405 14.25 12 14.25ZM18.75 14.25C17.5095 14.25 16.5 13.2405 16.5 12C16.5 10.7595 17.5095 9.75 18.75 9.75C19.9905 9.75 21 10.7595 21 12C21 13.2405 19.9905 14.25 18.75 14.25Z"
        fill={fill}
      />
    </SvgIcon>
  );
};

export default memo(EnvMore1OutlineIcon);
