import { RootState } from "@redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ILoginData {
  accessToken?: null | string;
  refreshToken?: null | string;
  user?: null | any;
}

const initialState: ILoginData = {
  // user: null,
  // token: null,
  accessToken: null,
  refreshToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<ILoginData>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },

    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },

    updateToken: (state, action: PayloadAction<ILoginData>) => {
      if (action.payload.accessToken)
        state.accessToken = action.payload.accessToken;
      if (action.payload.refreshToken)
        state.refreshToken = action.payload.refreshToken;
    },

    updateName: (
      state,
      action: PayloadAction<{ first_name: string; last_name: string }>
    ) => {
      if (state.user?.first_name)
        state.user.first_name = action.payload.first_name;
      if (state.user?.last_name)
        state.user.last_name = action.payload.last_name;
    },

    updateUserInfo: (state, action: PayloadAction<Partial<any>>) => {
      if (state.user?.first_name && action.payload.first_name)
        state.user.first_name = action.payload.first_name;
      if (state.user?.last_name && action.payload.last_name)
        state.user.last_name = action.payload.last_name;
      if (state.user?.address && action.payload.address)
        state.user.address = action.payload.address;
      if (state.user?.branchId && action.payload.branchId)
        state.user.branchId = action.payload.branchId;
      if (state.user?.email && action.payload?.email)
        state.user.email = action.payload?.email;
      if (state.user?.id && action.payload?.id)
        state.user.id = action.payload?.id;
      if (state.user?.phone && action.payload?.phone)
        state.user.phone = action.payload?.phone;
      if (state.user?.role && action.payload?.role)
        state.user.role = action.payload?.role;
    },
  },
});

export const { login, logout, updateToken, updateName, updateUserInfo } =
  authSlice.actions;

type TSelectAuth = (state: RootState) => typeof state.auth;

export const selectAuth: TSelectAuth = (state: RootState) => state.auth;

const authReducer = authSlice.reducer;

export default authReducer;
