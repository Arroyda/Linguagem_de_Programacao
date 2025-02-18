// Função que retorna o dobro do número ou exibe uma mensagem de erro
function mostrarDobro(numero) {
  // Verificando se o número é positivo
  if (numero > 0) {
    return numero * 2; // Retorna o dobro do número
  } else {
    return "Só é aceito números positivos maiores que zero"; // Mensagem de erro
  }
}

// Testando a função com diferentes valores
console.log(mostrarDobro(5)); 
console.log(mostrarDobro(-3));
console.log(mostrarDobro(0)); 
