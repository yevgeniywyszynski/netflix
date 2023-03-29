const express = require("express");

const app = express();

app.get("/preview/:name", function (req, res) {
  console.log(__dirname);
  const { name } = req.params;
  res.sendFile(__dirname + `/assets/preview/${name}.mp4`);
});

app.get("/thumbnail/:name", function (req, res) {
  console.log(__dirname);
  const { name } = req.params;
  res.sendFile(__dirname + `/assets/thumbnails/${name}.jpeg`);
});

app.listen(8000);
