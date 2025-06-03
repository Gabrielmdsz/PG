const setaAvancar = document.getElementById('seta-avancar');
const setaVoltar = document.getElementById('seta-voltar');
const modulos = document.querySelectorAll(".modulo");

let inicio = 0;
let tamanhoJanela = window.innerWidth <= 1120 ? 1 : 4;

function atualizarTamanhoJanela() {
  tamanhoJanela = window.innerWidth <= 1120 ? 1 : 4;

  // Ajusta 'inicio' para não passar do limite
  if (inicio + tamanhoJanela > modulos.length) {
    inicio = Math.max(0, modulos.length - tamanhoJanela);
  }
}

function atualizarModulos() {
  modulos.forEach((modulo, index) => {
    if (index >= inicio && index < inicio + tamanhoJanela) {
      modulo.classList.add('visivel');
    } else {
      modulo.classList.remove('visivel');
    }
  });
}

setaAvancar.addEventListener('click', function (event) {
  event.preventDefault();
  if (inicio + tamanhoJanela >= modulos.length) return;
  inicio++;
  atualizarModulos();
});

setaVoltar.addEventListener('click', function (event) {
  event.preventDefault();
  if (inicio === 0) return;
  inicio--;
  atualizarModulos();
});

window.addEventListener('resize', () => {
  const oldTamanho = tamanhoJanela;
  atualizarTamanhoJanela();
  if (oldTamanho !== tamanhoJanela) {
    atualizarModulos();
  }
});

// Inicializa o carrossel
atualizarTamanhoJanela();
atualizarModulos();
