import { useState } from "react";
import "../src/App.css";

function AddCatForm({ onAddCat }) {
  const [catName, setCatName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function formSubmitted() {
    onAddCat({ catName, latinName, imageUrl });
    setCatName("");
    setLatinName("");
    setImageUrl("");
  }

  return (
    <div className="componentBox">
      <div>
        <label>
          Name:
          <input
            type="text"
            value={catName}
            name="catName"
            onChange={(e) => setCatName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Latin Name:
          <input
            type="text"
            value={latinName}
            name="latinName"
            onChange={(e) => setLatinName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Image URL:
          <input
            type="text"
            value={imageUrl}
            name="imageUrl"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button onClick={formSubmitted}>Submit</button>
      </div>
    </div>
  );
}

export default AddCatForm;
