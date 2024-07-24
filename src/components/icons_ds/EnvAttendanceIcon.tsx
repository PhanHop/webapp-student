import { IIconProps } from "model/type";
import React, { memo } from "react";

const EnvAttendanceIcon = ({
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
        d="M19.524 9.67396H20.892V5.56996C20.892 4.05796 19.656 2.83396 18.156 2.83396H15.42V1.78996C15.42 1.40596 15.108 1.10596 14.736 1.10596C14.352 1.10596 14.052 1.41796 14.052 1.78996V2.82196H7.18802V1.78996C7.18802 1.40596 6.87602 1.10596 6.50402 1.10596C6.12002 1.10596 5.82002 1.41796 5.82002 1.78996V2.82196H3.08402C1.57202 2.82196 0.348022 4.05796 0.348022 5.55796V19.262C0.348022 20.774 1.58402 21.998 3.08402 21.998H11.62C12.004 21.998 12.304 21.686 12.304 21.314C12.304 20.93 11.992 20.63 11.62 20.63H3.08402C2.32802 20.63 1.71602 20.018 1.71602 19.262V9.67396H19.524ZM1.71602 5.56996C1.71602 4.81396 2.32802 4.20196 3.08402 4.20196H5.82002V4.88596C5.82002 5.26996 6.13202 5.56996 6.50402 5.56996C6.88802 5.56996 7.18802 5.25796 7.18802 4.88596V4.18996H14.04V4.87396C14.04 5.25796 14.352 5.55796 14.724 5.55796C15.108 5.55796 15.408 5.24596 15.408 4.87396V4.18996H18.144C18.9 4.18996 19.512 4.80196 19.512 5.55796V8.29396H1.71602V5.56996Z"
        fill={fill}
        stroke="#243648"
        strokeWidth="0.2"
      />
      <path
        d="M5.13603 12.4219H7.87203C8.25603 12.4219 8.55603 12.7339 8.55603 13.1059C8.55603 13.4899 8.24403 13.7899 7.87203 13.7899H5.13603C4.75203 13.7899 4.45203 13.4779 4.45203 13.1059C4.45203 12.7219 4.76403 12.4219 5.13603 12.4219ZM5.13603 16.5259H7.87203C8.25603 16.5259 8.55603 16.8379 8.55603 17.2099C8.55603 17.5939 8.24403 17.8939 7.87203 17.8939H5.13603C4.75203 17.8939 4.45203 17.5819 4.45203 17.2099C4.45203 16.8379 4.76403 16.5259 5.13603 16.5259ZM22.476 13.1059C22.068 12.5539 21.516 12.0739 20.904 11.7379C20.496 11.4619 20.016 11.3299 19.536 11.1859C19.128 11.0539 18.648 10.9819 18.168 10.9819C15.156 10.9819 12.684 13.4539 12.684 16.4659C12.684 18.1099 13.44 19.5499 14.532 20.5819C15.492 21.4099 16.788 21.9499 18.168 21.9499C19.884 21.9499 21.456 21.1219 22.488 19.8979C23.244 18.9379 23.652 17.7739 23.652 16.4659C23.64 15.1579 23.232 14.0659 22.476 13.1059ZM20.832 19.6099C20.148 20.2219 19.188 20.6419 18.156 20.6419C15.9 20.6419 14.04 18.7939 14.04 16.5259C14.04 14.2699 15.888 12.4099 18.156 12.4099C18.636 12.4099 19.116 12.4819 19.524 12.6859C20.004 12.8899 20.484 13.1659 20.892 13.5139C21.72 14.2699 22.26 15.3619 22.26 16.5979C22.272 17.7619 21.72 18.8539 20.832 19.6099Z"
        fill={fill}
      />
      <path
        d="M17.4721 16.7421V14.4741C17.4721 14.0901 17.7841 13.7901 18.1561 13.8021C18.5281 13.8021 18.8401 14.1021 18.8401 14.4861V15.8541H20.2321C20.6041 15.8541 20.9161 16.1541 20.9161 16.5381C20.9161 16.9101 20.6161 17.2221 20.2321 17.2221H17.9521C17.6881 17.2221 17.4721 17.0061 17.4721 16.7421Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvAttendanceIcon);