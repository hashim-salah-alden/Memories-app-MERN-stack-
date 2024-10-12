import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/axios-global";

const actLogin = createAsyncThunk(
  "memories/actLogin",

  async (userData, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const res = await API.post("/api/users/login", userData, {
        signal,
      });
      if (res.data.user._id) {
        const user = JSON.stringify(res.data.user);
        window.location.href = "/";
        localStorage.setItem("user", user);
        localStorage.setItem("token", res.data.token);
      } else {
        console.log("sign in faild");
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export default actLogin;
