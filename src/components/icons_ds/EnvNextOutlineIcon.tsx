import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvNextOutlineIcon = ({
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
        d="M20.5012 12.5999L12.3512 19.8499C11.9512 20.1999 11.9012 20.8499 12.2512 21.2499C12.6012 21.6499 13.2512 21.6999 13.6512 21.3499L22.6512 13.3499C22.9012 13.1499 23.0012 12.8999 23.0012 12.5999C23.0012 12.2999 22.9012 12.0499 22.6512 11.8499L13.6512 3.84993C13.4512 3.69993 13.2012 3.59993 13.0012 3.59993C12.7012 3.59993 12.4512 3.69993 12.2512 3.94993C11.9012 4.34993 11.9012 4.99993 12.3512 5.34993L20.5012 12.5999Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvNextOutlineIcon);
