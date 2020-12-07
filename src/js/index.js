const URL = "https://jsonplaceholder.typicode.com/users";
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
  const profiles = data.slice(0, 4);

  for (const profile of profiles) {
    const li = document.createElement("li");
    li.classList.add("container");
    li.innerHTML = `
      <img src=${PUPPY_API_URL}>
      <div>
      <h2> @${profile.username}</h2>
      <h4> ${profile.name} </h4>
      <span>${profile.address.street}, ${profile.address.city}.</span>
      <span> ${profile.company.name} </span>
      <span> Phone: ${profile.phone} </span>
      </div>
      `;
    cardList.appendChild(li);
  }
};

// DISPLAYING THE INFO

fetch(URL)
  .then((res) => checkStatus(res))
  .then((res) => res.json())
  .then(appendData);
