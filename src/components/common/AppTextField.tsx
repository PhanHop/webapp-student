import React, { ForwardedRef, forwardRef, memo } from "react";
import { TextField, TextFieldProps } from "@mui/material";

const AppTextField = forwardRef(function AppTextField(
  props: TextFieldProps,
  ref: ForwardedRef<any>
) {
  return <TextField ref={ref} size="small" {...props} />;
});

export default memo(AppTextField);
