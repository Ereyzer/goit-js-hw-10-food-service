import './css/styles.css';
import menu from './data/menu.json';
import './js/menu';
import cardsMenuTemplate from './template/menu.hbs';

document.querySelector('.js-menu').insertAdjacentHTML('beforeend', menu.reduce((acc , card) => acc += cardsMenuTemplate(card),''));



// document.querySelector('.js-menu').insertAdjacentHTML('beforeend', menu.map(cardsMenuTemplate).join(''));
