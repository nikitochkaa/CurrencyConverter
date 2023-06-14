import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'iZu5CCJYCP0Sf6d93JZ3JzBdW5Rvp1eQ';

export const fetchExchangeRate = createAsyncThunk(
  'exchangeRate/fetch',
  async ({ from, to, amount }: { from: string; to: string; amount: number }, thunkAPI) => {
    try {
      const url = `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`;

      const headers = {
        apikey: API_KEY,
      };

      const response = await axios.get(url, {headers});
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed to fetch exchange rate');
    }
  }
);