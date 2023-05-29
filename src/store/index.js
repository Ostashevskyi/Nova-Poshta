import { configureStore } from "@reduxjs/toolkit";

import priceSlice from "./priceSlice";
import trackingSlice from "./trackingSlice";
import departmentsSlice from "./departmentSlice";

export default configureStore({
  reducer: {
    departments: departmentsSlice,
    prices: priceSlice,
    tracking: trackingSlice,
  },
});
