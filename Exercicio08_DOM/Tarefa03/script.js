let tempoRestante = 60; // 60 segundos
    let intervalo;

    function formatarTempo(segundos) {
      const min = Math.floor(segundos / 60);
      const seg = segundos % 60;
      return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
    }

    function atualizarDisplay() {
      document.getElementById('display').textContent = formatarTempo(tempoRestante);
    }

    function iniciarCronometro() {
      intervalo = setInterval(() => {
        if (tempoRestante > 0) {
          tempoRestante--;
          atualizarDisplay();
        } else {
          clearInterval(intervalo);
          document.getElementById('fim').textContent = "⏰ Tempo esgotado!";
        }
      }, 1000);
    }

    function addSegundo() {
      if (tempoRestante > 0) {
        tempoRestante+= 1;
        atualizarDisplay();
        document.getElementById('fim').textContent = ""; // limpa mensagem de tempo esgotado se estiver lá
      }
    }

    // Inicia o cronômetro ao carregar a página
    atualizarDisplay();
    iniciarCronometro();