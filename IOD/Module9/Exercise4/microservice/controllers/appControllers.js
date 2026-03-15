const fetchData = (req, res) => {
  fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
    .then((response) => response.json())
    .then((json) => json);
};

module.exports = fetchData;
