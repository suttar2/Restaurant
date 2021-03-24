const content = document.getElementById('content')

header = document.createElement('div')
header.classList.add('header')

    logo = document.createElement('img')
    logo.id = 'logo'
    logo.setAttribute('src', 'img/BriarBarLogoIsolated.png')
    header.appendChild(logo)

    nav = document.createElement('nav')
    header.appendChild(nav)

        home = document.createElement('button')
        home.innerHTML = 'home'
        home.classList.add('button-nav')
        nav.appendChild(home)

        support = document.createElement('button')
        support.innerHTML = 'support'
        support.classList.add('button-nav')
        nav.appendChild(support)

        contact = document.createElement('button')
        contact.innerHTML = 'contact'
        contact.classList.add('button-nav')
        nav.appendChild(contact)


maincontent = document.createElement('div')
maincontent.classList.add('main-content')

    h1 = document.createElement('h1')
    h1.innerHTML = 'Coming to NE MNPLS Soon'
    maincontent.appendChild(h1)

    p = document.createElement('p')
    p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    maincontent.appendChild(p)

    barimage = document.createElement('img')
    barimage.setAttribute('src', 'img/BriarBackdrop.jpg')
    maincontent.appendChild(barimage)




footer = document.createElement('div')
footer.classList.add('footer');
    
    address = document.createElement('p');
    address.innerHTML = '1212 Boogie Woogie Avenue, Anywhere USA'
    footer.appendChild(address);

    phone = document.createElement('p');
    phone.innerHTML = '(420) 666 - 6969'
    footer.appendChild(phone);

content.appendChild(header);
content.appendChild(maincontent);
content.appendChild(footer);

/*
<div class="header">
<img id="logo" src="img/BriarBarLogoIsolated.png">
<nav>
    <button class="button-nav">Home</button>
    <button class="button-nav">Support</button>
    <button class="button-nav">Contact</button>
</nav>
</div>

<div class="main-content">
<h1>Screiosm Mioieh</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
<img src="img/BriarBackdrop.jpg">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
</div>

<div class="footer"> 
<p>1212 Boogie Woogie Avenue Realtown, DG</p>
<p>(555) 420 - 6969</p>
</div>

*/