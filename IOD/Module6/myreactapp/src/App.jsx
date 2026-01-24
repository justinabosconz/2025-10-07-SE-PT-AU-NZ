import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "../components/Greeting";
import BigCats from "../components/BigCats";
import Emoji from "../components/Emoji";
import Calculator from "../components/Calculator";

function App() {
  return (
    <>
      <Greeting name="Justina">
        <p>This is Module 6 Exercise 1.</p>
      </Greeting>
      <BigCats></BigCats>
      <Emoji></Emoji>
      <Calculator></Calculator>
    </>
  );
}

export default App;
