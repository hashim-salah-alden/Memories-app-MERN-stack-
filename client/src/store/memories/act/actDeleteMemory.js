import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/axios-global";

const actDeleteMemory = createAsyncThunk(
  "memories/actDeleteMemory",
  async (memoryId, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const res = await API.delete(`/api/memories/${memoryId}`, {
        signal,
      });
      return memoryId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actDeleteMemory;
