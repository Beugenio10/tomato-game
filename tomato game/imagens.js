// Elementos do jogo + sons ( mudar essas merdas de sons)

let estrada
let tomate
let tomateBadAss
let carroAmarelo
let carroVerde
let carroPreto
let ketchup
let tomatePng

let trilha
let colidiuSom
let pontos


function preload(){
  estrada = loadImage("imagens/estrada.png")
  carroAmarelo = loadImage("imagens/carroAmarelo.png")
  carroPreto = loadImage("imagens/carroPreto.png")
  carroVerde = loadImage("imagens/carroVerde.png")
  ketchup = loadImage("imagens/ketchup.jpg")
  tomate = loadImage("imagens/images-removebg-preview.png")
  tomateBadAss = loadImage("imagens/tomateBadAss.png")
  imagemCarros = [carroPreto, carroVerde, carroAmarelo, carroPreto, carroVerde, carroAmarelo]
  
  trilha = loadSound("Sons/trilha.mp3")
  pontos = loadSound("Sons/pontos.wav")
  colidiuSom = loadSound("Sons/colidiu.mp3")
  
}