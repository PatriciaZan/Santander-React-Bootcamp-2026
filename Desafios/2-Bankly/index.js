//javascript
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades:
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

// Lê a linha de entrada do usuário
const entrada = gets();

// TODO: Separe o nome do usuário e o saldo em centavos a partir da entrada
// Dica: Use split para separar a string e parseInt para converter o saldo para número
const partes = entrada.split(",");
const nome = partes[0].trim();
const saldoCentavos = parseInt(partes[1], 10);

const saldoReal = saldoCentavos / 100;
// Exemplo de saída esperada (após implementar o TODO):
// print(`Bem-vindo, Nome! Seu saldo é R$0,00`);
print(
  `Bem-vindo, ${nome}! Seu saldo é R$${saldoReal.toFixed(2).replace(".", ",")}`,
);
