// Função que verifica se uma string é um palíndromo
function verificarPalindromo(str) {
  // Remover espaços e converter para minúsculas para garantir que a comparação seja feita corretamente
  let strLimpa = str.replace(/\s+/g, '').toLowerCase();

  // Verificar se a string é igual à sua versão invertida
  let strInvertida = strLimpa.split('').reverse().join('');

  return strLimpa === strInvertida; // Retorna true se for um palíndromo, caso contrário, retorna false
}

// Testando a função
console.log(verificarPalindromo("arara"));   
console.log(verificarPalindromo("hello"));      
console.log(verificarPalindromo("A man a plan a canal Panama")); 
