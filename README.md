# Currency converter

-  It uses the useState, useEffect, and useRef hooks from React.
-  The switch button swaps the values of fromCurrency and toCurrency when a button is clicked.
-  The fromCalcValue and toCalcValue functions perform currency conversion based on the current rates and update the corresponding state variables.
-  The first useEffect hook fetches the latest currency rates from an API using an access key and saves them in the rates. It also calls the fromCalcValue function to update the conversion result
-  The dropdown list for selecting currencies allows users to choose the currency they want to convert from and the currency they want to convert to.
