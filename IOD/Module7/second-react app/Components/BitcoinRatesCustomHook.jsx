import { useState, useEffect } from "react";
import { useData } from "../Hooks/useData";
import "../src/App.css";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRatesExercise2() {
  const [currency, setCurrency] = useState(currencies[0]);

  //   const [price, setPrice] = useState("");

  //   useEffect(() => {
  //     fetch(
  //       `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
  //     )
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setPrice(json.bitcoin[currency.toLowerCase()]);
  //       });
  //   }, [currency]);

  const data = useData(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
  );
  const price = data ? data.bitcoin[currency.toLowerCase()] : "not found";

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h6>Exercise 2</h6>
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div>
        <strong>Current Bitcoin Price: </strong>
        {price}
      </div>
    </div>
  );
}

export default BitcoinRatesExercise2;
