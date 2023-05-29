import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCityRef = createAsyncThunk(
  "price/fetchCityRef",
  async function ({ citySender, cityRecipient }, { rejectWithValue }) {
    try {
      const data = await axios.post(import.meta.env.VITE_API_URL, {
        apiKey: import.meta.env.VITE_API_KEY,
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
      const data = await axios.post(import.meta.env.VITE_API_URL, {
        apiKey: import.meta.env.VITE_API_KEY,
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
    cityRefStatus: null,
    priceStatus: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCityRef.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload.length > 0) {
        const data = action.payload[0].Ref;

        if (state.citySenderRef && data) {
          state.cityRecipientRef = data;
        } else {
          state.citySenderRef = data;
        }

        state.cityRefStatus = "fulfilled";
      } else {
        state.error = "Some error!";
      }
    });

    builder.addCase(fetchCityRef.rejected, (state, action) => {
      state.error = action.payload;
      state.cityRefStatus = "rejected";
    });

    builder.addCase(fetchCityRef.pending, (state) => {
      state.cityRefStatus = "loading";
    });

    builder.addCase(fetchPrice.fulfilled, (state, action) => {
      state.price = action.payload.length ? action.payload[0].Cost : 0;
      state.priceStatus = "fulfilled";
    });

    builder.addCase(fetchPrice.pending, (state) => {
      state.priceStatus = "loading";
    });

    builder.addCase(fetchPrice.rejected, (state, action) => {
      state.error = action.payload;
      state.priceStatus = "loading";
    });
  },
});

export default priceSlice.reducer;
