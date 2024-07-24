import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvArrowBackIcon = ({
  fill = "#243648",
  width = 24,
  height = 24,
}: IIconProps) => {
  return (
    <svg
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-dhaba5"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="ArrowBackIcon"
      width={width}
      height={height}
    >
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path>
    </svg>
  );
};

export default memo(EnvArrowBackIcon);
