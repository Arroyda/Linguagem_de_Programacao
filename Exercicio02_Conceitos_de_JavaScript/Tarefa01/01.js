function classificarTriangulo(lado1, lado2, lado3) {
  if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    return 'Os lados devem ser maiores que zero'; // Valida para números negativos ou zero
  }
  
  if (lado1 === lado2 && lado2 === lado3) {
    return 'Equilátero'; // Todos os lados são iguais
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    return 'Isósceles'; // Dois lados são iguais
  } else {
    return 'Escaleno'; // Todos os lados são diferentes
  }
}

// Exemplo de uso:
let lado1 = 5;
let lado2 = 5;
let lado3 = 8;

console.log("A resultado com os lados dos Triangulo é: " + classificarTriangulo(lado1, lado2, lado3)); // Resultado Isósceles
