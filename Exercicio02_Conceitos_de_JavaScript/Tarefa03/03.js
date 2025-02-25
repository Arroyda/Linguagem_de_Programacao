// Função para calcular o montante com Juros Simples
function calcularJurosSimples(capital, taxa, tempo) {
  return capital * (1 + taxa * tempo);
}

// Função para calcular o montante com Juros Compostos
function calcularJurosCompostos(capital, taxa, tempo) {
  return capital * Math.pow(1 + taxa, tempo);
}

// Exemplo de uso:
let capitalInicial = 1000;  // Defina o valor do capital inicial
let taxaJuros = 0.05;       // Defina a taxa de juros (por exemplo, 5% = 0.05)
let tempo = 2;              // Defina o tempo de aplicação (em anos)

console.log('Montante com Juros Simples: R$', calcularJurosSimples(capitalInicial, taxaJuros, tempo).toFixed(2)); // Saída com juros simples
console.log('Montante com Juros Compostos: R$', calcularJurosCompostos(capitalInicial, taxaJuros, tempo).toFixed(2)); // Saída com juros compostos
