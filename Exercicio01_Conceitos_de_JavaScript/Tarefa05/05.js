// Loop para imprimir os números de 1 a 10
let resultado = "";

for (let i = 1; i <= 10; i++) {
  // Adiciona o número e, se não for o último, adiciona um traço
  resultado += i;
  if (i < 10) {
    resultado += " - ";
  }
}

// Exibindo o resultado no console
console.log(resultado);
