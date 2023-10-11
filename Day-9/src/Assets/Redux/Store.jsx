import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Slices/UserSlice";
import ContactReducer from "../Slices/ContactSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    contact: ContactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
