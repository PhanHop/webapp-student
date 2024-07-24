import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvTimeToListOutlineIcon = ({
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
        d="M16.4444 1C16.6516 1.00001 16.8513 1.07718 17.0047 1.21645C17.158 1.35573 17.254 1.54713 17.2739 1.75333L17.2778 1.83333V3.22222H19.7778C20.3671 3.22222 20.9324 3.45635 21.3491 3.8731C21.7659 4.28984 22 4.85507 22 5.44444V19.8889C22 20.4783 21.7659 21.0435 21.3491 21.4602C20.9324 21.877 20.3671 22.1111 19.7778 22.1111H4.22222C3.63285 22.1111 3.06762 21.877 2.65087 21.4602C2.23413 21.0435 2 20.4783 2 19.8889V5.44444C2 4.85507 2.23413 4.28984 2.65087 3.8731C3.06762 3.45635 3.63285 3.22222 4.22222 3.22222H6.72222V1.83333C6.72233 1.61932 6.80476 1.41356 6.95245 1.25867C7.10013 1.10379 7.30175 1.01166 7.51551 1.00138C7.72927 0.991091 7.9388 1.06344 8.10067 1.20343C8.26254 1.34342 8.36435 1.54032 8.385 1.75333L8.38889 1.83333V3.22222H15.6111V1.83333C15.6111 1.61232 15.6989 1.40036 15.8552 1.24408C16.0115 1.0878 16.2234 1 16.4444 1ZM20.3333 9.88889H3.66667V19.8889C3.66667 19.9618 3.68104 20.0341 3.70896 20.1015C3.73688 20.1689 3.7778 20.2301 3.82938 20.2817C3.88097 20.3333 3.94222 20.3742 4.00962 20.4022C4.07702 20.4301 4.14927 20.4444 4.22222 20.4444H19.7778C19.9251 20.4444 20.0664 20.3859 20.1706 20.2817C20.2748 20.1775 20.3333 20.0362 20.3333 19.8889V9.88889ZM6.72222 4.88889H4.22222C4.14927 4.88889 4.07702 4.90326 4.00962 4.93118C3.94222 4.9591 3.88097 5.00002 3.82938 5.05161C3.7778 5.1032 3.73688 5.16444 3.70896 5.23184C3.68104 5.29925 3.66667 5.37149 3.66667 5.44444V8.22222H20.3333V5.44444C20.3333 5.2971 20.2748 5.15579 20.1706 5.05161C20.0664 4.94742 19.9251 4.88889 19.7778 4.88889H17.2778V5.72222C17.2777 5.93623 17.1952 6.142 17.0476 6.29688C16.8999 6.45177 16.6983 6.5439 16.4845 6.55418C16.2707 6.56447 16.0612 6.49212 15.8993 6.35212C15.7375 6.21213 15.6356 6.01523 15.615 5.80222L15.6111 5.72222V4.88889H8.38889V5.72222C8.38878 5.93623 8.30635 6.142 8.15866 6.29688C8.01098 6.45177 7.80936 6.5439 7.5956 6.55418C7.38184 6.56446 7.17232 6.49212 7.01044 6.35212C6.84857 6.21213 6.74676 6.01523 6.72611 5.80222L6.72222 5.72222V4.88889Z"
        fill={fill}
      />
      <path
        d="M7.75 11.75C7.9426 11.7501 8.12779 11.8243 8.26719 11.9572C8.40658 12.0901 8.4895 12.2716 8.49876 12.464C8.50801 12.6563 8.4429 12.8449 8.31691 12.9906C8.19092 13.1363 8.01371 13.2279 7.822 13.2465L7.75 13.25H6.75C6.55739 13.2499 6.3722 13.1757 6.2328 13.0428C6.09341 12.9099 6.01049 12.7284 6.00123 12.536C5.99198 12.3437 6.05709 12.1551 6.18308 12.0094C6.30907 11.8637 6.48629 11.7721 6.678 11.7535L6.75 11.75H7.75ZM12.5 11.75C12.6926 11.7501 12.8778 11.8243 13.0172 11.9572C13.1566 12.0901 13.2395 12.2716 13.2488 12.464C13.258 12.6563 13.1929 12.8449 13.0669 12.9906C12.9409 13.1363 12.7637 13.2279 12.572 13.2465L12.5 13.25H11.5C11.3074 13.2499 11.1222 13.1757 10.9828 13.0428C10.8434 12.9099 10.7605 12.7284 10.7512 12.536C10.742 12.3437 10.8071 12.1551 10.9331 12.0094C11.0591 11.8637 11.2363 11.7721 11.428 11.7535L11.5 11.75H12.5ZM17.25 11.75C17.4426 11.7501 17.6278 11.8243 17.7672 11.9572C17.9066 12.0901 17.9895 12.2716 17.9988 12.464C18.008 12.6563 17.9429 12.8449 17.8169 12.9906C17.6909 13.1363 17.5137 13.2279 17.322 13.2465L17.25 13.25H16.25C16.0574 13.2499 15.8722 13.1757 15.7328 13.0428C15.5934 12.9099 15.5105 12.7284 15.5012 12.536C15.492 12.3437 15.5571 12.1551 15.6831 12.0094C15.8091 11.8637 15.9863 11.7721 16.178 11.7535L16.25 11.75H17.25ZM7.75 15.75C7.9426 15.7501 8.12779 15.8243 8.26719 15.9572C8.40658 16.0901 8.4895 16.2716 8.49876 16.464C8.50801 16.6563 8.4429 16.8449 8.31691 16.9906C8.19092 17.1363 8.01371 17.2279 7.822 17.2465L7.75 17.25H6.75C6.55739 17.2499 6.3722 17.1757 6.2328 17.0428C6.09341 16.9099 6.01049 16.7284 6.00123 16.536C5.99198 16.3437 6.05709 16.1551 6.18308 16.0094C6.30907 15.8637 6.48629 15.7721 6.678 15.7535L6.75 15.75H7.75ZM12.5 15.75C12.6926 15.7501 12.8778 15.8243 13.0172 15.9572C13.1566 16.0901 13.2395 16.2716 13.2488 16.464C13.258 16.6563 13.1929 16.8449 13.0669 16.9906C12.9409 17.1363 12.7637 17.2279 12.572 17.2465L12.5 17.25H11.5C11.3074 17.2499 11.1222 17.1757 10.9828 17.0428C10.8434 16.9099 10.7605 16.7284 10.7512 16.536C10.742 16.3437 10.8071 16.1551 10.9331 16.0094C11.0591 15.8637 11.2363 15.7721 11.428 15.7535L11.5 15.75H12.5ZM17.25 15.75C17.4426 15.7501 17.6278 15.8243 17.7672 15.9572C17.9066 16.0901 17.9895 16.2716 17.9988 16.464C18.008 16.6563 17.9429 16.8449 17.8169 16.9906C17.6909 17.1363 17.5137 17.2279 17.322 17.2465L17.25 17.25H16.25C16.0574 17.2499 15.8722 17.1757 15.7328 17.0428C15.5934 16.9099 15.5105 16.7284 15.5012 16.536C15.492 16.3437 15.5571 16.1551 15.6831 16.0094C15.8091 15.8637 15.9863 15.7721 16.178 15.7535L16.25 15.75H17.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvTimeToListOutlineIcon);