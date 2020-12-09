const express = require("express");
const app = express();
const port = 7070;
const bodyParser = require("body-parser");

const persons = require("./fetch/persons");
const { data } = require("jquery");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/json" }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function(req, res){
if(res.statusCode !== 200) {
  throw Error(`Something Wrong`)
}

  persons.fetchPersons().then((data) => {
    
    let personData = Object.assign({}, data);
    return personData
  }).then(data => {
    // res.render(`<div class="user">${data}</div>`)
    
    res.json(data);

    
    // res.send(JSON.stringify(data));
})

});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
