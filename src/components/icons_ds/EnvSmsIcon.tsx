import { SvgIcon } from "@mui/material";
import { IIconProps } from "model/type";
import React, { memo } from "react";

const EnvSmsIcon = ({ sx, ...otherProps }: IIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      sx={{
        fontSize: "inherit",
        ...sx,
      }}
      {...otherProps}
    >
      <circle cx="12" cy="12" r="12" fill="#14AE5C" />
      <path
        d="M12 6C8.13359 6 5 8.5457 5 11.6875C5 13.0437 5.58516 14.2852 6.55859 15.2613C6.2168 16.6395 5.07383 17.8672 5.06016 17.8809C5 17.9438 4.98359 18.0367 5.01914 18.1188C5.05469 18.2008 5.13125 18.25 5.21875 18.25C7.03164 18.25 8.39063 17.3805 9.06328 16.8445C9.95742 17.1809 10.95 17.375 12 17.375C15.8664 17.375 19 14.8293 19 11.6875C19 8.5457 15.8664 6 12 6ZM8.50547 13.4375H8.17188C8.05156 13.4375 7.95312 13.3391 7.95312 13.2188V12.7812C7.95312 12.6609 8.05156 12.5625 8.17188 12.5625H8.5082C8.67227 12.5625 8.79258 12.4668 8.79258 12.382C8.79258 12.3465 8.7707 12.3082 8.73516 12.2781L8.13633 11.7641C7.90391 11.5672 7.77266 11.2855 7.77266 10.9957C7.77266 10.4133 8.29219 9.94023 8.93203 9.94023H9.26562C9.38594 9.94023 9.48438 10.0387 9.48438 10.159V10.5965C9.48438 10.7168 9.38594 10.8152 9.26562 10.8152H8.9293C8.76523 10.8152 8.64492 10.9109 8.64492 10.9957C8.64492 11.0312 8.6668 11.0695 8.70234 11.0996L9.30117 11.6137C9.53359 11.8105 9.66484 12.0922 9.66484 12.382C9.66758 12.9645 9.14531 13.4375 8.50547 13.4375ZM13.75 13.2188C13.75 13.3391 13.6516 13.4375 13.5312 13.4375H13.0938C12.9734 13.4375 12.875 13.3391 12.875 13.2188V11.3539L12.1969 12.8797C12.1176 13.041 11.8852 13.041 11.8059 12.8797L11.125 11.3539V13.2188C11.125 13.3391 11.0266 13.4375 10.9062 13.4375H10.4688C10.3484 13.4375 10.25 13.3391 10.25 13.2188V10.375C10.25 10.1344 10.4469 9.9375 10.6875 9.9375H11.125C11.2918 9.9375 11.4422 10.0305 11.516 10.1781L12 11.1461L12.484 10.1781C12.5578 10.0305 12.7109 9.9375 12.875 9.9375H13.3125C13.5531 9.9375 13.75 10.1344 13.75 10.375V13.2188ZM15.0707 13.4375H14.7344C14.6141 13.4375 14.5156 13.3391 14.5156 13.2188V12.7812C14.5156 12.6609 14.6141 12.5625 14.7344 12.5625H15.0707C15.2348 12.5625 15.3551 12.4668 15.3551 12.382C15.3551 12.3465 15.3332 12.3082 15.2977 12.2781L14.6988 11.7641C14.4664 11.5672 14.3352 11.2855 14.3352 10.9957C14.3352 10.4133 14.8547 9.94023 15.4945 9.94023H15.8281C15.9484 9.94023 16.0469 10.0387 16.0469 10.159V10.5965C16.0469 10.7168 15.9484 10.8152 15.8281 10.8152H15.4918C15.3277 10.8152 15.2074 10.9109 15.2074 10.9957C15.2074 11.0312 15.2293 11.0695 15.2648 11.0996L15.8637 11.6137C16.0961 11.8105 16.2273 12.0922 16.2273 12.382C16.2301 12.9645 15.7105 13.4375 15.0707 13.4375Z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default memo(EnvSmsIcon);