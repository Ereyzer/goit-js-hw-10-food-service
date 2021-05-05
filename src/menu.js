console.log('hello')

console.log(localStorage.getItem('Theme'));

const refs = {
    body: document.querySelector('body'),
    checkBoxTheme: document.querySelector('#theme-switch-toggle')
}

let checkControl = false;
const Theme = {
    "LIGHT": "light-theme",
    "DARK": "dark-theme",
    "CHECKED": false,
  }
  console.log(Theme);


const parseJsonTheme = JSON.stringify(Theme);
localStorage.setItem('Theme', parseJsonTheme);
console.log(refs.checkBoxTheme);
console.log(refs.body); 




refs.checkBoxTheme.addEventListener('change', changeTheme);

function changeTheme(event) {
    refs.checkBoxTheme.setAttribute('checked', true);
    // checkControl = true;
    Theme.CHECKED = true;
    console.log(Theme);
    console.log(checkControl);
    const parseJsonTheme = JSON.stringify(Theme);
    localStorage.setItem('Theme', parseJsonTheme);
    
    console.log(event);
    console.log(refs.checkBoxTheme);

}

// refs.body.classList.add(Theme.DARK);


console.log(`${Theme.DARK}`)