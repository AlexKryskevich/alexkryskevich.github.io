const menu_btn = document.getElementById('menu-btn');
const menu_btn_icon = document.getElementById('menu-btn-icon')
const menu = document.getElementById('nav-list');

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
        this.setAttribute('closed', '');
        menu.style.transform = 'translateY(-100vh)';
        menu.style.transition = '.5s';
        menu_btn_icon.classList.remove('fa-x');
        menu_btn_icon.classList.add('fa-bars');
        document.body.setAttribute('scroll', 'yes');
        document.body.style.overflow = 'auto';
    }
})