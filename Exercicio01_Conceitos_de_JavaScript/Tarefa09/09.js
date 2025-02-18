// Função que conta o número de vogais minúsculas
function contarVogais(str) {
  // Definindo as vogais
  let vogais = "aeiou";
  let contador = 0;

  // Convertendo a string para um array de caracteres e verificando se são vogais
  for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
      contador++; // Incrementa o contador se for uma vogal
    }
  }

  return contador; // Retorna o numero de Vogais
}

// Printando os Resulltados
console.log("A Palavra Hello Wolrd tem " + contarVogais("Hello Wolrd") + " vogais"); 
console.log("A Palavra JavaScript tem " + contarVogais("JavaScript") + " vogais");  
console.log("A Palavra Linguagem de Programação tem " + contarVogais("Linguagem de Programação") + " vogais");    
