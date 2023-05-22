import { configureStore } from "@reduxjs/toolkit";
import departmentsSlice from "./departmentSlice";
import priceSlice from "./priceSlice";
import trackingSlice from "./trackingSlice";

export default configureStore({
  reducer: {
    departments: departmentsSlice,
    prices: priceSlice,
    tracking: trackingSlice,
  },
});
