import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvChatAndMessagePhone = ({
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
        d="M4.16667 3.3335H7.5L9.16667 7.50016L7.08333 8.75016C7.9758 10.5598 9.44039 12.0244 11.25 12.9168L12.5 10.8335L16.6667 12.5002V15.8335C16.6667 16.2755 16.4911 16.6994 16.1785 17.012C15.866 17.3246 15.442 17.5002 15 17.5002C11.7494 17.3026 8.68346 15.9222 6.38069 13.6195C4.07792 11.3167 2.69754 8.25078 2.5 5.00016C2.5 4.55814 2.67559 4.13421 2.98816 3.82165C3.30072 3.50909 3.72464 3.3335 4.16667 3.3335Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(EnvChatAndMessagePhone);
