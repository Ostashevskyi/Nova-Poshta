import axios from "axios";
import instance from "src/utils/instance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCityRef = createAsyncThunk(
  "price/fetchCityRef",
  async function ({ citySender, cityRecipient }, { rejectWithValue }) {
    const cities = [citySender, cityRecipient];
    try {
      const data = await axios.all(
        cities.map((city) =>
          instance.post("/", {
            modelName: "Address",
            calledMethod: "getSettlements",
            methodProperties: {
              FindByString: city,
            },
          })
        )
      );

      data.forEach((el) => {
        if (el.status !== 200) {
          throw new Error("Server Error");
        }
      });

      const citySendArr = data[0].data.data;
      const cityResArr = data[1].data.data;

      const citySend = citySendArr.filter((city) => city.Region === "");

      const cityRes = cityResArr.filter((city) => city.Region === "");

      return {
        citySenderRef: citySend[0].Ref,
        cityRecipientRef: cityRes[0].Ref,
      };
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const fetchPrice = createAsyncThunk(
  "price/fetchPrice",
  async function (
    { citySender, cityRecipient, mailWeight, assessedCost },
    { rejectWithValue, dispatch }
  ) {
    try {
      const refs = (await dispatch(fetchCityRef({ citySender, cityRecipient })))
        .payload;

      const { citySenderRef } = refs;
      const { cityRecipientRef } = refs;

      const data = await instance.post("/", {
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
    price: 0,
    error: null,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPrice.fulfilled, (state, action) => {
      state.price = action.payload.length ? action.payload[0].Cost : 0;
      state.status = "fulfilled";
    });

    builder.addCase(fetchPrice.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchPrice.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    });
  },
});

export default priceSlice.reducer;
