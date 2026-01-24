import "../src/App.css";

function SingleCat({ name, img, deleteCat, idToDelete }) {
  return (
    <>
      <li>{name}</li>
      <img src={img}></img>
      <button onClick={() => deleteCat({ idToDelete })}>Delete</button>
    </>
  );
}

export default SingleCat;
