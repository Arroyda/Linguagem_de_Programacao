// script.js
function mostrarAtividade(atividade) {
    // Esconde todas as atividades
    const atividades = document.querySelectorAll('.atividade');
    atividades.forEach(atividade => {
      atividade.style.display = 'none';
    });
  
    // Mostra a atividade escolhida
    const atividadeSelecionada = document.getElementById(atividade);
    if (atividadeSelecionada) {
      atividadeSelecionada.style.display = 'block';
    }
  }
  