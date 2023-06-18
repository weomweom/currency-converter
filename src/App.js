import {useState, useEffect, useRef} from 'react';
import Block from "./Block";
import ACCESS_KEY from "./ACCESS_KEY";

function App() {
  //add a drop-down list!!!
  const rates = useRef({});
  /*
  const [rates, setRates]= useState({
    'USD': 1,
    'EUR': 0.91,
    'PLN': 4.6
    //data for testing
  });
  */

  useEffect(() => {
    fetch(`http://data.fixer.io/api/latest?access_key=${ACCESS_KEY}`)
      .then(response => response.json())
      .then(data => {
        rates.current = data.rates;
        fromCalcValue(fromValueCurrency);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("PLN");
  const [fromValueCurrency, setFromValueCurrency] = useState(1);
  const [toValueCurrency, setToValueCurrency] = useState();

  const switchOnclick = () => {
    let fromCurrencyHelper = fromCurrency;
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrencyHelper);
    setFromValueCurrency(toValueCurrency);
  }

  const fromOnClick = (currency) => {
    setFromCurrency(currency);
  };

  const toOnClick = (currency) => {
    setToCurrency(currency);
  };

  const fromCalcValue = (value) => {
    const price = value / rates.current[fromCurrency];
    const result = price * rates.current[toCurrency];
    setFromValueCurrency(value);
    setToValueCurrency(Math.round(result*1000)/1000);
  };

  const toCalcValue = (value) => {
    const price = value / rates.current[toCurrency];
    const result = price * rates.current[fromCurrency];
    setToValueCurrency(value);
    setFromValueCurrency(Math.round(result*1000)/1000);
  };

  useEffect(() => {
    fromCalcValue(fromValueCurrency);
  }, [fromCurrency, toCurrency]);

  return (
    <div className="App">
      <Block
        onClick={fromOnClick}
        currency={fromCurrency}
        calculateValue={fromCalcValue}
        value={fromValueCurrency}
        disabled={false}
      />
      <button onClick={switchOnclick}>↔</button>
      <Block
        onClick={toOnClick}
        currency={toCurrency}
        calculateValue={toCalcValue}
        value={toValueCurrency}
        disabled={true}
      />
    </div>
  );
}

export default App;