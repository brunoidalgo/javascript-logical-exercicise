alert("Bem Vindo ao jogo do número secreto !")

let numeroSecreto = 10;
let chute;
let tentativas = 1

// Enquanto o chute não for igual repita o bloco
while (chute != numeroSecreto) {
  break;
  chute = prompt("Escolha um número entre 1 e 10: ");

  if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto} e teve ${tentativas} tentativas`);
  } 
  else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que: ${chute}`);
    } 
    else {
      alert(`O número secreto é maior que: ${chute}`);
    }
    tentativas ++
  }
}
