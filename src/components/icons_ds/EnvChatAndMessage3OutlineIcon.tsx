import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvChatAndMessage3OutlineIcon = ({
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
        d="M9.99609 8.00146C9.44531 8.00381 9 8.45147 9 8.9999C9 9.54834 9.44531 9.996 9.99609 10.0007C10.5492 10.0007 10.9992 9.55303 10.9992 8.9999C10.9992 8.44678 10.5516 8.00146 9.99609 8.00146ZM13.9969 8.00146C13.4461 8.00381 13.0008 8.45147 13.0008 9.00225C13.0008 9.55068 13.4461 9.99834 13.9969 10.003C14.55 10.003 15 9.55537 15 9.00225C15 8.44678 14.55 8.00146 13.9969 8.00146ZM17.9953 8.00146C17.4445 8.00381 16.9992 8.45147 16.9992 9.00225C16.9992 9.55068 17.4445 9.99834 17.9953 10.003C18.5484 10.003 18.9984 9.55537 18.9984 9.00225C19.0008 8.44678 18.5508 8.00146 17.9953 8.00146Z"
        fill={fill}
      />
      <path
        d="M20.5431 13.214C20.5431 13.9335 19.9688 14.5171 19.2657 14.5171H18.0423L16.5774 16.2538L15.0259 14.5171H8.74463C8.03916 14.5171 7.46729 13.9335 7.46729 13.214V5.646C7.46729 4.92646 8.0415 4.34287 8.74463 4.34287H19.2657C19.9712 4.34287 20.5431 4.92646 20.5431 5.646V13.214ZM19.6782 3.04443H8.33447C7.15322 3.04443 6.18994 4.02412 6.18994 5.23115V13.6288C6.18994 14.8335 7.15088 15.8155 8.33447 15.8155H14.3603L15.9306 17.5733C16.0993 17.7608 16.336 17.8687 16.5985 17.8687C16.8517 17.864 17.0931 17.7515 17.2571 17.5546L18.7267 15.8155H19.6782C20.8595 15.8155 21.8228 14.8358 21.8228 13.6288V5.23115C21.8204 4.02412 20.8595 3.04443 19.6782 3.04443Z"
        fill={fill}
      />
      <path
        d="M14.3344 17.8357H9.10083L7.47896 19.4764L5.94849 17.8357H4.67114C3.93521 17.8357 3.33521 17.2826 3.33521 16.6053V9.45684C3.33521 8.77715 3.93521 8.22637 4.67114 8.22637C5.03677 8.22637 5.33677 7.95215 5.33677 7.61465C5.33677 7.27715 5.03911 7.00293 4.67114 7.00293H4.23989C3.00474 7.00293 1.99927 7.92871 1.99927 9.06777V16.999C1.99927 18.1381 3.00474 19.0639 4.23989 19.0639H5.23364L6.7688 20.7068C6.94224 20.892 7.19302 20.9998 7.45786 21.0045H7.47192C7.73208 21.0045 7.98052 20.9037 8.1563 20.7256L9.79692 19.0639H14.3344C14.7 19.0639 15 18.7896 15 18.4521C15 18.11 14.7024 17.8357 14.3344 17.8357Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvChatAndMessage3OutlineIcon);