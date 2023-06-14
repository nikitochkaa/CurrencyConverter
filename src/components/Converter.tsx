import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchExchangeRate} from "../store/reducers/ActionCreators";

type CurrencySigns = {
  [currencyCode: string]: string;
};

const Converter = () => {
  const dispatch = useAppDispatch()
  const {data, isLoading, error} = useAppSelector(state => state.exchangeRatesReducer)


  const [fromCurrency, setFromCurrency] = React.useState<string>('UAH');
  const [toCurrency, setToCurrency] = React.useState<string>('USD');

  const [amount, setAmount] = useState<number>(0);

  const [exchangeRate, setExchangeRate] = React.useState<number>(0);

  useEffect(() => {
    if (data.result) {
      setExchangeRate(data.result / data.query.amount)
    }
    else {
      setExchangeRate(39.937977)
    }
  }, [data])

  const currencySigns: CurrencySigns = {
    USD: '$',
    EUR: '€',
    UAH: '₴',
  };

  return (
    <div className="Converter">
      <div className="Converter__Top"></div>
      <div className="Converter__CurrencyConverter">
        <div className="Converter__CurrencyConverter__Grid">
          <span>Amount</span>
          <span>From</span>
          <span></span>
          <span>To</span>
          <div className="Converter__CurrencyConverter__Grid__Amount">
            {currencySigns[fromCurrency]}
            <input className="Converter__CurrencyConverter__Grid__Amount__Input"
                   placeholder="1.00"
                   type="number"
                   onChange={(e) => setAmount(e.target.valueAsNumber)}
            />
          </div>
          <div className="Converter__CurrencyConverter__Grid__Currency__From">
            <select
              className="Converter__CurrencyConverter__Grid__Currency__From__Select"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <div className="Converter__CurrencyConverter__Grid__Currency__Convert">
            <span>--&gt;</span>
          </div>
          <div className="Converter__CurrencyConverter__Grid__Currency__To">
            <select
              className="Converter__CurrencyConverter__Grid__Currency__To__Select"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
        {(exchangeRate !== 0) &&
          <div className="Converter__CurrencyConverter__Result">
            <span className="Converter__CurrencyConverter__Result__Amount">
              {amount} {fromCurrency} = {(amount * exchangeRate).toFixed(2)} {toCurrency}
            </span>
            <br/>
            <br/>
            <span className="Converter__CurrencyConverter__Result__Rate">
              1 {fromCurrency} = {exchangeRate} {toCurrency}
            </span>
          </div>}
        <div className="Converter__CurrencyConverter__Convert">
          <button
            className="Converter__CurrencyConverter__Convert__Button"
            onClick={() => {
              dispatch(fetchExchangeRate({from: fromCurrency, to: toCurrency, amount: amount}))
            }}
          >Convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Converter;