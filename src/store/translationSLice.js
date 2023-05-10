import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTranslation = createAsyncThunk(
  "translation/fetchTranslation",
  async function ({ cityTitle }, { rejectWithValue }) {
    const options = {
      method: "POST",
      url: "https://microsoft-translator-text.p.rapidapi.com/translate",
      params: {
        "to[0]": "uk",
        "api-version": "3.0",
        profanityAction: "NoAction",
        textType: "plain",
      },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "f96ef2888dmshff56fba3bbb8ccbp1bf817jsn06a2a2440ab7",
        "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
      },
      data: [{ Text: cityTitle }],
    };

    try {
      const response = await axios.request(options);
      return response.data[0];
    } catch (error) {
      console.error(error);
    }
  }
);

const translationSlice = createSlice({
  name: "translation",
  initialState: {
    translatedText: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTranslation.fulfilled, (state, action) => {
      const { translations } = action.payload;
      state.translatedText = translations[0].text;
    });
  },
});

export default translationSlice.reducer;
