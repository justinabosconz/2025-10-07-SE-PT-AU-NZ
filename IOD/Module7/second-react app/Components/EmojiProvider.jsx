import { useState } from "react";
import { createContext } from "react";

export const EmojiContext = createContext();

function EmojiProvider(props) {
  const [mood, setMood] = useState("😄");

  function changeMood() {
    if (mood == "😄") setMood("😢");
    else if (mood == "😢") setMood("😄");
  }
  return (
    <>
      <EmojiContext.Provider value={{ mood, changeMood }}>
        {props.children}
      </EmojiContext.Provider>
    </>
  );
}

export default EmojiProvider;
