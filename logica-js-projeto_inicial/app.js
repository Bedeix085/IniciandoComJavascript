alert("Boas vindas ao jogo do número secreto!");

var numeroSecreto = 5;

var chute = prompt("Escolha um número entre 1 e 10!");

if (numeroSecreto == chute){
    console.log("Você ganhou o jogo!")
} else {
    console.log("Número errado")
}