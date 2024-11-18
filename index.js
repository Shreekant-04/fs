const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  const file = fs.readFileSync(`${__dirname}/text.txt`, "utf8");
  res.setHeader("Content-Type", "text/html");

  res.send(file);
});
app.get("/form", (req, res) => {
  const file = fs.readFileSync(`${__dirname}/form.txt`, "utf8");
  res.setHeader("Content-Type", "text/html");

  res.send(file);
});
app.get("/profile", (req, res) => {
  const { name, age, contact, bio } = req.query;
  const file = fs.readFileSync(`${__dirname}/profile.txt`, "utf8");
  let editedFile = file
    .replaceAll("{{name}}", name)
    .replace("{{age}}", age)
    .replace("{{bio}}", bio);

  res.setHeader("Content-Type", "text/html");

  res.send(editedFile);
});

let port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
