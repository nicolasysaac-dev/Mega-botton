let cliques = 0;
let cliquesPorSegundo = 0;
let multiplicadorClique = 1;

const UPGRADE_COST = 20;
const SKIN_THRESHOLDS = {
  roxo: 100,
  laranja: 500,
  azul: 1000
};

document.addEventListener("DOMContentLoaded", function() {
  const botao = document.getElementById("botao");
  const contador = document.getElementById("contador");
  const cpsDisplay = document.getElementById("cps");
  const upgradeDuploBtn = document.getElementById("upgrade-clique");
  const upgradeAutoBtn = document.getElementById("upgrade-auto");

  // Função para atualizar a exibição
  function atualizarDisplay() {
    contador.textContent = "Cliques: " + cliques;
    cpsDisplay.textContent = "Cliques por segundo: " + cliquesPorSegundo;
    atualizarSkin();
    atualizarBotoesUpgrade();
  }

  // Função para mudar a skin do botão
  function atualizarSkin() {
    botao.classList.remove("vermelho", "roxo", "laranja", "azul");

    if (cliques >= SKIN_THRESHOLDS.azul) {
      botao.classList.add("azul");
    } else if (cliques >= SKIN_THRESHOLDS.laranja) {
      botao.classList.add("laranja");
    } else if (cliques >= SKIN_THRESHOLDS.roxo) {
      botao.classList.add("roxo");
    } else {
      botao.classList.add("vermelho");
    }
  }

  // Função para atualizar estado dos botões de upgrade
  function atualizarBotoesUpgrade() {
    if (cliques >= UPGRADE_COST) {
      upgradeDuploBtn.classList.remove("disabled");
      upgradeAutoBtn.classList.remove("disabled");
    } else {
      upgradeDuploBtn.classList.add("disabled");
      upgradeAutoBtn.classList.add("disabled");
    }
  }

  // Clique no botão principal
  botao.addEventListener("click", function() {
    cliques += multiplicadorClique;
    atualizarDisplay();

    // Animação de clique
    botao.style.transform = "scale(0.85)";
    setTimeout(() => {
      botao.style.transform = "scale(1)";
    }, 100);
  });

  // Upgrade: Clique Duplo
  upgradeDuploBtn.addEventListener("click", function() {
    if (cliques >= UPGRADE_COST) {
      cliques -= UPGRADE_COST;
      multiplicadorClique += 1;
      atualizarDisplay();
    }
  });

  // Upgrade: Cliques Automáticos
  upgradeAutoBtn.addEventListener("click", function() {
    if (cliques >= UPGRADE_COST) {
      cliques -= UPGRADE_COST;
      cliquesPorSegundo += 1;
      atualizarDisplay();
    }
  });

  // Sistema de cliques automáticos (a cada segundo)
  setInterval(function() {
    if (cliquesPorSegundo > 0) {
      cliques += cliquesPorSegundo;
      atualizarDisplay();
    }
  }, 1000);

  // Inicializar display
  atualizarDisplay();
});
