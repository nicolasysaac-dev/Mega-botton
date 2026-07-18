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


function atualizar(