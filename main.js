const express = require("express");
const app = express();
const port = 7070;
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/json" }));


const API = "https://reqres.in/api/users";

fetch(`${API}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })