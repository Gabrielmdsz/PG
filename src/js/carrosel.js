const setaAvancar = document.getElementById('seta-avancar');
const setaVoltar = document.getElementById('seta-voltar');
const modulos = document.querySelectorAll(".modulo");

let inicio = 0;
let tamanhoJanela = window.innerWidth <= 1120 ? 1 : 4;

function atualizarTamanhoJanela() {
  tamanhoJanela = window.innerWidth <= 1120 ? 1 : 4;

  // Se o índice inicial for inválido para a nova janela, ajusta
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

  // Atualiza visibilidade das setas
  if (inicio === 0) {
    setaVoltar.classList.add("opacidade");
  } else {
    setaVoltar.classList.remove("opacidade");
  }

  if (inicio + tamanhoJanela >= modulos.length) {
    setaAvancar.classList.add("opacidade");
  } else {
    setaAvancar.classList.remove("opacidade");
  }
}

// Eventos de clique nas setas
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

// Atualiza tamanho da janela e módulos ao redimensionar
window.addEventListener('resize', () => {
  const oldTamanho = tamanhoJanela;
  atualizarTamanhoJanela();

  // Só atualiza se mudou o tamanho da janela (1 ou 4)
  if (oldTamanho !== tamanhoJanela) {
    atualizarModulos();
  }
});

// Inicialização
atualizarTamanhoJanela();
atualizarModulos();
