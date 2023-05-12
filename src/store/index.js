import { configureStore } from "@reduxjs/toolkit";
import departmentsSlice from "./departmentSlice";
import priceSlice from "./priceSlice";
import translationSLice from "./translationSLice";

export default configureStore({
  reducer: {
    departments: departmentsSlice,
    prices: priceSlice,
    translation: translationSLice,
  },
});
