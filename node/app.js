const { say } = require('../pkg/my_rust_code.js');
const express = require('express');
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.send("No name has been passed")
  }

  return res.send(say(name));
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});