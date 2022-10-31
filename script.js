"use strict";

// Alterar menu mobile

function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "images/menu_burger.png";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "images/menu_close.png";
  }
}

// Aparecer interesses   - melhorar para evitar repeticao de codigo!

let interesse01 = document.querySelector(".interesse01");
let interesse02 = document.querySelector(".interesse02");
let interesse03 = document.querySelector(".interesse03");
let aparece = true;

function toggleElement01() {
  interesse02.classList.remove("show", aparece);
  interesse03.classList.remove("show", aparece);
  interesse01.classList.add("show", aparece);
}

function toggleElement02() {
  interesse01.classList.remove("show", aparece);
  interesse03.classList.remove("show", aparece);
  interesse02.classList.add("show", aparece);
}

function toggleElement03() {
  interesse01.classList.remove("show", aparece);
  interesse02.classList.remove("show", aparece);
  interesse03.classList.add("show", aparece);
}

// Slide Show

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("imagem_sobre_mim");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}
