//javascript
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades:
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

// Lê a linha de entrada do usuário
//const entrada = gets();
const entrada = "Lucas 12345";

// TODO: Separe o nome do usuário e o saldo em centavos a partir da entrada
// Dica: Use split para separar a string e parseInt para converter o saldo para número
const partes = entrada.split(" ");
console.log(partes);

const nome = partes[0].trim();
const saldoCentavos = parseInt(partes[1], 10);

const saldoReal = saldoCentavos / 100;
// Exemplo de saída esperada (após implementar o TODO):
// print(`Bem-vindo, Nome! Seu saldo é R$0,00`);
console.log(
  `Bem-vindo, ${nome}! Seu saldo é R$${saldoReal.toFixed(2).replace(".", ",")}`,
);
