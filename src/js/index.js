const URL = "js/users.json";
// 1. Tu siguiente objetivo es consumir esta API
// https://jsonplaceholder.typicode.com/users

const PUPPY_API_URL = "http://place-puppy.com/200x200";
const cardList = document.querySelector(".card-list");
const body = document.querySelector("body");

// FETCHING DATA
const checkStatus = (response) => {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
};

// CONTENT CREATORS

const appendData = (data) => {
  for (const profile of data) {
    let div = document.createElement("div"); // Cambiar let por const
    div.classList.add("container");
    // 2. Ajustar el lauyout y solucionar los errores.
    div.innerHTML = `
    <img src=${PUPPY_API_URL}>
    <div>
    <h2> @${profile.username}</h2>
    <h4> ${profile.name} </h4>
    <span> ${profile.address.street} </span>
    <span> ${profile.address.city}, ${profile.address.state} ${profile.address.zipcode}</span>
    </div>
    `;
    cardList.appendChild(div); // En lugar de div, usar un nombre más semantico
  }
};

// DISPLAYING THE INFO

fetch(URL)
  .then(res => checkStatus(res))
  .then(res => res.json())
  .then(appendData);
