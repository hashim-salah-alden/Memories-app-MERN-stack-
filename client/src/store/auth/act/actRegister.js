import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/axios-global";

const actRegister = createAsyncThunk(
  "memories/actRegister",

  async (userData, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const res = await API.post("/api/users/register", userData, {
        signal,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export default actRegister;
