

export const refs = {
    body: document.querySelector('body'),
    checkBoxTheme: document.querySelector('#theme-switch-toggle')
}


const Theme = {
    LIGHT: "light-theme",
    DARK: "dark-theme",
}

const parseJsonTheme = JSON.stringify(Theme);
localStorage.setItem('Theme', parseJsonTheme);


refs.checkBoxTheme.addEventListener('change', changeTheme);

function changeTheme(event) {

    const isChecked = JSON.parse(localStorage.getItem('CHECKED'));

    refs.body.setAttribute('class', isChecked ? Theme.LIGHT : Theme.DARK)

    localStorage.setItem('CHECKED', !isChecked)


}
