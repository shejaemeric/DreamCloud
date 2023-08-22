import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showToast } from "../../utils";

export const getUser = createAsyncThunk("dash/getUser", async () => {
  try {
    const response = await JSON.parse(localStorage.getItem("user"));
    return response;
  } catch (error) {
    showToast("Error occured while trying to get user", "error");
  }
});

export const getUserSlice = createSlice({
  name: "getUser",
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {},
  extraReducers: {
    [getUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.data = null;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const selectGetUser = (state) => state.getUser;
export default getUserSlice.reducer;
