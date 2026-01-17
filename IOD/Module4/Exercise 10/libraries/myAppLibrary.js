class getData {
  fetchData() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        json;
      });
  }
}

module.exports = getData;
