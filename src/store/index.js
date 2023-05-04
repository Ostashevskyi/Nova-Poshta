import { configureStore } from "@reduxjs/toolkit";
import departmentsSlice from "./departmentSlice";

export default configureStore({
  reducer: {
    departments: departmentsSlice,
  },
});
