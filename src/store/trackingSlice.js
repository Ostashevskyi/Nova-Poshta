import instance from "src/utils/instance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTrackingInfo = createAsyncThunk(
  "tracking/fetchTrackingInfo",

  async function ({ documentNumber, mobileNumber }, { rejectWithValue }) {
    try {
      const info = await instance.post("/", {
        modelName: "TrackingDocument",
        calledMethod: "getStatusDocuments",
        methodProperties: {
          Documents: [
            {
              DocumentNumber: documentNumber,
              Phone: mobileNumber,
            },
          ],
        },
      });

      const { data } = info;

      if (!data.success) {
        return data.errors;
      } else {
        return data.data;
      }
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const trackingSlice = createSlice({
  name: "tracking",
  initialState: {
    info: [],
    error: null,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrackingInfo.fulfilled, (state, action) => {
      if (!action.payload[0].length) {
        state.info = action.payload;
        state.status = "fulfilled";
        state.error = "";
      } else {
        state.status = "rejected";
        state.error = action.payload;
      }
    });
    builder.addCase(fetchTrackingInfo.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTrackingInfo.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    });
  },
});

export default trackingSlice.reducer;
