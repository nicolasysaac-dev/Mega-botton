
let cliques = Number(localStorage.getItem("cliques")) || 0;
let clickPower = Number(localStorage.getItem("clickPower")) || 1;
let autoClick = Number(localStorage.getItem("autoClick")) || 0;

// ITENS DA LOJA
let upgrades = [
{
nome: "⚡ Dedo Turbo",
custo: 50,
tipo: "clique",
valor: 1
},

{  
    nome: "🤖 Auto Clicker",  
    custo: 125,  
    tipo: "auto",  
    valor: 1  
}

];

const contador = document.getElementById("contador");
const botao = document.getElementById("botao");

const abrirLoja = document.getElementById("abrirLoja");
const fecharLoja = document.getElementById("fecharLoja");
const loja = document.getElementById("loja");

const listaLoja = document.getElementById("listaLoja");

const poderTexto = document.getElementById("poderTexto");

function atualizar(){

contador.textContent = "Cliques: " + cliques;  

poderTexto.textContent =  
"Clique: " + clickPower +  
" | Auto: " + autoClick + "/s";

}

function criarLoja(){

listaLoja.innerHTML = "";  

upgrades.forEach((item, index)=>{  


    let div = document.createElement("div");  

    div.className = "upgrade";  


    div.innerHTML = `  
        <h3>${item.nome}</h3>  
        <p>Custo: ${item.custo} cliques</p>  
        <p>+${item.valor} ${item.tipo}</p>  

        <button onclick="comprar(${index})">  
        Comprar  
        </button>  
    `;  


    listaLoja.appendChild(div);  


});

}

function comprar(index){

let item = upgrades[index];  


if(cliques >= item.custo){  


    cliques -= item.custo;  


    if(item.tipo == "clique"){  

        clickPower += item.valor;  

        localStorage.setItem("clickPower", clickPower);  

    }  


    if(item.tipo == "auto"){  

        autoClick += item.valor;  

        localStorage.setItem("autoClick", autoClick);  

    }  


    localStorage.setItem("cliques", cliques);  


    atualizar();  


}else{  

    alert("Cliques insuficientes 💀");  

}

}

botao.addEventListener("click",()=>{

cliques += clickPower;  

localStorage.setItem("cliques", cliques);  

atualizar();

});

abrirLoja.addEventListener("click",()=>{

loja.style.display="block";

});

fecharLoja.addEventListener("click",()=>{

loja.style.display="none";

});

setInterval(()=>{

cliques += autoClick;  

localStorage.setItem("cliques", cliques);  

atualizar();

},1000);

criarLoja();
atualizar();