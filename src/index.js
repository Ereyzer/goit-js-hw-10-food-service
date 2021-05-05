import './styles.css';
import menu from './menu.json';
import './menu';
import cardsMenuTemplate from './menu.hbs';

document.querySelector('.js-menu').insertAdjacentHTML('beforeend', menu.reduce((acc , card) => acc += cardsMenuTemplate(card),''))
