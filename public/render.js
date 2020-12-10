// 
// const list = {}
// 
// function getData(){
// $.getJSON('https://reqres.in/api/users', function(data) {
    // Object.assign(list,data.data)
// })
//  }
//  getData()
//  console.log(list);

function fetchRender() {
  fetch("https://reqres.in/api/users")
    .then(response => {
      if (!response.ok) {
        throw Error("Something Wrong");
      }
      return response.json();
    })
    .then(data => {
      const html = data.data.map(info => {
          return `
        <div class = "persons" id="${info.id}">
        <div class="card" style="width: 18rem;">
        <p><img src= "${info.avatar}" alt="${info.first_name}"/></p>
        <p>Name:${info.first_name}</p>
        <p>Email:${info.email}</p>
        </div>
        </div>
        `;
        })
        .join("");
      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })
    .catch(err => console.log('Request Failed', err));
}
fetchRender()


function postRender() {
    fetch("https://reqres.in/api/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: "RESPOND",
            test: "POST"
        })
    })
      .then(response => {
        if (!response.ok) {
          throw Error("Something Wrong");
        }
        return response.json();
      })
      .then(data => {console.log(data)})
      .catch(err => console.log('Request Failed', err));
  }
  postRender()


  let index = 2
const listItems = $('.persons');
$('button').on('click', function() {
    
$('li').append(function (index) {
    return $('<span>', {
      text: ' (' + index + ' метод)'
    })
  });
})







listItems.addClass('person-added');