import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvPdfOutlineIcon = ({
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
        d="M17.0044 14.1908V13.3749H14.4622V17.4999H15.4221V15.9324H16.7732V15.1166H15.4133V14.1999L17.0044 14.1908ZM11.6711 16.7024H11.5199V14.1724H11.6355C12.2755 14.1724 12.7377 14.4474 12.7377 15.4283C12.7377 16.4091 12.2844 16.7024 11.6355 16.7024H11.6711ZM11.7333 13.3749H10.5422V17.4999H11.7511C12.0213 17.5322 12.2951 17.5001 12.5514 17.4061C12.8077 17.3121 13.0397 17.1587 13.2294 16.9577C13.4192 16.7566 13.5617 16.5134 13.646 16.2467C13.7302 15.9799 13.754 15.6968 13.7155 15.4191C13.7498 15.139 13.7209 14.8545 13.631 14.5878C13.5412 14.3212 13.3929 14.0795 13.1976 13.8816C13.0023 13.6838 12.7653 13.5351 12.5052 13.4472C12.245 13.3593 11.9687 13.3346 11.6977 13.3749H11.7333ZM8.24886 15.3549H7.83109V14.1449H8.2133C8.67552 14.1449 8.9333 14.2916 8.9333 14.7133C8.9333 15.1349 8.71108 15.3549 8.24886 15.3549ZM8.24886 13.3749H6.87109V17.4999H7.83109V16.1249H8.2933C9.13774 16.1249 9.86663 15.6666 9.86663 14.7499C9.86663 13.8333 9.14663 13.3749 8.26664 13.3749H8.24886ZM18.4621 21.4507H5.50221V2.54916H11.9999V7.7008C12.0046 8.11018 12.1643 8.50146 12.445 8.79096C12.7258 9.08045 13.1052 9.2452 13.5022 9.24996H18.4799L18.4621 21.4507ZM13.4755 3.37415L17.6621 7.70997H13.4755V3.37415ZM19.5555 7.4808L13.7777 1.45833C13.687 1.36356 13.5855 1.28045 13.4755 1.21083L13.3866 1.165H13.3244C13.1337 1.06537 12.9246 1.00911 12.7111 1L5.51999 1C5.11992 0.999972 4.73598 1.1626 4.45143 1.45261C4.16688 1.74262 4.00468 2.13662 4 2.54916V21.4507C4.00468 21.8633 4.16688 22.2573 4.45143 22.5473C4.73598 22.8373 5.11992 22.9999 5.51999 22.9999H18.4977C18.6956 23.0023 18.892 22.964 19.0754 22.887C19.2587 22.81 19.4252 22.696 19.5652 22.5516C19.7052 22.4073 19.8158 22.2355 19.8904 22.0465C19.9651 21.8574 20.0023 21.6548 19.9999 21.4507V8.57163C19.9992 8.36857 19.9596 8.16765 19.8833 7.98044C19.807 7.79323 19.6956 7.62343 19.5555 7.4808Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvPdfOutlineIcon);