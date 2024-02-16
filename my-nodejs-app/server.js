require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
require("newrelic");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/shutdown", (req, res) => {
  res.send("Shutting down...");
  process.exit();
});

app.get("/test", (req, res) => {
  res.send("Testing New Relic!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
