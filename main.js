var menu = document.getElementsByClassName("accueil__hamb")[0];
var hidden = document.getElementsByClassName("accueil__hidden")[0];

var fermer = document.getElementsByClassName("accueil__hidden-close")[0];

menu.addEventListener("click", function(){
    hidden.style.display = "flex";
    menu.style.display = "none";
    
});

fermer.addEventListener("click", function(){
    menu.style.display = "flex";
    hidden.style.display = "none";       
});