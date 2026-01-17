const express = require("express"); // importing express
const app = require("./app");

const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");

const cors = require("cors");

// const app = express(); // moved to app.js
const app2 = express(); // web server for port 2
const app3 = express(); // web server for port 3

const appRouter = require("./routes/appRoutes"); // importing router
const secondAppRouter = require("./routes/secondAppRoutes"); // importing second router
const thirdAppRouter = require("./routes/thirdAppRoutes"); // importing third router
// const calculatorRouter = require("./routes/calculatorRoutes"); // moved to app.js
const friendsRouter = require("./routes/friendsRoutes"); // importing friends router

const port = 3000; // first port
const port2 = 3001; // second port
const port3 = 3002; // third port

app.use(cors()); // to resolve cors blocking policy
app.use("/", express.static("public"));
app.use("/", appRouter);
// app.use("/Calculate", calculatorRouter); // moved to app.js
app.use("/Friends", friendsRouter); // friends router
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(express.json()); // enabling incoming data
app2.use("/", secondAppRouter);
app3.use("/", thirdAppRouter);

// first server.
app.listen(port, () => {
  console.log("Web server started..");
});

// second server..
app2.listen(port2, () => {
  console.log("Second web server started...");
});

// third server...
app3.listen(port3, () => {
  console.log("Third web server has started.");
});
