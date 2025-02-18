// Função para gerar o email
function gerarEmail(nomeCompleto) {
    // Dividindo o nome completo em um array
    let nomes = nomeCompleto.split(" ");
  
    // Pegando o primeiro e o último nome
    let primeiroNome = nomes[0];
    let ultimoNome = nomes[nomes.length - 1];
  
    // Criando o email no formato solicitado
    let email = `${primeiroNome}.${ultimoNome}@facens.br`;
  
    // Exibindo o email
    console.log(email);
  }
  
  // Recebendo o nome completo (exemplo)
  let nome = "Vitor Assunção Arruda";
  
  // Chamando a função
  gerarEmail(nome);
  