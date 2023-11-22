import React from 'react';
import defaultCurrencies from "./defaultCurrencies";
import arrow from './img/arrow.png';

const CustomInput = ({onClick, currency, calculateValue, value}) => {
  const sanitizedValue = isNaN(value) ? "" : value;
  return (
    <div className='input'>
        <div className='header'>
            <div className='active-currency'>
                {currency}
            </div>
            <div className='img-wraper'>
                <img src={arrow}/>
                <ul>
                    {defaultCurrencies.map((cur, i) => (
                        <li
                        key={i}
                        onClick={() => onClick(cur)}
                        className={cur===currency ? 'active' : ''}
                        >
                        {cur}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <input 
            onChange={e => calculateValue(e.target.value, currency)}
            value={sanitizedValue}
            type="number"
            placeholder={0}
        />
    </div>
  )
}

export default CustomInput