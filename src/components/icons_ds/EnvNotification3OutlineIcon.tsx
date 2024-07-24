import React, { memo } from "react";
import { IIconProps } from "model/type";

const EnvNotification3OutlineIcon = ({
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
        d="M12.0007 20.9942C9.75949 20.9942 7.51795 21.0114 5.27707 20.9866C4.20747 20.975 3.27303 20.5526 2.48102 19.8355C1.68404 19.1137 1.2087 18.2131 1.04705 17.1501C1.01558 16.9438 1.00234 16.7328 1.002 16.5237C1.00002 13.5038 0.999023 10.4839 1.00134 7.4636C1.003 5.29297 2.62345 3.39959 4.76662 3.06603C5.02168 3.02628 5.28204 3.00342 5.53975 3.00309C9.85688 2.99912 14.1737 3.00011 18.4905 3.00011C20.7446 3.00011 22.6486 4.65367 22.9587 6.88326C22.9858 7.07936 22.9974 7.2791 22.9978 7.47718C23.0001 10.4918 23.0007 13.5065 22.9991 16.5208C22.9981 18.6891 21.417 20.5656 19.2818 20.9283C19.0278 20.9713 18.7671 20.9932 18.509 20.9939C16.3397 20.9988 14.17 20.9968 12.0007 20.9968V20.9942ZM21.2796 6.14227C21.2382 6.16612 21.2047 6.18236 21.1742 6.20389C18.4097 8.15689 15.6451 10.1099 12.8815 12.0639C12.2491 12.5111 11.485 12.5094 10.8665 12.0453C8.72335 10.4372 6.58218 8.82633 4.44034 7.21649C3.89577 6.80708 3.35087 6.39833 2.80034 5.9846C2.52739 6.45994 2.39953 6.96376 2.39887 7.49507C2.39489 10.4991 2.39655 13.5031 2.39887 16.5068C2.39887 16.6609 2.41046 16.8166 2.43531 16.9686C2.68407 18.5082 3.96997 19.6006 5.52915 19.6006C9.84098 19.6006 14.1531 19.6006 18.465 19.5997C18.6077 19.5997 18.7515 19.5894 18.8936 19.5722C20.4226 19.3853 21.5972 18.0773 21.6012 16.532C21.6085 13.5171 21.6055 10.5021 21.6012 7.48712C21.6006 7.02106 21.5035 6.57057 21.2796 6.14227ZM3.75797 4.93987C3.78779 4.96636 3.81064 4.98988 3.83615 5.00943C6.44902 6.9727 9.06189 8.93597 11.6751 10.8986C11.847 11.0274 11.9212 11.0238 12.1031 10.8956C14.4801 9.21687 16.8574 7.53846 19.2348 5.85973C19.6167 5.59009 19.9986 5.3198 20.3879 5.04487C19.8317 4.61955 19.2143 4.40093 18.5345 4.39994C14.1796 4.39398 9.82475 4.39464 5.47019 4.39961C4.85109 4.40027 4.27869 4.58279 3.75797 4.93987Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(EnvNotification3OutlineIcon);
