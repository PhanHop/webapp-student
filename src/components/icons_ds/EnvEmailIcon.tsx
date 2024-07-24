import { SvgIcon } from "@mui/material";
import { IIconProps } from "model/type";
import React, { memo } from "react";

const EnvEmailIcon = ({ sx, ...otherProps }: IIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      sx={{
        fontSize: "inherit",
        ...sx,
      }}
      {...otherProps}
    >
      <circle cx="12" cy="12" r="12" fill="#D72E4C" />
      <path
        d="M18.3929 8.71875V15.2813C18.3929 15.8034 18.1998 16.3042 17.856 16.6734C17.5121 17.0426 17.0458 17.25 16.5596 17.25H7.39311C6.90689 17.25 6.44059 17.0426 6.09678 16.6734C5.75297 16.3042 5.55981 15.8034 5.55981 15.2813V8.71875C5.55981 8.58455 5.57204 8.45363 5.59617 8.32697L11.654 13.0887C11.7316 13.137 11.8172 13.158 11.9006 13.155C11.9791 13.155 12.0589 13.134 12.1319 13.0887L18.3391 8.24363C18.3743 8.39588 18.3929 8.55502 18.3929 8.71875ZM16.5596 6.75C17.0897 6.75 17.5673 6.8865 17.9022 7.27303L11.9006 12L5.99889 7.33538C6.17082 7.11869 6.38456 7.04972 6.6253 6.93051C6.86603 6.81131 7.12802 6.74972 7.39311 6.75H16.5596Z"
        fill="#FAFAFA"
      />
    </SvgIcon>
  );
};

export default memo(EnvEmailIcon);
