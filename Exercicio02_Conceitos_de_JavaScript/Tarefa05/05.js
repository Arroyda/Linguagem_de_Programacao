function encontrarMenorEMaior(vetor) {
  let menor = Math.min(...vetor);
  let maior = Math.max(...vetor);
  return { menor, maior };
}

// Exemplo de uso:
let numeros = [1, 3, 7, -2, 5]; // Defina o vetor de números inteiros
console.log(encontrarMenorEMaior(numeros)); // Exemplo de saída: { menor: -2, maior: 7 }
