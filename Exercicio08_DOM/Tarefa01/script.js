const cores = ['red', 'blue', 'green', 'yellow', 'purple', 'white'];

    function trocarCor() {
      const indiceAleatorio = Math.floor(Math.random() * cores.length);
      const novaCor = cores[indiceAleatorio];
      document.getElementById('divCor').style.backgroundColor = novaCor;
    }