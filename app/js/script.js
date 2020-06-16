const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function() {
  console.log('open hamburger')
  if (header.classList.contains('open')) { // Close Hamburger Menu
    body.classList.remove('noscroll')
    header.classList.remove('open');
    fadeElems.forEach((element) => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    })
  } else { // Open Hamburger Menu 
    header.classList.add('open');
    body.classList.add('noscroll')
    fadeElems.forEach((element) => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    })
  }
})