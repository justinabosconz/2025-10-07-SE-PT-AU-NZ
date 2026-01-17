const express = require("express"); // importing express
const router = require("./routes/myAppRoutes"); // importing router

const app = express(); // web server

const port = 8888;

app.use("/", express.static("public"));
app.use("/", router); // attaching router

app.listen(port, () => {
  console.log("Web Server started...");
});
