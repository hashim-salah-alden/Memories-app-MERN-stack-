import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/axios-global";

const actUpdateMemory = createAsyncThunk(
  "memories/actUpdateMemory",
  async (memoryData, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const res = await API.patch(
        `/api/memories/${memoryData._id}`,

        { ...memoryData }
      );
      window.location.href = "/";

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actUpdateMemory;
