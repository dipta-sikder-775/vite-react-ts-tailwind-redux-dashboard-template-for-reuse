import { updateToken } from "@redux/features/auth";
import { RootState } from "@redux/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  //   baseUrl: process.env.API_URL,
  baseUrl: "",
  prepareHeaders: async (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state?.auth?.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (
  args: any,
  api: any,
  extraOptions: any
): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);
  const { auth } = api.getState() as RootState;
  if (result?.error?.status === 401 && auth?.refreshToken) {
    const refresh: any = await baseQuery(
      {
        url: "/auth/refresh",
        method: "POST",
        body: {
          refreshToken: auth.refreshToken,
        },
      },
      api,
      extraOptions
    );

    if (
      refresh.data &&
      refresh?.data?.data?.accessToken &&
      refresh?.data?.data?.refreshToken
    ) {
      const refreshedData = {
        accessToken: refresh.data?.data?.accessToken,
        refreshToken: refresh.data?.data?.refreshToken,
      };

      api.dispatch(updateToken(refreshedData));

      result = await baseQuery(args, api, extraOptions);
      return result;
    } else {
      api.dispatch(
        updateToken({
          accessToken: null,
          refreshToken: null,
        })
      );
      window.location.href = "/";
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "apiWorld",
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
  tagTypes: [],
});
