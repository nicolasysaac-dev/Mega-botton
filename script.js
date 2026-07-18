let cliques = Number(localStorage.getItem("cliques")) || 0;
let clickPower = Number(localStorage.getItem("clickPower")) || 1;
let custoDedo = 50;

const contador = document.getElementById("contador");
const botao = document.getElementById("botao");

const abrirLoja = document.getElementById("abrirLoja");
const fecharLoja = document.getElementById("fecharLoja");
const loja = document.getElementById("loja");

const comprarDedo = document.getElementById("comprarDedo");
const poderTexto = document.getElementById("poderTexto");
const custoTexto = document.getElementById("custoTexto");


function atualizar() {
    contador.textContent = "Cliques: " + cliques;
    poderTexto.textContent = "Click Power: " + clickPower;
    custoTexto.textContent = "Custo: " + custoDedo + " cliques";
}


atualizar();


botao.addEventListener("click", function () {

    cliques += clickPower;

    atualizar();

    localStorage.setItem("cliques", cliques);

});


abrirLoja.addEventListener("click", function () {
    loja.style.display = "block";
});


fecharLoja.addEventListener("click", function () {
    loja.style.display = "none";
});


comprarDedo.addEventListener("click", function () {

    if (cliques >= custoDedo) {

        cliques -= custoDedo;

        clickPower++;

        localStorage.setItem("cliques", cliques);
        localStorage.setItem("clickPower", clickPower);

        atualizar();

    } else {

        alert("Você não tem cliques suficientes! ");

    }

});