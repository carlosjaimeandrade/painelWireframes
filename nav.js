const menuBtn = document.querySelector('.menu-btn');
const menuBtnClose = document.querySelector('.menu-btn-close');
const aside = document.querySelector('aside');
menuBtn.onclick = () => {
    aside.style.width = '300px'
}
menuBtnClose.onclick = () => {
    aside.style.width = '0px'
}
