const express = require("express");
const app = express();
const port = 7070;
const bodyParser = require("body-parser");

const persons = require("./fetch/persons");
const { response } = require("express");
// const { data } = require("jquery");

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/json" }));


app.use(express.static(__dirname + "/public"));
app.set('view engine', 'html');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

  // app.get("/", function (req, res) {
    // res.render('index', function (err, html) {
      // res.send(html)
    // })
// })

app.get("/api/persons", function (req, res) {
  if (res.statusCode !== 200) {
    throw Error(`Something Wrong`);
  }
  persons
    .fetchPersons()
    .then((data) => {
      let personData = Object.assign({}, data);
      return res.json(personData);
    })
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
