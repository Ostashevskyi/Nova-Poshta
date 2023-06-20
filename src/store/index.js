import priceSlice from "src/store/priceSlice";
import { configureStore } from "@reduxjs/toolkit";
import trackingSlice from "src/store/trackingSlice";
import departmentsSlice from "src/store/departmentSlice";

export default configureStore({
  reducer: {
    departments: departmentsSlice,
    prices: priceSlice,
    tracking: trackingSlice,
  },
});
