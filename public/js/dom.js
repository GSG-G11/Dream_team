/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const playerContainer = document.querySelector('.players-container');
const squadCards = document.querySelectorAll('.player');
const searchInput = document.getElementById('search');
const serachButton = document.getElementById('search-button');
const form = document.querySelector('.form');

form.addEventListener('submit', (elem) => {
  while (playerContainer.firstChild) {
    playerContainer.removeChild(playerContainer.lastChild);
  }
  elem.preventDefault();
  fetch('/search-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ player: searchInput.value }),
  })
    .then((data) => data.json())
    .then((data) => showPlayers(data))
    .catch((err) => console.log(err));
});
