let cliques = Number(localStorage.getItem("cliques")) || 0;

document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("botao");
    const contador = document.getElementById("contador");

    function atualizarDisplay() {
        contador.textContent = "Cliques: " + cliques;
    }

    atualizarDisplay();

    botao.addEventListener("click", function () {

        cliques++;

        atualizarDisplay();

        localStorage.setItem("cliques", cliques);

        botao.style.transform = "scale(0.9)";

        setTimeout(function () {
            botao.style.transform = "scale(1)";
        }, 100);

    });

});
