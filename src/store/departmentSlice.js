import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    builder.addCase(fetchDepartment.fulfilled, (state, action) => {
      if (action.payload.success) {
        if (action.payload.data.length) {
          state.status = "fulfilled";
          state.error = null;

          state.departments = action.payload.data;
          state.countOfDepartments = Math.ceil(
            action.payload.info.totalCount / 10
          );
        } else {
          state.status = "rejected";
          state.error = "City name is not correct";
        }
      }
    });
    builder.addCase(fetchDepartment.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchDepartment.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    });
  },
});

export default departmentsSlice.reducer;
