import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SecState {
  name: string;
  email: string;
  token: string;
  _id: string;
}

const initialState: SecState = {
  name: "",
  email: "",
  token: "",
  _id: "",
};

export const secSlice = createSlice({
  name: "sec",
  initialState,
  reducers: {
    setSecData: (state, action: PayloadAction<SecState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state._id = action.payload._id;
    },
    resetSecData: (state) => {
      state.name = "";
      state.email = "";
      state.token = "";
      state._id = "";
    },
  },
});

export const { setSecData, resetSecData } = secSlice.actions;
export const selectAuth = (state: RootState) => state.sec;
export default secSlice.reducer;
