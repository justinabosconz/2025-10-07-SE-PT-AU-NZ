const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");
const userRoutes = require("./routes/userRoutes");
const likeRoutes = require("./routes/likeRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

// parse requests of content-type - application/json
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

app.use("/api/users", userRoutes);
app.use("./api/likes", likeRoutes);
app.use("./api/posts", postRoutes);
app.use("./api/comments", commentRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
