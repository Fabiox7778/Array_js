//definindo as variaveis
let jogos = ["The Last of Us", "Red Dead Redemption 2", "Elden Ring"]
let favGame = "The Last of Us"
let jogo = "Elden ring"

//definindo quantos jogos tem
let quant = jogos.length

//definindo o ranking
for (let i = 0; i < quant; i++) {
    console.log(`O jogo ${jogos[i]} está em ${i + 1} posição`)
}

console.log("--------------------------")

//decidindo se é o favorito
if (jogo === favGame) {
    console.log(`Sim, ${jogo} é o favorito👍`)
} else {
    console.log(`Não, ${jogo} não é o favorito👎`)
}

console.log("--------------------------")