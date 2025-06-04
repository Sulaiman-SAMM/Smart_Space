"use strict";

let swiper = new Swiper('.swiper', {
    loop: true,

  });

//    -----------------------
  let x = 0;
  let header = document.getElementById('header');

  window.onscroll = function() {
    if (window.pageYOffset > x) {
      header.classList.add('headerstiky')
    } else {
      header.classList.remove('headerstiky')
    }
  }