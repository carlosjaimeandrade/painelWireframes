

function progressBarTab(){
    const progressBars = document.querySelectorAll('[data-percentage]')
    progressBars.forEach(bar =>{
        bar.style.width = `${bar.getAttribute('data-percentage')}%`
    })
}
progressBarTab()