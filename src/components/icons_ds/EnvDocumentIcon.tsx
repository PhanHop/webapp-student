import { SvgIcon } from "@mui/material";
import { IIconProps } from "model/type";
import React, { memo } from "react";

const EnvDocumentIcon = ({ sx, ...otherProps }: IIconProps) => {
  return (
    <SvgIcon
      sx={{
        fontSize: "inherit",
        ...sx,
      }}
      {...otherProps}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="12" fill="#1876F2" />
      <path
        d="M12.3337 6V9.03358C12.3337 9.37809 12.4704 9.70852 12.7139 9.95228C12.9573 10.1961 13.2876 10.3332 13.6321 10.3337H16.6656V11.2308C16.2156 11.3088 15.8007 11.5244 15.4782 11.8479L11.7625 15.5636C11.3436 15.9838 11.0459 16.5093 10.901 17.0847L10.6392 18.1326H9.30011C8.9553 18.1326 8.62461 17.9956 8.38079 17.7518C8.13698 17.508 8 17.1773 8 16.8325V7.30011C8 6.9553 8.13698 6.62461 8.38079 6.38079C8.62461 6.13698 8.9553 6 9.30011 6H12.3337ZM16.6656 12.1192C16.4488 12.1832 16.2516 12.3007 16.0919 12.4607L12.377 16.1755C12.0695 16.4846 11.8509 16.8708 11.7443 17.2936L11.4817 18.3432C11.4596 18.4316 11.4608 18.5243 11.485 18.6122C11.5093 18.7 11.5559 18.7801 11.6203 18.8446C11.6847 18.9092 11.7646 18.956 11.8524 18.9805C11.9402 19.005 12.0328 19.0064 12.1213 18.9846L13.171 18.722C13.5937 18.6153 13.98 18.3968 14.289 18.0893L18.0056 14.3727C18.2185 14.1602 18.3545 13.8828 18.3921 13.5844C18.4296 13.2859 18.3666 12.9835 18.2129 12.7249C18.0592 12.4663 17.8237 12.2663 17.5437 12.1566C17.2636 12.0469 16.9541 12.0337 16.6656 12.1192ZM13.1996 6.21668V9.03358C13.1996 9.14852 13.2452 9.25875 13.3265 9.34002C13.4078 9.42129 13.518 9.46695 13.6329 9.46695H16.4498L13.1996 6.21668Z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default memo(EnvDocumentIcon);