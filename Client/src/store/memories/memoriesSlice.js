import { createSlice } from "@reduxjs/toolkit";
import actGetMemories from "./act/actGetMemories";
import actAddMemorie from "./act/actAddMemory";
import actDeleteMemory from "./act/actDeleteMemory";
import actUpdateMemory from "./act/actUpdateMemory";

const initialState = {
  memories: [],
  memory: "",
  loading: "idle",
  error: null,
  totalPages : 1 
};

const memoriesSlice = createSlice({
  name: "memories",
  initialState,
  reducers: {
    cleanMemories: (state) => {
      state.memories = [];
    },
  },
  extraReducers: (builder) => {
    // get all memories
    // builder.addCase(actGetMemories.pending, (state) => {
    //   state.loading = "pending";
    //   state.error = null;
    // });
    // builder.addCase(actGetMemories.fulfilled, (state, action) => {
    //   state.loading = "succeeded";
    //   state.memories = action.payload.data;
    //   state.totalPages = action.payload.totalPages;
    // });
    // builder.addCase(actGetMemories.rejected, (state, action) => {
    //   state.loading = "failed";
    //   if (typeof action.payload === "string") {
    //     state.error = action.payload;
    //   }
    // });

    // add new memory
    builder.addCase(actAddMemorie.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAddMemorie.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.memories.push(action.payload.data);
      
    });
    builder.addCase(actAddMemorie.rejected, (state, action) => {
      state.loading = "failed";
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

    // delete memory
    builder.addCase(actDeleteMemory.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actDeleteMemory.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.memories = state.memories.filter(
        (memory) => memory._id !== action.payload
      );
    });
    builder.addCase(actDeleteMemory.rejected, (state, action) => {
      state.loading = "failed";
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

    // Update memory
    builder.addCase(actUpdateMemory.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actUpdateMemory.fulfilled, (state, action) => {
      state.loading = "succeeded";

      state.memories = state.memories.map((memory) =>
        memory._id === action.payload.data._id ? action.payload.data : memory
      );
    });

    builder.addCase(actUpdateMemory.rejected, (state, action) => {
      state.loading = "failed";
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export default memoriesSlice.reducer;
export const { cleanMemories } = memoriesSlice.actions;
export { actGetMemories, actAddMemorie, actDeleteMemory, actUpdateMemory };
