function fetchRender() {
  var app = $("#app");
  fetch("https://reqres.in/api/users")
    .then((response) => {
      if (!response.ok) {
        throw Error("Something Wrong");
      }
      return response.json();
    })
    .then((data) => {
      data.data.map((info) => {
        $(`<div class = "persons" id="${info.id}">
        <div class="card border border-danger mx-2 my-2"  style="width: 18rem;">
        <img src="${info.avatar}" class="card-img-top" alt="${info.first_name}">
        <div class="card-body">
        <h5 class="card-title">Name: ${info.first_name}</h5>
        <p class="card-text">Email: ${info.email}</p>
        </div>
        </div>
        </div>`).appendTo(app);
      });
      xyz();
    })
    .catch((err) => console.log("Request Failed", err));
}
fetchRender();

function postRender() {
  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "RESPOND",
      test: "POST",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error("Something Wrong");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log("Request Failed", err));
}
postRender();

function xyz() {
  $(".persons").slice(0, 2).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    if ($(".persons:hidden").length == 0) {
      $("#spanHide").show();
    } else {
      $(".persons:hidden").slice(0, 2).show();
    }
  });
}
