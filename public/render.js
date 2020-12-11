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
        <div class="card border border-danger mx-2 my-2"  style="width: 18rem;">
        <img src="${info.avatar}" class="card-img-top" alt="${info.first_name}">
        <div class="card-body">
        <h5 class="card-title">Name: ${info.first_name}</h5>
        <p class="card-text">Email: ${info.email}</p>
        </div>
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

 console.log($("#1")); 
// $(function(){

// $(".persons").slice(0,2).show();
// $('#load-more').on('click', function(e) {
    // e.preventDefault();
    // $(".persons:hidden").slice(0,2).slideDown()
// })
// })