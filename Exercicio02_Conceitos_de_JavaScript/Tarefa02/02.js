function formatarDinheiro(valor) {
  return 'R$' + valor.toFixed(2).replace('.', ',');
}

// Exemplo de uso:
let valor = 0.30000000000000004; // Defina o valor que deseja formatar
console.log(formatarDinheiro(valor)); // Saída: R$0,30
