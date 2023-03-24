const menu_btn = document.getElementById('menu-btn');
const menu_btn_icon = document.getElementById('menu-btn-icon')
const menu = document.getElementById('nav-list');
const links = document.querySelectorAll('.nav-link');
const faq_items = document.querySelectorAll('.faq-item')

let = is_resized = false

menu_btn.addEventListener('click', function() {
    if (this.hasAttribute('closed')) {
        this.removeAttribute('closed');
        menu.style.transform = 'translateY(0)';
        menu.style.transition = '.5s';
        menu_btn_icon.classList.remove('fa-bars');
        menu_btn_icon.classList.add('fa-x');
        document.body.setAttribute('scroll', 'no');
        document.body.style.overflow = 'hidden';
    } else {
        close_menu(this)
    }
})

for(let i = 0; i < faq_items.length; i++) {
    faq_items[i].addEventListener('click', function(e) {
        if (faq_items[i].hasAttribute('closed')) {
            faq_items[i].children[1].style.display = 'block';
            faq_items[i].removeAttribute('closed');
            faq_items[i].children[0].children[1].children[0].classList.replace('fa-plus', 'fa-minus');
        } else {
            faq_items[i].children[1].style.display = 'none';
            faq_items[i].setAttribute('closed', '');
            faq_items[i].children[0].children[1].children[0].classList.replace('fa-minus', 'fa-plus');
        }
    })
}

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
        if (document.body.style.overflow == 'hidden') {
            document.body.style.overflow = 'auto';
            document.body.setAttribute('scroll', 'yes');
            close_menu(menu_btn)
        }
    })
}


function close_menu(item) {
        item.setAttribute('closed', '');
        menu.style.transform = 'translateY(-100vh)';
        menu.style.transition = '.5s';
        menu_btn_icon.classList.remove('fa-x');
        menu_btn_icon.classList.add('fa-bars');
        document.body.setAttribute('scroll', 'yes');
        document.body.style.overflow = 'auto';
}


function reportWindowSize() {
    width = window.screen.width

    if (width > 992 && menu_btn.hasAttribute('closed')) {
        menu.style.transform = 'translateY(0)';
        menu.style.removeProperty('transition');
    }

    if (width <= 992 && menu_btn.hasAttribute('closed')) {
        menu.style.transform = 'translateY(-100vh)';
        menu.style.removeProperty('transition');
    }
}

window.addEventListener("resize", reportWindowSize);
