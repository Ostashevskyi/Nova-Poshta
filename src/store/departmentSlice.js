import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  API_KEY,
  API_URL,
  DEPARTMENKGTREF,
  DEPARTMENTREF,
  POSTOMATREF,
} from "../constants/const";

export const fetchDepartment = createAsyncThunk(
  "departments/fetchDepartment",
  async function (
    { cityTitle, page, departmentsQty, filterType },
    { rejectWithValue }
  ) {
    try {
      const chooseType = (filterType) => {
        if (filterType === "postomat") return POSTOMATREF;
        else if (filterType === "department") return DEPARTMENTREF;
        else if (filterType === "departmentkg") return DEPARTMENKGTREF;
        else return "";
      };

      const data = await axios.post(API_URL, {
        apiKey: API_KEY,
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
          CityName: cityTitle,
          Page: page,
          Limit: departmentsQty,
          TypeOfWarehouseRef: chooseType(filterType),
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
      state.error = null;

      if (action.payload.success) {
        state.departments.push(action.payload.data);
        state.countOfDepartments = action.payload.info.totalCount;
      } else {
        state.error = `Server Error! Something get wrong. Try again after 0.5 seconds.`;
      }
    });
    builder.addCase(fetchDepartment.pending, (state, action) => {
      state.status = "loading";
    });
  },
});

export default departmentsSlice.reducer;
