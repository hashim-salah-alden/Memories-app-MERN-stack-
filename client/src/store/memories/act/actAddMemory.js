import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/axios-global";

const actAddMemorie = createAsyncThunk(
  "memories/actAddMemorie",

  async (memoryData, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;

    try {
      const res = await API.post("/api/memories", memoryData, {
        signal,
      });
      return res.data;
    } catch (error) {
      if (error.response.status === 403) {
        // Token is invalid or expired, redirect to login
        window.location.href = "/login";
        localStorage.clear();
      } else {
        console.log(rejectWithValue(error));
      }
    }
  }
);

export default actAddMemorie;

