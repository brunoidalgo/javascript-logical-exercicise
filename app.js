alert("Bem Vindo ao jogo do número secreto !")

let num_max = 100;
let num_min = 1;

let numeroSecreto = parseInt(Math.random() * num_max + 1);
let chute;
let tentativas = 1


// Enquanto o chute não for igual repita o bloco
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${num_max} `);

  if (chute == numeroSecreto) {
    break
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
let mensagem = tentativas <= 1 ? 'tentativa' : 'tentativas'
alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto} e teve ${tentativas} ${mensagem}`);
