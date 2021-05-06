import Theme from '../data/theme.json';
const refs = {
    body: document.querySelector('body'),
    checkBoxTheme: document.querySelector('#theme-switch-toggle')
}

let isChecked = JSON.parse(localStorage.getItem('CHECKED'));  

firstTheme();
refs.checkBoxTheme.addEventListener('change', changeTheme);

function firstTheme() {

    refs.body.setAttribute('class', !isChecked ? Theme.LIGHT : Theme.DARK)

    if (isChecked) {
        refs.checkBoxTheme.setAttribute('checked', true);
    }
    
};

function changeTheme() {
    isChecked = JSON.parse(localStorage.getItem('CHECKED'));
    refs.body.setAttribute('class', isChecked ? Theme.LIGHT : Theme.DARK);

    localStorage.setItem('CHECKED', !isChecked);
};
