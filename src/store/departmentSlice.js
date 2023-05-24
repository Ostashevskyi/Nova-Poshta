import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { FILTER_TYPE } from "../constants";

export const fetchDepartment = createAsyncThunk(
  "departments/fetchDepartment",
  async function ({ cityTitle, page, filterType }, { rejectWithValue }) {
    try {
      const data = await axios.post(import.meta.env.VITE_API_URL, {
        apiKey: import.meta.env.VITE_API_KEY,
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
          CityName: cityTitle,
          Page: page,
          Limit: 10,
          TypeOfWarehouseRef: filterType,
        },
      });

      if (data.status !== 200) {
        throw new Error("Server Error");
      }

      return data.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const departmentsSlice = createSlice({
  name: "departments",
  initialState: {
    departments: [],
    countOfDepartments: 0,
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
      state.departments = [];
      state.error = null;

      if (action.payload.success) {
        state.departments.push(action.payload.data);
        state.countOfDepartments = Math.ceil(
          action.payload.info.totalCount / 10
        );
      } else {
        state.error = `Server Error! Something get wrong. Try again after 0.5 seconds.`;
      }
    });
    builder.addCase(fetchDepartment.pending, (state) => {
      state.status = "loading";
    });
  },
});

export default departmentsSlice.reducer;
