const path = require("path");

//express
const express = require("express");
const app = express();

//.env import and configuration
require("dotenv").config({ path: "./.env" });
const PORT = process.env.PORT || 4000;

const controller = require("./routes.js");

//app middleware
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/", controller);

//for build
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});
