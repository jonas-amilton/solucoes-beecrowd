let [horaInicial, horaFinal] = lines
  .shift()
  .split(" ")
  .map((n) => Number(n));

if (horaFinal <= horaInicial) {
  horaFinal += 24;
}

console.log(`O JOGO DUROU ${horaFinal - horaInicial} HORA(S)`);