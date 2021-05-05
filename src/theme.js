  
(() => {
     const refs = {
        body: document.querySelector('body'),
        checkBoxTheme: document.querySelector('#theme-switch-toggle')
    }
    const dataStorage = localStorage.getItem('Theme');
    const Theme = JSON.parse(dataStorage);
    const isChecked = Theme.CHECKED;
    console.log(isChecked);
    if (isChecked) {
        console.log('work- checked');
        refs.checkBoxTheme.setAttribute('checked', true);

        refs.body.classList.add(Theme.DARK);

    }else{
        refs.body.classList.add(Theme.LIGHT);
        console.log('work- unchecked');
        console.log(refs.body);

    }


  })();