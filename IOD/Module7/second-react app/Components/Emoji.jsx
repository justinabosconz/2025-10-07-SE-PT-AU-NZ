import { EmojiContext } from "./EmojiProvider";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useContext } from "react";

function Emoji() {
  //   const [mood, setMood] = useState("😄");

  const { mood, changeMood } = useContext(EmojiContext);

  //   function changeMood() {
  //     if (mood == "😄") setMood("😢");
  //     else if (mood == "😢") setMood("😄");
  //   }

  return (
    <>
      <div style={{ fontSize: "3em" }}>{mood}</div>
      <Button
        variant="outlined"
        color="success"
        endIcon={<SendIcon />}
        onClick={changeMood}
      >
        Change Mood
      </Button>
    </>
  );
}

export default Emoji;
