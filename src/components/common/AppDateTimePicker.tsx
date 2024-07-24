import React, { memo } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AppTextField from "./AppTextField";
import { DateTimePickerProps, DateTimePicker } from "@mui/x-date-pickers";
import "dayjs/locale/vi";

const AppDateTimePicker = (props: DateTimePickerProps<any>) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"vi"}>
      <DateTimePicker
        dayOfWeekFormatter={(day) => day}
        slots={{
          textField: AppTextField,
        }}
        {...props}
      />
    </LocalizationProvider>
  );
};

export default memo(AppDateTimePicker);
