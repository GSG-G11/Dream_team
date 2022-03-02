/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const addPlayer = () => {
  const addBtns = document.querySelectorAll('.plus-icon');
  addBtns.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.target.nextElementSibling.style.height = '240px';
      e.target.nextElementSibling.style.padding = '4px 0';
      const numbers = e.target.nextElementSibling.children;
      const itemNumbers = [...numbers];
      itemNumbers.forEach((num, i) => {
        num.addEventListener('click', (n, j) => {
          const playerCard = num.parentElement.parentElement.parentElement;
          playerCard.style.filter = 'grayscale(1)';
          playerCard.style.pointerEvents = 'none';
          squadCards[n.target.getAttribute('data-num')].innerHTML = '';
          if (
            +n.target.getAttribute('data-num') ===
            squadCards[n.target.getAttribute('data-num')].getAttribute(
              'data-player'
            ) -
              1
          ) {
            const playerImageInSquad = createElement(
              'img',
              'player-in-squad',
              '',
              'src',
              e.target.parentNode.nextElementSibling.src
            );
            const removeImage = createElement('span', 'remove-icon', '-');
            squadCards[n.target.getAttribute('data-num')].append(
              playerImageInSquad,
              removeImage
            );
            e.target.nextElementSibling.style.height = '0';
            e.target.nextElementSibling.style.padding = '0';
            removeImageFromSquad(removeImage, playerCard, i);
          }
        });
      });
    });
  });
};
const removeImageFromSquad = (icon, card, i) => {
  icon.addEventListener('click', (r) => {
    r.target.previousElementSibling.remove();
    r.target.parentElement.innerHTML = i + 1;
    r.target.remove();
    card.style.filter = 'grayscale(0)';
    card.style.pointerEvents = 'auto';
  });
};
