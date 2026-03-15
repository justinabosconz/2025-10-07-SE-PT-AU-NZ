const express = require("express"); // importing express

const appRouter = require("./routes/appRoutes"); // importing router

const port = 3003; // port number

const app = express();

app.use("/", appRouter);

// listening
app.listen(port, () => {
  console.log("Web server started..");
});
