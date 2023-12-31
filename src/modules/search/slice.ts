import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchState, Place } from "./types";
import { REQUEST_STATUS } from "../../core/api/types.ts";

const initialState: SearchState = {
  location: "",
  result: [],
  status: REQUEST_STATUS.INIT,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    searchSuccess(state, action: PayloadAction<Place[]>) {
      state.status = REQUEST_STATUS.SUCCESS;
      state.result = action.payload;
    },
    clearSearchResult(state) {
      state.result = [];
      state.status = REQUEST_STATUS.INIT;
    },
  },
});

export const { setLocation, searchSuccess, clearSearchResult } =
  searchSlice.actions;

export default searchSlice.reducer;
