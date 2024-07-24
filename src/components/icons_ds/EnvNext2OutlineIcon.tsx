import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvNext2OutlineIcon = ({
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
        d="M0 6.01875C0 2.99153 3.21048 1.0813 5.8511 2.4511L6.04774 2.55946L16.8604 8.92022C19.4207 10.4265 19.4956 14.065 17.0864 15.6957L16.8604 15.8388L6.04774 22.1996C3.43789 23.7339 0.164537 21.936 0.00535089 18.965L0 18.7403V6.01875ZM2.00655 6.01875V18.7403C2.0066 19.0938 2.10004 19.441 2.27742 19.7468C2.4548 20.0526 2.70982 20.3061 3.01666 20.4816C3.3235 20.6572 3.67128 20.7486 4.02478 20.7465C4.37829 20.7445 4.72498 20.649 5.02975 20.4699L15.8437 14.1092C16.145 13.932 16.3948 13.6792 16.5683 13.3758C16.7418 13.0725 16.8331 12.729 16.8331 12.3795C16.8331 12.03 16.7418 11.6866 16.5683 11.3832C16.3948 11.0798 16.145 10.827 15.8437 10.6499L5.02975 4.2891C4.72498 4.10999 4.37829 4.01458 4.02478 4.01252C3.67128 4.01046 3.3235 4.10183 3.01666 4.27738C2.70982 4.45293 2.4548 4.70644 2.27742 5.01223C2.10004 5.31802 2.0066 5.66524 2.00655 6.01875ZM23.7442 3.01561V21.7434C23.7442 22.0095 23.6385 22.2647 23.4503 22.4528C23.2622 22.641 23.007 22.7467 22.7409 22.7467C22.4748 22.7467 22.2196 22.641 22.0315 22.4528C21.8433 22.2647 21.7376 22.0095 21.7376 21.7434V3.01561C21.7376 2.74953 21.8433 2.49434 22.0315 2.30619C22.2196 2.11804 22.4748 2.01234 22.7409 2.01234C23.007 2.01234 23.2622 2.11804 23.4503 2.30619C23.6385 2.49434 23.7442 2.74953 23.7442 3.01561Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvNext2OutlineIcon);
