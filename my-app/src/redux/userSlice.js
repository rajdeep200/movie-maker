import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ userId, password }) => {
    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/user/login",
      { userId, password },
      config
    );
    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data))
      return data;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
      user:userFromStorage
  },
  reducers: {},
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
