import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, API_URL } from "../constants/const";

export const fetchCityRef = createAsyncThunk(
  "price/fetchCityRef",
  async function ({ citySender, cityRecipient }, { rejectWithValue }) {
    try {
      const data = await axios.post(API_URL, {
        apiKey: API_KEY,
        modelName: "Address",
        calledMethod: "getSettlements",
        methodProperties: {
          FindByString: citySender === undefined ? cityRecipient : citySender,
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

export const fetchPrice = createAsyncThunk(
  "price/fetchPrice",
  async function (
    { citySenderRef, cityRecipientRef, mailWeight, assessedCost },
    { rejectWithValue }
  ) {
    try {
      const data = await axios.post(API_URL, {
        apiKey: API_KEY,
        modelName: "InternetDocument",
        calledMethod: "getDocumentPrice",
        methodProperties: {
          CitySender: citySenderRef,
          CityRecipient: cityRecipientRef,
          Weight: mailWeight,
          ServiceType: "WarehouseWarehouse",
          Cost: assessedCost,
          CargoType: "Cargo",
          SeatsAmount: "2",
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

const priceSlice = createSlice({
  name: "price",
  initialState: {
    citySenderRef: "",
    cityRecipientRef: "",
    price: 0,
    error: null,
  },
  reducers: {},
  extraReducers: (builer) => {
    builer.addCase(fetchCityRef.fulfilled, (state, action) => {
      const data = action.payload[0].Ref;

      if (state.citySenderRef && data) {
        state.cityRecipientRef = data;
      } else {
        state.citySenderRef = data;
      }
    }),
      builer.addCase(fetchCityRef.rejected, (state, action) => {
        state.error = action.payload;
      });
    builer.addCase(fetchPrice.fulfilled, (state, action) => {
      state.price = action.payload.length ? action.payload[0].Cost : 0;
    });
    builer.addCase(fetchPrice.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default priceSlice.reducer;
