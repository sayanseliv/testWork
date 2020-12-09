const fetch = require("node-fetch");

const API = "https://reqres.in/api/users";

class Persons{
    fetchPersons(){
        return fetch(`${API}`)
        .then(response => 
           response.json()
        )
    }
}
module.exports = new Persons