import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvQuestionOutlineIcon = ({
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
        d="M12 23C9.82441 23 7.69767 22.3549 5.88873 21.1462C4.07979 19.9375 2.66989 18.2195 1.83733 16.2095C1.00477 14.1995 0.786929 11.9878 1.21137 9.85401C1.6358 7.72022 2.68345 5.76021 4.22183 4.22183C5.76021 2.68345 7.72022 1.6358 9.85401 1.21137C11.9878 0.786929 14.1995 1.00477 16.2095 1.83733C18.2195 2.66989 19.9375 4.07979 21.1462 5.88873C22.3549 7.69767 23 9.82441 23 12C22.9968 14.9164 21.8368 17.7124 19.7746 19.7746C17.7124 21.8368 14.9164 22.9968 12 23ZM12 2.41167C10.1036 2.41167 8.2498 2.97402 6.67301 4.0276C5.09622 5.08118 3.86726 6.57867 3.14154 8.33071C2.41582 10.0827 2.22594 12.0106 2.59591 13.8706C2.96588 15.7305 3.87908 17.439 5.22003 18.78C6.56098 20.1209 8.26946 21.0341 10.1294 21.4041C11.9894 21.7741 13.9173 21.5842 15.6693 20.8585C17.4213 20.1327 18.9188 18.9038 19.9724 17.327C21.026 15.7502 21.5883 13.8964 21.5883 12C21.5851 9.45801 20.5739 7.02106 18.7764 5.2236C16.9789 3.42614 14.542 2.41491 12 2.41167ZM11.2117 17.3179C11.2117 17.0839 11.3046 16.8594 11.4701 16.6939C11.6356 16.5284 11.8601 16.4354 12.0941 16.4354C12.3282 16.4354 12.5526 16.5284 12.7181 16.6939C12.8836 16.8594 12.9766 17.0839 12.9766 17.3179C12.9766 17.5519 12.8836 17.7764 12.7181 17.9419C12.5526 18.1074 12.3282 18.2003 12.0941 18.2003C11.8601 18.2003 11.6356 18.1074 11.4701 17.9419C11.3046 17.7764 11.2117 17.5519 11.2117 17.3179ZM12.0648 15.399C11.8776 15.399 11.6981 15.3247 11.5657 15.1925C11.4332 15.0603 11.3587 14.8809 11.3583 14.6938V13.5767C11.3618 13.1445 11.4708 12.7196 11.676 12.3392C11.8811 11.9587 12.1761 11.6342 12.5353 11.3938C12.9998 11.1249 13.4312 10.7973 13.8187 10.4233C14.1951 10.02 14.4053 9.48834 14.4053 8.93589C14.4001 8.63276 14.335 8.33365 14.2138 8.05577C14.0925 7.77789 13.9175 7.52672 13.6989 7.3167C13.4802 7.10668 13.2222 6.94195 12.9397 6.832C12.6571 6.72205 12.3557 6.66903 12.0526 6.676C11.7528 6.66106 11.4532 6.70644 11.1713 6.80947C10.8895 6.9125 10.6312 7.07108 10.4118 7.27579C10.1923 7.48051 10.0163 7.7272 9.89396 8.00124C9.77166 8.27528 9.70563 8.57108 9.69978 8.87111C9.70374 8.96628 9.68842 9.06126 9.65473 9.15035C9.62105 9.23944 9.56969 9.32079 9.50376 9.38953C9.43783 9.45826 9.35868 9.51295 9.27106 9.55031C9.18345 9.58768 9.08919 9.60694 8.99395 9.60694C8.8987 9.60694 8.80444 9.58768 8.71683 9.55031C8.62922 9.51295 8.55007 9.45826 8.48414 9.38953C8.4182 9.32079 8.36685 9.23944 8.33316 9.15035C8.29948 9.06126 8.28415 8.96628 8.28811 8.87111C8.33467 7.90397 8.75377 6.99238 9.45759 6.32741C10.1614 5.66245 11.0953 5.29572 12.0635 5.3041C13.0318 5.31247 13.9592 5.6953 14.6514 6.37234C15.3436 7.04939 15.7469 7.96809 15.7767 8.93589C15.7754 9.85395 15.4239 10.7369 14.794 11.4048C14.3088 11.8814 13.7661 12.2958 13.177 12.6356C12.8409 12.8177 12.7468 13.4117 12.7358 13.606V14.6999C12.7344 14.8804 12.664 15.0536 12.539 15.1838C12.414 15.314 12.2439 15.3915 12.0636 15.4002L12.0648 15.399Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvQuestionOutlineIcon);