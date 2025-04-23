// script.js

// Função para incrementar o contador
function incrementarContador() {
  // Obtém o elemento com id "contador"
  const contadorElement = document.getElementById('contador');
  
  // Obtém o valor atual do contador, converte para número e soma 1
  let contador = parseInt(contadorElement.textContent);
  contador += 1;  // Incrementa 1
  
  // Atualiza o conteúdo do contador na tela
  contadorElement.textContent = contador;
}

// Função para resetar o contador
function resetarContador() {
  // Obtém o elemento com id "contador"
  const contadorElement = document.getElementById('contador');
  
  // Obtém o valor atual do contador, converte para número e soma 1
  let contador = parseInt(contadorElement.textContent);
  contador = 0;  // Incrementa 1
  
  // Atualiza o conteúdo do contador na tela
  contadorElement.textContent = contador;
}
