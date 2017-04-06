var link = document.querySelector(".main-header__menu-button");
var popupMenu = document.querySelector(".main-header__container");
var menuClose = document.querySelector(".main-header__close");
var breadcrumb1 = document.querySelector(".nav-menu__breadcrumb1");
var breadcrumb2 = document.querySelector(".nav-menu__breadcrumb2");
var breadcrumb3 = document.querySelector(".nav-menu__breadcrumb3");
// nav-menu__point nav-menu__point-active
var navMenuPoint1 = document.querySelector(".nav-menu__point1");
var navMenuPoint2 = document.querySelector(".nav-menu__point2");
var navMenuPoint3 = document.querySelector(".nav-menu__point3");

link.addEventListener("click", function(event){
  event.preventDefault();
  popupMenu.classList.add("main-header__container_show");
});

menuClose.addEventListener("click", function(event){
  event.preventDefault();
  popupMenu.classList.remove("main-header__container_show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popupMenu.classList.contains("main-header__container_show")) {
      popupMenu.classList.remove("main-header__container_show");
    }
  }
});

breadcrumb1.addEventListener("click", function(event){
  event.preventDefault();
  breadcrumb1.classList.add("nav-menu__breadcrumb_active");
  navMenuPoint1.classList.add("nav-menu__point-active");
  if (breadcrumb2.classList.contains("nav-menu__breadcrumb_active")) {
      breadcrumb2.classList.remove("nav-menu__breadcrumb_active");
    }
  if (breadcrumb3.classList.contains("nav-menu__breadcrumb_active")) {
      breadcrumb3.classList.remove("nav-menu__breadcrumb_active");
    }

  if (navMenuPoint2.classList.contains("nav-menu__point-active")) {
      navMenuPoint2.classList.remove("nav-menu__point-active");
    }
  if (navMenuPoint3.classList.contains("nav-menu__point-active")) {
      navMenuPoint3.classList.remove("nav-menu__point-active");
    }

});

breadcrumb2.addEventListener("click", function(event){
  event.preventDefault();
  breadcrumb2.classList.add("nav-menu__breadcrumb_active");
  navMenuPoint2.classList.add("nav-menu__point-active");
  if (breadcrumb1.classList.contains("nav-menu__breadcrumb_active")) {
      breadcrumb1.classList.remove("nav-menu__breadcrumb_active");
    }
  if (breadcrumb3.classList.contains("nav-menu__breadcrumb_active")) {
      breadcrumb3.classList.remove("nav-menu__breadcrumb_active");
    }

  if (navMenuPoint1.classList.contains("nav-menu__point-active")) {
      navMenuPoint1.classList.remove("nav-menu__point-active");
    }
  if (navMenuPoint3.classList.contains("nav-menu__point-active")) {
      navMenuPoint3.classList.remove("nav-menu__point-active");
    }

});

breadcrumb3.addEventListener("click", function(event){
  event.preventDefault();
  breadcrumb3.classList.add("nav-menu__breadcrumb_active");
  navMenuPoint3.classList.add("nav-menu__point-active");
  if (breadcrumb1.classList.contains("nav-menu__breadcrumb_active")) {
      breadcrumb1.classList.remove("nav-menu__breadcrumb_active");
    }
  if (breadcrumb2.classList.contains("nav-menu__breadcrumb_active")) {
      breadcrumb2.classList.remove("nav-menu__breadcrumb_active");
    }

  if (navMenuPoint1.classList.contains("nav-menu__point-active")) {
      navMenuPoint1.classList.remove("nav-menu__point-active");
    }
  if (navMenuPoint2.classList.contains("nav-menu__point-active")) {
      navMenuPoint2.classList.remove("nav-menu__point-active");
    }

});


navMenuPoint1.addEventListener("click", function(event){
  event.preventDefault();
  navMenuPoint1.classList.add("nav-menu__point-active");
  
  if (navMenuPoint2.classList.contains("nav-menu__point-active")) {
      navMenuPoint2.classList.remove("nav-menu__point-active");
    }
  if (navMenuPoint3.classList.contains("nav-menu__point-active")) {
      navMenuPoint3.classList.remove("nav-menu__point-active");
    }

});

navMenuPoint2.addEventListener("click", function(event){
  event.preventDefault();
  navMenuPoint2.classList.add("nav-menu__point-active");
  if (navMenuPoint1.classList.contains("nav-menu__point-active")) {
      navMenuPoint1.classList.remove("nav-menu__point-active");
    }
  if (navMenuPoint3.classList.contains("nav-menu__point-active")) {
      navMenuPoint3.classList.remove("nav-menu__point-active");
    }
});

navMenuPoint3.addEventListener("click", function(event){
  event.preventDefault();
  navMenuPoint3.classList.add("nav-menu__point-active");
  if (navMenuPoint1.classList.contains("nav-menu__point-active")) {
      navMenuPoint1.classList.remove("nav-menu__point-active");
    }
  if (navMenuPoint2.classList.contains("nav-menu__point-active")) {
      navMenuPoint2.classList.remove("nav-menu__point-active");
    }
});