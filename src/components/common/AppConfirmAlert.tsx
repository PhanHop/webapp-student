import { useAppSelector } from "@/redux-store";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
  Zoom,
} from "@mui/material";
import { TransitionProps } from "notistack";
import React, { forwardRef } from "react";
import EnvCloseOutlineIcon from "../icons_ds/EnvCloseOutlineIcon";

const AppConfirmAlert = ({
  isOpen,
  onClose,
  onConfirm = () => {},
  content,
  title = "Thông báo",
  subTitle,
  textCancel = "Hủy",
  textSuccess = "Đồng ý",
  isShowButtonSuccess = true,
  isShowButtonCancel = true,
  styleDialog,
}: IAppPopupConfirm) => {
  const onHandleConfirm = () => {
    onConfirm();
    onClose();
  };
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      TransitionComponent={Transition}
      PaperProps={{
        style: {
          minWidth: "500px",
          alignItems: "center",
          display: "inline-flex",
          flexDirection: "column",
          boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
          borderRadius: "12px",
          ...styleDialog,
        },
      }}
      sx={{
        backgroundColor: "rgba(36, 54, 72, 0.95)",
        "& .MuiModal-backdrop": {
          backgroundColor: "unset",
        },
      }}
    >
      <DialogTitle
        sx={{
          width: "100%",
          display: "flex",
          padding: "12px 0",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #EEE",
        }}
      >
        <DialogContentText
          sx={{
            color: "#243648",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "600",
            letterSpacing: "0.4px",
            alignSelf: "stretch",
          }}
        >
          {title}
        </DialogContentText>

        <IconButton
          data-dismiss="modal"
          aria-hidden="true"
          onClick={() => onClose()}
          sx={{
            color: "#243648",
            position: "absolute",
            right: "8px",
          }}
        >
          <EnvCloseOutlineIcon fill="#6B6B6B" width={20} height={20} />
        </IconButton>
      </DialogTitle>

      <Box
        sx={{
          width: "100%",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DialogContent
          sx={{
            padding: "0",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              color: "#243648",
              fontSize: "20px",
              fontWeight: "600",
              letterSpacing: "0.4px",
            }}
          >
            {content}
          </Box>
          {subTitle && (
            <Typography
              sx={{
                color: "#D30026",
                fontSize: "16px",
                fontWeight: "400",
                letterSpacing: "0.32px",
              }}
            >
              {subTitle}
            </Typography>
          )}
        </DialogContent>
        <DialogActions sx={{ padding: "40px 0 0 0" }}>
          {isShowButtonCancel && (
            <Button
              sx={{
                minWidth: "156px",
                padding: "8px 24px",
                border: "1px solid #EEE",
              }}
              onClick={onClose}
            >
              <Typography
                sx={{
                  color: "#243648",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {textCancel}
              </Typography>
            </Button>
          )}
          {isShowButtonSuccess && (
            <Button
              variant="contained"
              sx={{
                minWidth: "156px",
                padding: "8px 24px",
              }}
              onClick={onHandleConfirm}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {textSuccess}
              </Typography>
            </Button>
          )}
        </DialogActions>
      </Box>
    </Dialog>
  );
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  const positionAnimationModal = useAppSelector(
    (state) => state.homeReducer.positionAnimationModal
  );
  return (
    <Zoom
      ref={ref}
      {...props}
      style={{
        transformOrigin: positionAnimationModal, // Đặt vị trí origin của hiệu ứng cách top 50px
        transitionDuration: "300ms",
      }}
    />
  );
});

export default AppConfirmAlert;
interface IAppPopupConfirm {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  content: string | React.ReactElement;
  title?: string;
  subTitle?: string;
  textCancel?: string;
  textSuccess?: string;
  isShowButtonSuccess?: boolean;
  isShowButtonCancel?: boolean;
  styleDialog?: any;
}
