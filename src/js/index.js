const url = "js/users.json";
const puppyAPI = "http://place-puppy.com/200x200";
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
    let div = document.createElement("div");
    div.classList.add("container");
    div.innerHTML = `
    <img src=${puppyAPI}>
    <div>
    <h2> @${profile.username}</h2>
    <h4> ${profile.name} </h4>
    <span> ${profile.address.street} </span>
    <span> ${profile.address.city}, ${profile.address.state} ${profile.address.zipcode}</span>
    </div>
    `;
    cardList.appendChild(div);
  }
};

// DISPLAYING THE INFO

fetch(url)
  .then(checkStatus)
  .then((res) => res.json())
  .then(appendData);
