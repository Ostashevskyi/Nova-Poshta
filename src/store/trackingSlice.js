import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, API_URL } from "../constants/const";
import axios from "axios";

export const fetchTrackingInfo = createAsyncThunk(
  "tracking/fetchTrackingInfo",

  async function ({ documentNumber, mobileNumber }, { rejectWithValue }) {
    try {
      const data = await axios.post(API_URL, {
        apiKey: API_KEY,
        modelName: "TrackingDocument",
        calledMethod: "getStatusDocuments",
        methodProperties: {
          Documents: [
            {
              DocumentNumber: documentNumber, // 20450709916449
              Phone: mobileNumber, // 380964862437
            },
          ],
        },
      });

      if (data.status !== 200) {
        throw new Error("new error");
      }

      return data.data.data;
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
      if (action.payload) {
        state.info = action.payload;
        state.status = "fulfilled";
      } else {
        state.error = `Server Error!`;
      }
    });
    builder.addCase(fetchTrackingInfo.pending, (state, action) => {
      state.status = "loading";
    });
  },
});

export default trackingSlice.reducer;
