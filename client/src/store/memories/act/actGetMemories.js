import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/axios-global";

const actGetMemories = createAsyncThunk(
  "memories/actGetMemories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const res = await API.get(
        "/api/memories",
        {
          signal,
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actGetMemories;
