function buscarClima() {
    const cidade = document.getElementById("cidade").value.trim();
    const resultado = document.getElementById("resultado");

    if (cidade === "") {
      resultado.textContent = "Por favor, digite o nome da cidade.";
      return;
    }

    fetch(`https://wttr.in/${cidade}?format=3`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Erro ao buscar clima.");
        }
        return response.text();
      })
      .then(data => {
        resultado.textContent = data;
      })
      .catch(error => {
        resultado.textContent = "Não foi possível obter o clima.";
      });
  }