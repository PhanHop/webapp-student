import { TextField, TextFieldProps } from "@mui/material";
import EnvFindOutlineIcon from "../icons_ds/EnvFindOutlineIcon";
import React, { memo, useEffect, useState } from "react";

const AppSearchFilter = ({
  delay = 0,
  valueInput = "",
  onChange = () => {},
  hasStartIcon = false,
  ...otherprops
}: TextFieldSearchProps) => {
  const [inputValue, setInputValue] = useState("");
  const [searchPhoneTimeout, setSearchPhoneTimeout] = useState<any>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
    if (searchPhoneTimeout) {
      clearTimeout(searchPhoneTimeout);
    }
    const newTimeout = setTimeout(() => {
      onChange(e);
    }, delay);
    setSearchPhoneTimeout(newTimeout);
  };

  useEffect(() => {
    setInputValue(valueInput);
  }, [valueInput]);

  return (
    <TextField
      value={inputValue}
      size="small"
      fullWidth
      onChange={handleChange}
      InputProps={
        hasStartIcon
          ? {
              startAdornment: <EnvFindOutlineIcon />,
            }
          : {
              endAdornment: <EnvFindOutlineIcon fill="#fff" />,
            }
      }
      {...otherprops}
    />
  );
};

export default memo(AppSearchFilter);
type TextFieldSearchProps = TextFieldProps & {
  delay?: number; // millisecond
  valueInput?: string;
  hasStartIcon?: boolean;
};
