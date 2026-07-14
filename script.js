let cliques = Number(localStorage.getItem("cliques")) || 0;

const contador = document.getElementById("contador");
const botao = document.getElementById("botao");

function atualizar() {
    contador.textContent = "Cliques: " + cliques;
}

atualizar();

botao.addEventListener("click", function () {

    cliques++;

    atualizar();

    localStorage.setItem("cliques", cliques);

});