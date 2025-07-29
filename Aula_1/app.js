alert("Boas vindas ao jogo do número secreto!");

var numeroSecreto = 5;

var chute = prompt("Escolha um número entre 1 e 10!");

//Se o chute for igual ao numero secreto
if (numeroSecreto == chute){
    alert("Você ganhou o jogo!")
} else {
    alert("Número errado")
}