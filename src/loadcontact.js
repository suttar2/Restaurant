const loadContact = () => {
    const content = document.getElementById('content');

    let header = document.createElement('div');
    header.classList.add('header');

        let logo = document.createElement('img');
        logo.id = 'logo';
        logo.setAttribute('src', 'img/BriarBarComingSoon.png');
        header.appendChild(logo);

        let nav = document.createElement('nav');
        header.appendChild(nav);

            let home = document.createElement('button');
            home.innerHTML = 'home';
            home.classList.add('button-nav');
            nav.appendChild(home);

            let support = document.createElement('button');
            support.innerHTML = 'support';
            support.classList.add('button-nav');
            nav.appendChild(support);

            let contact = document.createElement('button');
            contact.innerHTML = 'contact';
            contact.classList.add('button-nav','active');
            nav.appendChild(contact);

const maincontent = document.createElement('div');
maincontent.classList.add('main-content');

    let h1 = document.createElement('h1');
    h1.innerHTML = 'Contact Us';
    maincontent.appendChild(h1);

    let p = document.createElement('p');
    p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    maincontent.appendChild(p);

const footer = document.createElement('div');
footer.classList.add('footer');
    
    let address = document.createElement('p');
    address.innerHTML = '1212 Boogie Woogie Avenue, Anywhere USA';
    footer.appendChild(address);

    let phone = document.createElement('p');
    phone.innerHTML = '(420) 666 - 6969';
    footer.appendChild(phone);

content.appendChild(header);
content.appendChild(maincontent);
content.appendChild(footer);
}

export default loadContact;
