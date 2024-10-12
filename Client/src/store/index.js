import { configureStore } from "@reduxjs/toolkit";
import memories from "./memories/memoriesSlice";
import auth from "./auth/authSlice";
import theme from "./theme/themeSlice";

const store = configureStore({
  reducer: {
    memories,
    auth,
    theme,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
