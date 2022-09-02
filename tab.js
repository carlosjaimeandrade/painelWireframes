
const btns = document.querySelectorAll('[data-visible]')
btns.forEach(btn => {
    if (btn.getAttribute('data-visible') == "tab1") {
        btn.style.backgroundColor = "#4CAA98"
        btn.style.color = "#fff"
    }
    btn.onclick = () => {
        const allTabs = document.querySelectorAll('[data-tab]')
        allTabs.forEach(oneTab => {
            oneTab.style.display = 'none'
        })
        const tab = btn.getAttribute('data-visible')
        const activeTab = document.querySelector(`.${tab}`)
        activeTab.style.display = 'flex'

        btns.forEach(btn => {
            btn.style.backgroundColor = '#F7F7F7'
            btn.style.color = "black"
        })
        btn.style.backgroundColor = "#4CAA98"
        btn.style.color = "#fff"
    }
})

