import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvChatAndMessageNotificationOutlineIcon = ({
  fill = "#243648",
  width = 24,
  height = 24,
}: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22.232 4.27818C22.0522 4.09938 21.8106 3.9995 21.5591 4H2.44013C2.18848 3.99972 1.94677 4.09996 1.76699 4.27916C1.53157 4.43524 1.33813 4.64862 1.2042 4.89998C1.07027 5.15134 1.00009 5.43273 1 5.71866V18.2813C1.00051 18.737 1.17861 19.1738 1.49522 19.496C1.81184 19.8182 2.24111 19.9995 2.68887 20H21.3111C21.7589 19.9995 22.1882 19.8182 22.5048 19.496C22.8214 19.1738 22.9995 18.737 23 18.2813V5.71866C23 5.43248 22.9297 5.15083 22.7956 4.89927C22.6615 4.64772 22.4678 4.43423 22.232 4.27818ZM11.9999 11.6262L3.90245 5.47314H20.0975L11.9999 11.6262ZM21.3111 18.5269H2.68887C2.62489 18.5269 2.56352 18.501 2.51827 18.455C2.47303 18.4089 2.44761 18.3465 2.44761 18.2813V6.20504L11.4242 13.0274C11.5908 13.1529 11.7926 13.2206 11.9999 13.2206C12.2072 13.2206 12.409 13.1529 12.5755 13.0274L21.5524 6.20504V18.2813C21.5524 18.3465 21.527 18.4089 21.4817 18.455C21.4365 18.501 21.3751 18.5269 21.3111 18.5269Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvChatAndMessageNotificationOutlineIcon);