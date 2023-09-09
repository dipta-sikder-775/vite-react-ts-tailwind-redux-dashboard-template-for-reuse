import { PayloadAction } from "@reduxjs/toolkit";

export interface IPaginationOptions {
  totalPage?: number;
  page?: number;
  limit?: number;
}

export interface IGetAllFilterOptions {
  search?: string;
  orderBy?: string;
  order?: string;
  startDate?: string;
  endDate?: string;
}

export interface ICommonSliceInitialState
  extends IPaginationOptions,
    IGetAllFilterOptions {}

const setTotalPage = (
  state: ICommonSliceInitialState,
  action: PayloadAction<ICommonSliceInitialState["totalPage"]>
) => {
  state.totalPage = action.payload;
};

const setCurrentPage = (
  state: ICommonSliceInitialState,
  action: PayloadAction<ICommonSliceInitialState["page"]>
) => {
  state.page = action.payload;
};

const setLimit = (
  state: ICommonSliceInitialState,
  action: PayloadAction<ICommonSliceInitialState["limit"]>
) => {
  state.limit = action.payload;
};

const setAllPaginationProps = (
  state: ICommonSliceInitialState,
  action: PayloadAction<ICommonSliceInitialState>
) => {
  state.totalPage = action.payload?.totalPage;
  state.page = action.payload?.page;
  state.limit = action.payload?.limit;
};

const setSearch = (
  state: ICommonSliceInitialState,
  action: PayloadAction<string | undefined>
) => {
  if (!action.payload) state.search = undefined;
  else state.search = action.payload;
};

const setStartDate = (
  state: ICommonSliceInitialState,
  action: PayloadAction<string | undefined>
) => {
  if (!action.payload) state.startDate = undefined;
  else state.startDate = action.payload;
};

const setEndDate = (
  state: ICommonSliceInitialState,
  action: PayloadAction<string | undefined>
) => {
  if (!action.payload) state.endDate = undefined;
  else state.endDate = action.payload;
};

const setOrder = (
  state: ICommonSliceInitialState,
  action: PayloadAction<string | undefined>
) => {
  if (!action.payload) state.order = undefined;
  else state.order = action.payload;
};

const setOrderBy = (
  state: ICommonSliceInitialState,
  action: PayloadAction<string | undefined>
) => {
  if (!action.payload) state.orderBy = undefined;
  else state.orderBy = action.payload;
};

export const commonReducers = {
  setTotalPage,
  setCurrentPage,
  setLimit,
  setAllPaginationProps,
  setSearch,
  setStartDate,
  setEndDate,
  setOrder,
  setOrderBy,
};
