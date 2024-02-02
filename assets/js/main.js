/*=============== SHOW MENU ===============*/
const menu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle'); 

navToggle.addEventListener('click', () => {
    menu.classList.toggle('show-menu')
}); 

navClose.addEventListener('click', () => {
  menu.classList.remove('show-menu')
}); 

/*=============== REMOVE MENU MOBILE ===============*/
const links = document.querySelectorAll('.nav__link'); 

const linkAction = () => {
  const menu = document.getElementById('nav-menu')

  menu.classList.remove('show-menu')
}; 

links.forEach(lb => {
  lb.addEventListener('click', linkAction)
}); 

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__title', 1, {opacity: 0, y: 20, delay: .2, ease: Expo.easeInOut}) 
gsap.from('.home__description', 1, {opacity: 0, y: 20, delay: .3, ease: Expo.easeInOut}) 
gsap.from('.home__button', 1, {opacity: 0, y: 20, delay: .4, ease: Expo.easeInOut}) 
gsap.from('.home__liquid', 1, {opacity: 0, y: 200, delay: .7, ease: Expo.easeInOut}) 
gsap.from('.home__juice-animate', 1, {opacity: 0, y: -800, delay: 1.2, ease: Expo.easeInOut}) 
gsap.from('.home__apple-1', 1, {opacity: 0, y: -800, delay: 1.5, ease: Expo.easeInOut})
gsap.from('.home__apple-2', 1, {opacity: 0, y: -800, delay: 1.6, ease: Expo.easeInOut})
gsap.from('.home__leaf:nth-child(1)', 2, {opacity: 0, y: -800, delay: 1.3, ease: Expo.easeInOut})
gsap.from('.home__leaf:nth-child(2)', 2, {opacity: 0, y: -800, delay: 1.4, ease: Expo.easeInOut})
gsap.from('.home__leaf:nth-child(3)', 2, {opacity: 0, y: -800, delay: 1.5, ease: Expo.easeInOut})
gsap.from('.home__leaf:nth-child(4)', 2, {opacity: 0, y: -800, delay: 1.6, ease: Expo.easeInOut})
gsap.from('.home__leaf:nth-child(5)', 2, {opacity: 0, y: -800, delay: 1.7, ease: Expo.easeInOut})
gsap.from('.home__leaf:nth-child(6)', 2, {opacity: 0, y: -800, delay: 1.8, ease: Expo.easeInOut})
