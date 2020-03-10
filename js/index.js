// Your code goes here
document.querySelectorAll(`nav a`).forEach(item => {
    item.addEventListener(`mouseenter`, () => {
        item.style.border = `2px dotted red`
    })
    item.addEventListener(`mouseleave`,() => {
        item.style.border = `none`
    })
})

document.querySelector(`nav`).addEventListener(`click`,() => {
    console.log(`the nav got clicked`);
})
//keydown
//const mainNav = document.querySelector(`.main-navigation`).addEventListener(`keydown`, event) {

//}

//wheel
//document.querySelector(`logo-heading`).

//drag / drop

//load

//focus

//resize

const windowSize = document.querySelector(`main-navigation`)
window.addEventListener(`resize`, () => {
    windowSize.textContent = ``
})
//scroll

//select

//dblclick



