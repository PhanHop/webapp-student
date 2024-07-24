import createSagaMiddleware from "redux-saga";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "@/sagas";
import homeReducer from "./home.slice";

const reducer = { homeReducer: homeReducer };

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  // devTools: EnvConstant.IS_DEV,
});

sagaMiddleware.run(rootSaga);

export type IAppReduxState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<IAppReduxState> = useSelector;

export default store;
