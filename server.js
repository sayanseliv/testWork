const express = require("express");
const app = express();
const port = 7070;
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require('path');
const persons = require("./fetch/persons");

const DATA_FILE_PATH = "csv/";

const separator = ",";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json" }));

app.use(express.static(__dirname + "/public"));
app.set("view engine", "html");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

router.get("/api/persons", function (req, res) {
  let date = new Date();
  const dateFileName = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}.csv`;
  if (res.statusCode !== 200) {
    throw Error(`Something Wrong`);
  }
  persons.fetchPersons().then((data) => {
    let personData = Object.assign({}, data);
    //файл создаётся в папке csv. Могу и кодировать
    fs.writeFile(
      `${DATA_FILE_PATH}${dateFileName}`,
      personData.data
        .map(
          (row) =>
            `${row.id}${separator}${row.first_name}${separator}${row.last_name}${separator}${row.email}`
        )
        .join("\n"),
      function (err) {
        if (err) throw err;
        console.log("File is created successfully.");
      }
    );
    return res.json(personData);
  });
});
app.use('/', router);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
