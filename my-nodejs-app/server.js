const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
require("newrelic");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
