import React from 'react';

const defaultCurrencies = ['PLN', 'USD', 'EUR'];

const Block = ({onClick, currency, calculateValue, value, disabled}) => (
  <div className="block">
    <ul>
      {defaultCurrencies.map((cur) => (
        <li
          onClick={() => onClick(cur)}
          className={cur===currency ? 'active' : ''}
          key={cur}
        >
          {cur}
        </li>
      ))}
    </ul>
    <input 
      onChange={e => calculateValue(e.target.value, currency)}
      value={value}
      type="number"
      placeholder={0}
      disabled={disabled}
    />
  </div>
);

export default Block;