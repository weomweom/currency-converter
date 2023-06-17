import Block from "./Block";
import {useState, useEffect} from 'react';

function App() {
  const [rates, setRates] = useState({
    "rates": {
      "USD": 1,
      "EUR": 0.91,
      "PLN": 4.06
  }});

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("PLN");
  const [fromValueCurrency, setFromValueCurrency] = useState(0);
  const [toValueCurrency, setToValueCurrency] = useState(0);

  const fromOnClick = (currency) => {
    setFromCurrency(currency);
  };

  const fromCalcValue = (value) => {
    const price = value / rates.rates[fromCurrency];
    const result = price * rates.rates[toCurrency];
    setFromValueCurrency(value);
    setToValueCurrency(result);
  }

  const toOnClick = (currency) => {
    setToCurrency(currency);
  };

  const toCalcValue = (value) => {
    const price = value / rates.rates[toCurrency];
    const result = price * rates.rates[fromCurrency];
    setToValueCurrency(value);
    setFromValueCurrency(result);
  }

  useEffect(() => {
    //console.log("from currency changed " + fromCurrency);
    fromCalcValue(fromValueCurrency);
  }, [fromCurrency]);

  useEffect(() => {
    //console.log("to currency changed " + toCurrency);
    toCalcValue(toValueCurrency);
  }, [toCurrency]);

  return (
    <div className="App">
      <Block
        onClick={fromOnClick}
        currency={fromCurrency}
        calculateValue={fromCalcValue}
        value={fromValueCurrency}
      />
      <Block
        onClick={toOnClick}
        currency={toCurrency}
        calculateValue={toCalcValue}
        value={toValueCurrency}
      />
    </div>
  );
}

export default App;
