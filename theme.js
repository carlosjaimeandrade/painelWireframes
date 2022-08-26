const thema = document.querySelector('.thema')
const main = document.querySelector('main');
const asideMenu = document.querySelector('aside');   
const menuIcon = document.querySelector('.menu-btn');
const resultTitle = document.querySelectorAll('.result-content > h5');
const backFront = document.querySelectorAll('.back-front-arrow > a');
thema.onclick = () => {
    menuIcon.style.color  = '#fff';
    main.style.backgroundColor = '#292929';
    resultTitle.forEach( title =>{
        title.style.color = '#fff';
    })
    backFront.forEach( title =>{
        title.style.color = '#fff';
    })
}