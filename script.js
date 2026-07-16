let cliques = Number(localStorage.getItem("cliques")) || 0;

const contador = document.getElementById("contador");
const botao = document.getElementById("botao");

const abrirLoja = document.getElementById("abrirLoja");
const fecharLoja = document.getElementById("fecharLoja");
const loja = document.getElementById("loja");

function atualizar() {
    contador.textContent = "Cliques: " + cliques;
}

atualizar();

botao.addEventListener("click", function () {

    cliques++;

    atualizar();

    localStorage.setItem("cliques", cliques);

});


abrirLoja.addEventListener("click", function () {
    loja.style.display = "block";
});

fecharLoja.addEventListener("click", function () {
    loja.style.display = "none";
});