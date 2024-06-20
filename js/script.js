let menu__open = document.querySelector('#menu__open')
let menu = document.querySelector('#menu')
let menu__spans = document.querySelectorAll('#menu__open span')

menu__open.onclick = () => {
    menu.classList.toggle('opened')
    document.body.classList.toggle('prevent-scroll')
    for (let menu__span of menu__spans) {
        menu__span.classList.toggle('dark')
    }

}