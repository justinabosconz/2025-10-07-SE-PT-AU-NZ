import { useState } from "react";
import "../src/App.css";

function Calculator() {
  const [result, setResult] = useState("");

  function handleFormData(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const n1 = Number(formData.get("num1"));
    const n2 = Number(formData.get("num2"));
    const sign = e.target.elements.sign.value;

    let calcResult;
    switch (sign) {
      case "add":
        calcResult = n1 + n2;
        break;
      case "subtract":
        calcResult = n1 - n2;
        break;
      case "multiply":
        calcResult = n1 * n2;
        break;
      case "divide":
        calcResult = n2 !== 0 ? n1 / n2 : "Error (Div by 0)";
        break;
      default:
        calcResult = 0;
    }
    setResult(calcResult);
  }

  return (
    <>
      <h4>Exercise 6</h4>
      <form onSubmit={handleFormData}>
        <div>
          <label>
            Number 1:
            <input type="text" name="num1" />
          </label>
        </div>
        <div>
          <label>
            Number 2:
            <input type="text" name="num2" />
          </label>
        </div>
        <select onchange="" id="sign">
          <option value="add">Add +</option>
          <option value="subtract">Subtract -</option>
          <option value="divide">Divide /</option>
          <option value="multiply">Multiply x</option>
        </select>
        <div>Result: {result}</div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}

export default Calculator;
