// Função para soma
function somar(a, b) {
    return a + b;
  }
  
  // Função para subtração
  function subtrair(a, b) {
    return a - b;
  }
  
  // Função para multiplicação
  function multiplicar(a, b) {
    return a * b;
  }
  
  // Função para divisão
  function dividir(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Divisão por zero não permitida";
    }
  }
  
  // Declarando as variáveis numéricas
  let num1 = 10;
  let num2 = 5;
  
  // Chamando as funções e imprimindo os resultados no console
  console.log("Soma: " + somar(num1, num2));
  console.log("Subtração: " + subtrair(num1, num2));
  console.log("Multiplicação: " + multiplicar(num1, num2));
  console.log("Divisão: " + dividir(num1, num2));
  