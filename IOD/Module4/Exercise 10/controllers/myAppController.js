const getData = require("../libraries/myAppLibrary");
let myLogicObj = new getData();

const fetchData = (req, res) => {
  res.json(myLogicObj.fetchData());
};

module.exports = { fetchData };
