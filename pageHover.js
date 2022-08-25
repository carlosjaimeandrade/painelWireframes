const page = document.querySelector('[data-page]').getAttribute('data-page');
const selects = document.querySelectorAll('[data-page-select]');
selects.forEach(select => {
    if (select.getAttribute('data-page-select') == page) {
        select.style.backgroundColor = '#6DAA9C';
        select.style.color = '#fff';
        select.parentNode.children[1].style.color = '#fff';
    }
})