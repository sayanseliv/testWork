const express = require("express");
const app = express();
const port = 7070;
const bodyParser = require("body-parser");

const persons = require("./fetch/persons");
const { data } = require("jquery");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/json" }));


app.get('/', function(req, res){

  persons.fetchPersons().then((data) => {
    let personData = Object.assign({}, data);
    return personData
  }).then(data => {
    res.json(data);
})
  // res.send(console.log(personData)); //replace with your data here
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
