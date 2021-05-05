
    import {refs} from './menu'
  
(() => {
    const dataStorage = localStorage.getItem('Theme');
    const Theme = JSON.parse(dataStorage);
    const isChecked = JSON.parse(localStorage.getItem('CHECKED'));
    
    refs.body.setAttribute('class', !isChecked ? Theme.LIGHT : Theme.DARK)

    if (isChecked) {
        refs.checkBoxTheme.setAttribute('checked', true);
    }
  })();