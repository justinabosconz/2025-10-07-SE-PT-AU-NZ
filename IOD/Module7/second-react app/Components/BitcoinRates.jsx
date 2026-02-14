import { useState, useEffect } from "react";
import "../src/App.css";
import { useContext } from "react";
import { EmojiContext } from "./EmojiProvider";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRatesExercise1() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState("");

  const { mood } = useContext(EmojiContext);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
    )
      .then((response) => response.json())
      .then((json) => {
        setPrice(json.bitcoin[currency.toLowerCase()]);
      });
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));
  return (
    <div className="BitcoinRates componentBox">
      <h6>Exercise 1</h6>
      {mood}
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

export default BitcoinRatesExercise1;
