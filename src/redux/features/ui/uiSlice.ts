import { RootState } from "@redux/store";
import { IUiState, ICurrentModal } from "./uiSlice.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IUiState = {
  currentModal: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setCurrentModal(
      state,
      action: {
        payload: ICurrentModal | null;
      }
    ) {
      state.currentModal = action.payload;
    },
  },
});

export const { setCurrentModal } = uiSlice.actions;

type TSelectCurrentModal = (state: RootState) => typeof state.ui.currentModal;
export const selectCurrentModal: TSelectCurrentModal = (state) =>
  state.ui.currentModal;

export const uiActions = uiSlice.actions;
const uiReducer = uiSlice.reducer;

export default uiReducer;
