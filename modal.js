function modal(title, main, next){
    const header = document.querySelector('.modal-header')
    header.innerHTML = title
    const content = document.querySelector('.modal-content')
    content.innerHTML = main
    const modal = document.querySelector('.modal')
    modal.style.display = 'block'
    const cancel = document.querySelector('.cancel')  
    cancel.onclick = () => {
        modal.style.display = 'none'
    }
    const success = document.querySelector('.success')  
    success.onclick = () => {
        next()
    }
}