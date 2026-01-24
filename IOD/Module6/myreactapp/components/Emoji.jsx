import { useState } from "react";

function Emoji() {
  const [mood, setMood] = useState("😄");

  function changeMood() {
    if (mood == "😄") setMood("😢");
    else if (mood == "😢") setMood("😄");
  }
  return (
    <>
      <h4>Exercise 3</h4>
      <div style={{ fontSize: "3em" }}>{mood}</div>
      <button onClick={changeMood}>Change Mood</button>
    </>
  );
}

export default Emoji;
