import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import libriReducer from "./Redux/GestioneLibri/gestioneLibriReducer"

export const store = configureStore({
  reducer: {
    libri: libriReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch 
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  undefined,
  Action<string>
>
