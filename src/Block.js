import React from 'react';
import defaultCurrencies from "./defaultCurrencies";

const Block = ({onClick, currency, calculateValue, value}) => (
  <div className="block">
    <ul>
        <li className='avticeCurrency'>
          {currency}
        </li>
        <li className='arrow'>
          <ul>
            {defaultCurrencies.map((cur) => (
              <li
                onClick={() => onClick(cur)}
                className={cur===currency ? 'active' : ''}
              >
                {cur}
              </li>
            ))}
          </ul>
        </li>
    </ul>
    <input 
      onChange={e => calculateValue(e.target.value, currency)}
      value={value}
      type="number"
      placeholder={0}
    />
  </div>
);

export default Block;