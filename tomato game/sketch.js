


function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(estrada);
  mostraTomate()
  mostraCarros()
  movimentaCarro ()
  movimentaTomate()
  loopcarros()
  verificaColisão()
  incluiPontos()
  marcarPontos()
}

