import React from 'react';

const defaultCurrencies = ['PLN', 'USD', 'EUR'];

const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => (
  <div className="block">
    <ul>
      {defaultCurrencies.map((cur) => (
        <li
          className={cur==='EUR' ? 'active' : ''}
          key={cur}
        >
          {cur}
        </li>
      ))}
    </ul>
    <input 
      type="number"
      placeholder='0'
    />
  </div>
);

export default Block;