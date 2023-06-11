import React from 'react';

const Converter = () => {
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
            $
            <input className="Converter__CurrencyConverter__Grid__Amount__Input" type="text" placeholder="1.00"/>
          </div>
          <div className="Converter__CurrencyConverter__Grid__Currency__From">
            <select className="Converter__CurrencyConverter__Grid__Currency__From__Select">
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <div className="Converter__CurrencyConverter__Grid__Currency__Convert">
            <span>--&gt;</span>
          </div>
          <div className="Converter__CurrencyConverter__Grid__Currency__To">
            <select className="Converter__CurrencyConverter__Grid__Currency__To__Select">
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
        <div className="Converter__CurrencyConverter__Convert"></div>
      </div>
    </div>
  );
};

export default Converter;