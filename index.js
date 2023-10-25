/*Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal */

const saldoVitorias = null;

const vitorias = Number(prompt("Quantas vitórias teve seu herói?"));
const derrotas = Number(prompt("Quantas derrotas teve seu herói?"));

// Chama a função nivelHeroi() para obter o nível do herói
const nivel = getNivel(vitorias, derrotas);

// Exibe o nível do herói
console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);

function getNivel(vitorias, derrotas) {
  // Calcula o saldo de vitórias
  const saldoVitorias = vitorias - derrotas;

  // Retorna o nível de acordo com o saldo
  return (saldoVitorias < 10) ? "Ferro"
    : (saldoVitorias >= 11 && saldoVitorias <= 20) ? "Bronze"
    : (saldoVitorias >= 21 && saldoVitorias <= 50) ? "Prata"
    : (saldoVitorias >= 51 && saldoVitorias <= 80) ? "Ouro"
    : (saldoVitorias >= 81 && saldoVitorias <= 90) ? "Diamante"
    : (saldoVitorias >= 91 && saldoVitorias <= 100) ? "Lendário"
    : "Imortal";
}
