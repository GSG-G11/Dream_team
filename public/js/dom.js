/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const playerContainer = document.querySelector('.players-container');
const squadCards = document.querySelectorAll('.player');
const searchInput = document.getElementById('search');
const serachButton = document.getElementById('search-button');

serachButton.addEventListener('click', (elem) => {
  // playerContainer.innerHTML = '';
  while (playerContainer.firstChild) {
    playerContainer.removeChild(playerContainer.lastChild);
  }
  elem.preventDefault();
  // console.log(searchInput.value);
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
  // fetch(
  //   `https://soccer.sportmonks.com/api/v2.0/players/search/${searchInput.value}?api_token=FesbgygxBGexuNRGjXWkUT8G15ikrjjo2HPwG2Nj85mnMYQIQIs3hQcgt5yv`
  // )
  // .then((response) => response.json())
  // .then((data) => showPlayers(data));
});
