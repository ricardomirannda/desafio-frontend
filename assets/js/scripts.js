// MENU HAMBUGER - responsável por fazer abrir o menu hamburger em mobile
let menuHamburgerOpened = document.getElementById('menu-hamburger-opened');

function abreMenuHamburger() {
  menuHamburgerOpened.classList.add("menu-open");
}

function fechaMenuHamburger() {
  menuHamburgerOpened.classList.remove("menu-open");
}

// Pego os todas as li's que estão dentro do menu mobile e ao clicar em um item chamo a função de fechar o menu 
const menuMobileLinks = [...document.querySelectorAll('#menu-mobile-links li')];

menuMobileLinks.forEach( link => {
  link.addEventListener('click', function(){
    fechaMenuHamburger();
  });
});

