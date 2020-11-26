// Variabile contenente l'elemento da cliccare per aprire il menu
var clickToOpen = $('.header-right > a > i');
// Variabile contenente l'elemento da cliccare per chiudere il menu
var clickToClose = $('.hamburger-menu > a > i');
// Variabile contentente il menu da mostrare e nascondere
var hamburgerMenu = $('.hamburger-menu');

//Funzione con click per aprire il menu hamburger
clickToOpen.click(function() {
  hamburgerMenu.fadeIn(400);
});

//Funzione con click per chiudere il menu hamburger
clickToClose.click(function() {
  hamburgerMenu.fadeOut(400);
});
