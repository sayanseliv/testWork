const fetch = require("node-fetch");

const API = "https://reqres.in/api/users";

class Persons{
    fetchPersons(){
        return fetch(`${API}`)
        .then(response => {
           return response.json()
        })
        .catch(error => console.log(error.message));
    }
}
module.exports = new Persons