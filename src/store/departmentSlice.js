import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDepartment = createAsyncThunk(
  "departments/fetchDepartment",
  async function (_, { rejectWithValue }) {
    try {
      const data = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
        apiKey: "e29351ba6134aaee84dda3b06c8cb261",
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
          CityName: "Львів",
        },
      });

      if (data.status !== 200) {
        throw new Error("Server Error");
      }

      return data.data.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const departmentsSlice = createSlice({
  name: "departments",
  initialState: {
    departments: [],
    error: null,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDepartment.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    });
    builder.addCase(fetchDepartment.fulfilled, (state, action) => {
      state.status = "fulfilled";
    });
  },
});

export default departmentsSlice.reducer;
