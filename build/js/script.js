'use strict';

var toggleMenu = document.querySelector('.main-nav__toggle');
var mainHeader = document.querySelector('.header');
var mainNav = document.querySelector('.main-nav');

mainNav.classList.remove('main-nav--nojs');
mainHeader.classList.remove('main-nav--nojs');

toggleMenu.addEventListener('click', function(evt) {
  evt.preventDefault();

  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    mainHeader.classList.add('header--active');
  } else {
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
    mainHeader.classList.remove('header--active');
  }

  mainHeader.classList.toggle('header--open');
});