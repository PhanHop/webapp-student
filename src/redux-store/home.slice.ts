import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IHomeState {
  positionAnimationModal: string;
  mes: {
    isShowThongBao: boolean;
    mesThongBao: string;
    isError: boolean;
  };
}

const initialState: IHomeState = {
  positionAnimationModal: "center",
  mes: {
    isShowThongBao: false,
    mesThongBao: "",
    isError: false,
  },
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setPositionAnimationModal: (state, action: PayloadAction<string>) => {
      state.positionAnimationModal = action.payload;
    },
    closeMes: (state) => {
      state.mes.isError = false;
      state.mes.isShowThongBao = false;
      state.mes.mesThongBao = "";
    },
    openMes: (
      state,
      action: PayloadAction<{ isError: boolean; mesThongBao: string }>
    ) => {
      state.mes.isError = action.payload.isError;
      state.mes.isShowThongBao = true;
      state.mes.mesThongBao = action.payload.mesThongBao;
    },

    reset: (state) => {
      state.mes = {
        isShowThongBao: false,
        mesThongBao: "",
        isError: false,
      };
      state.positionAnimationModal = "center";
    },
  },
});

const homeReducer = homeSlice.reducer;
export const homeActions = homeSlice.actions;
export default homeReducer;
