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

const topLine = document.querySelector('header h2')

window.addEventListener('scroll', () => {
    topLine.textContent = 'You are scrolling down the Page'
})

const funLogo = document.querySelector(`.logo-heading`)

funLogo.addEventListener(`dblclick`, () => {
    funLogo.style.backgroundColor = `blue`
})

funLogo.addEventListener(`mousedown`, () => {
    funLogo.textContent = `It is moving Down`
})
funLogo.addEventListener(`mouseup`, () => {
    funLogo.textContent = `Fun Bus`
})
const welcomeIntro = document.querySelector(`.intro p`)
welcomeIntro.addEventListener(`mouseover`, () => {
    welcomeIntro.style.backgroundColor = `purple`
})
welcomeIntro.addEventListener(`mouseout`, () => {
    welcomeIntro.style.backgroundColor = `white`
})
const placeWheel = document.querySelectorAll(`.btn`)
let scale = 1;
function zoom(placeWheel) {
    placeWheel.preventDefault();
    scale += placeWheel.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    placeWheel.style.transform = `scale(${scale})`;
    placeWheel.addEventListener('wheel', zoom);
  }
  
  placeWheel.onwheel = zoom;