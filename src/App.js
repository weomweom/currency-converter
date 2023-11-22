import {useState, useEffect, useRef} from 'react';
import ACCESS_KEY from "./ACCESS_KEY";
import CustomInput from './CustomInput';
import swapImg from './img/double_arrow.png';

function App() {
  //create a regExp?
  const rates = useRef({
    'USD': 1,
    'EUR': 0.91,
    'PLN': 4.6
    //data for testing
  });

  useEffect(() => {
    fetch(`https://api.currencyapi.com/v3/latest?apikey=${ACCESS_KEY}`)
      .then(response => response.json())
      .then(data => {
        rates.current = data.data;
        fromCalcValue(fromValueCurrency);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [fromValueCurrency, setFromValueCurrency] = useState('1');
  const [toValueCurrency, setToValueCurrency] = useState('1');

  const switchOnclick = () => {
    let fromCurrencyHelper = fromCurrency;
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrencyHelper);
  }

  const fromOnClick = (currency) => {
    setFromCurrency(currency);
  };

  const toOnClick = (currency) => {
    setToCurrency(currency);
  };

  const fromCalcValue = (value) => {
    const price = value / rates.current[fromCurrency].value;
    const result = price * rates.current[toCurrency].value;
    setFromValueCurrency(value);
    setToValueCurrency(Math.round(result*100)/100);
  };

  const toCalcValue = (value) => {
    const price = value / rates.current[toCurrency].value;
    const result = price * rates.current[fromCurrency].value;
    setToValueCurrency(value);
    setFromValueCurrency(Math.round(result*100)/100);
  };

  useEffect(() => {
    fromCalcValue(fromValueCurrency);
  }, [fromCurrency, toCurrency]);

//      
  return (
    <div className="App">
      <div className='container'>
        <CustomInput
          onClick={fromOnClick}
          currency={fromCurrency}
          calculateValue={fromCalcValue}
          value={fromValueCurrency}
        />
        <button onClick={switchOnclick}><img src={swapImg}/></button>
        <CustomInput
          onClick={toOnClick}
          currency={toCurrency}
          calculateValue={toCalcValue}
          value={toValueCurrency}
        />
      </div>
    </div>
  );
}

export default App;