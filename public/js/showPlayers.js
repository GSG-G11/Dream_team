/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const showPlayers = (data) => {
  const playerImages = data.data;
  playerImages.forEach((e) => {
    if (!e.image_path.includes('placeholder')) {
      const playerCard = createElement('div', 'player-card', '');
      const divBtn = createElement('div', 'add-btn', '');
      const plusIcon = createElement(
        'img',
        'plus-icon',
        '',
        'src',
        'img/plus.png'
      );
      const nums = createElement('ul', 'nums', '');
      for (let i = 0; i <= 10; i += 1) {
        const itemNumber = createElement('li', 'num', i + 1, 'data-num', i);
        nums.append(itemNumber);
      }
      const playerImage = createElement(
        'img',
        'player-img',
        false,
        'src',
        e.image_path
      );
      const playerInfo = createElement('div', 'player-info', '');
      const playerName = createElement('h5', 'player-name', e.display_name);
      const playerDetails1 = createElement(
        'p',
        'player-details',
        `Nationality: ${e.nationality}`
      );
      const playerDetails2 = createElement(
        'p',
        'player-details',
        `Birth Date: ${e.birthdate}`
      );
      const playerDetails3 = createElement(
        'p',
        'player-details',
        `Birth Country: ${e.birthcountry}`
      );
      const playerDetails4 = createElement(
        'p',
        'player-details',
        `Height: ${e.height}`
      );
      const playerDetails5 = createElement(
        'p',
        'player-details',
        `Weight: ${e.weight}`
      );
      divBtn.append(plusIcon, nums);
      playerInfo.append(
        playerName,
        playerDetails1,
        playerDetails2,
        playerDetails3,
        playerDetails4,
        playerDetails5
      );
      playerCard.append(divBtn, playerImage, playerInfo);
      playerContainer.appendChild(playerCard);
    }
  });
  addPlayer();
};
