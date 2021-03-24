import loadMain from './loadmain'
import loadContact from './loadcontact'
import loadSupport from './loadsupport'

loadMain();

function clearPage(){
    const doc = document.getElementById('content')

    while(doc.firstChild){doc.removeChild(doc.firstChild)}
}

document.addEventListener('click', (e) =>{

switch (e.target.innerHTML){
 
    case 'home': 
        clearPage();
        loadMain()
        break;

    case 'contact': 
        clearPage();
        loadContact();
        break;

    case 'support': 
        clearPage();
        loadSupport();
        break;
}


});

console.log('noop')