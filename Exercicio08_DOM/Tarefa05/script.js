  function calcular() {
    const texto = document.getElementById("frase").value;
    const somenteLetras = texto.match(/[a-zA-ZÀ-ÿ]/g);
    const total = somenteLetras ? somenteLetras.length : 0;

    const resultado = `"${texto}" Contém ${total} letra${total !== 1 ? 's' : ''}.`;
    document.getElementById("resultado").textContent = resultado;
  }