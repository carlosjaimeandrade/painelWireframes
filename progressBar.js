const progressBars = document.querySelectorAll('[data-percentage]')
progressBars.forEach(bar =>{
    bar.style.width = `${bar.getAttribute('data-percentage')}%`
    bar.parentNode.parentNode.children[0].innerHTML = `${bar.getAttribute('data-percentage')}%`
})