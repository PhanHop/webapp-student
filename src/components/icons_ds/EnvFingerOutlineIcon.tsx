import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvFingerOutlineIcon = ({
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
        d="M11.6402 1.0026C7.79475 1.06622 5.30655 2.68838 5.30655 2.68838C4.98987 2.87923 4.9107 3.31393 5.12559 3.61079C5.35179 3.93947 5.79288 3.99248 6.13218 3.76983C6.13218 3.76983 11.0068 0.387665 18.0077 3.81224C18.3357 3.99248 18.7768 3.88645 18.9691 3.56838C19.1839 3.25031 19.0369 2.84742 18.6524 2.64597C16.7636 1.71296 14.9766 1.24646 13.3706 1.07682C12.7712 1.01321 12.1944 0.992001 11.6402 1.0026ZM12.0813 3.76983C5.34048 3.68501 2.11712 8.76356 2.11712 8.76356C1.90223 9.07102 1.99271 9.47392 2.30939 9.67536C2.63738 9.87681 3.07847 9.77078 3.34992 9.43151C3.34992 9.43151 6.08694 4.99971 12.0586 5.09513C18.0529 5.16934 20.6769 9.3997 20.6769 9.3997C20.8805 9.70717 21.3102 9.81319 21.6495 9.63295C22.0115 9.44211 22.0906 9.03922 21.8984 8.71054C21.8984 8.71054 18.7881 3.85465 12.0813 3.76983ZM11.2669 6.39922C9.36685 6.52645 7.54593 7.1732 6.17742 8.24404C3.48564 10.3327 1.76651 14.1602 3.65529 19.3129C3.7797 19.6628 4.18686 19.8431 4.56009 19.7264C4.92201 19.6098 5.12559 19.2281 4.98987 18.8888C3.24813 14.1496 4.7976 11.0431 7.08222 9.24066C9.3103 7.53368 13.2462 7.12018 16.1755 8.81657C17.6119 9.66476 18.7315 11.1279 19.297 12.5698C19.8739 14.0117 19.8399 15.4113 19.3762 16.0686C18.9012 16.7578 17.9398 17.0122 17.0916 16.8108C16.2433 16.6093 15.5534 16.0368 15.5195 14.8281C15.4856 13.0151 13.97 11.8913 12.3979 11.7216C10.8824 11.552 9.12934 12.3154 8.67694 14.0117C7.81737 17.1076 9.97759 21.5076 14.9766 22.9708C15.3498 23.0768 15.7457 22.8859 15.8701 22.5361C15.9832 22.1862 15.7909 21.8045 15.3951 21.6985C11.0634 20.4368 9.4234 16.5881 10.0454 14.3192C10.3169 13.3014 11.2669 12.9515 12.2622 13.0363C13.2462 13.1423 14.0944 13.6937 14.0944 14.8493C14.151 16.5881 15.3612 17.765 16.741 18.0937C18.1208 18.4223 19.7155 18.0088 20.5638 16.7896C21.446 15.5491 21.2989 13.7997 20.6316 12.1139C19.953 10.4175 18.6976 8.74235 16.9219 7.69271C15.2295 6.71346 13.2503 6.26073 11.2669 6.39922ZM11.6741 8.9756V8.98621C9.66091 9.04982 7.64772 10.0252 6.4941 12.0821C5.00118 14.7221 5.67978 17.4151 6.67506 19.3553C7.68165 21.3062 9.05017 22.5997 9.05017 22.5997C9.32161 22.8647 9.7627 22.8647 10.0454 22.6103C10.3282 22.3558 10.3282 21.9635 10.0568 21.6773C10.0568 21.6773 8.84659 20.511 7.95309 18.7828C7.0596 17.0546 6.51672 14.8705 7.7382 12.7076C9.00493 10.4811 11.2669 9.94042 13.2575 10.4811C15.2707 11.0325 16.9559 12.6758 16.9219 15.1038C16.8767 15.4749 17.1595 15.7929 17.5553 15.8141C17.9398 15.846 18.2791 15.5703 18.3131 15.1356C18.3809 12.1033 16.2094 9.90862 13.6533 9.20886C13.0103 9.03631 12.3427 8.95764 11.6741 8.9756ZM11.9229 14.2768C11.5271 14.2874 11.2217 14.5949 11.233 14.9554C11.233 14.9554 11.2669 16.5245 12.183 18.0407C13.1331 19.5568 15.1463 20.9987 18.6524 20.6912C19.0369 20.67 19.3423 20.3732 19.3197 19.9915C19.297 19.6204 18.9577 19.3447 18.5167 19.3766C15.4403 19.6416 14.1397 18.5496 13.4045 17.3727C12.6694 16.2064 12.6468 14.9448 12.6468 14.9448C12.6468 14.8561 12.628 14.7684 12.5915 14.6867C12.5549 14.6049 12.5014 14.5308 12.4341 14.4687C12.3667 14.4065 12.2868 14.3575 12.1991 14.3246C12.1113 14.2916 12.0174 14.2754 11.9229 14.2768Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvFingerOutlineIcon);
