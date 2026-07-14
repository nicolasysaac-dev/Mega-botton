alert("JavaScript está funcionando!");

let cliques = 0;

let botao = document.getElementById("botao");
let contador = document.getElementById("contador");

botao.addEventListener("click", function() {
    cliques++;
    contador.textContent = "Cliques: " + cliques;
});