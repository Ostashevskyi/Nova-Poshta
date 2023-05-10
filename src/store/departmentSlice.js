import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDepartment = createAsyncThunk(
  "departments/fetchDepartment",
  async function ({ cityTitle, page, departmentsQty }, { rejectWithValue }) {
    try {
      const data = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
        apiKey: "e29351ba6134aaee84dda3b06c8cb261",
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
          CityName: cityTitle,
          Page: page,
          Limit: departmentsQty,
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
      console.log(action.payload);
      state.status = "rejected";
    });
    builder.addCase(fetchDepartment.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.departments = [];
      state.departments.push(action.payload.data);
      state.countOfDepartments = action.payload.info.totalCount;
    });
    builder.addCase(fetchDepartment.pending, (state, action) => {
      state.status = "loading";
    });
  },
});

export default departmentsSlice.reducer;
