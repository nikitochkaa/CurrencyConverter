import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { fetchExchangeRate } from './ActionCreators';
import {IExchangeRate} from "../../models/IExchange";

interface ExchangeRateState {
  data: IExchangeRate;
  isLoading: boolean;
  error: string;
}

const initialState: ExchangeRateState = {
  data: {
    info: {
      quote: 0,
      timestamp: 0,
    },
    query: {
      amount: 0,
      from: '',
      to: '',
    },
    result: 0,
    success: false,
  },
  isLoading: false,
  error: '',
}

const exchangeRateSlice = createSlice({
  name: 'exchangeRate',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchExchangeRate.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = ''
      state.data = action.payload;
    },
    [fetchExchangeRate.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchExchangeRate.rejected.type]: (state,  action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload
    },
  }
});

export default exchangeRateSlice.reducer;