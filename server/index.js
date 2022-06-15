const express = require("express");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const DEV_MODE = process.env.DV_MODE === "true";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "/../client/build")));

app.get("/", (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname + "/../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log("Express is listening on PORT = ", PORT);
});
