import './styles.css';
import menu from './menu.json';
import './menu';
import './theme';
import cardsMenuTemplate from './menu.hbs';



document.querySelector('.js-menu').insertAdjacentHTML('beforeend', menu.reduce((acc , card) => acc += cardsMenuTemplate(card),''))









// const listMenu = document.querySelector('.js-menu');

// const makeMenu = () => menu.reduce((acc , card) => acc += cardsMenuTemplate(card),'');


