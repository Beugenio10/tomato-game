// velocidade dos carros

let veloCarros = [4, 8, 6, 3, 5, 7]

//colisao falsa

let colisão = false;

let meusPontos = 0 


// movimentar carros EAST
function movimentaCarro(){
 for (let v = 0; v < imagemCarros.length; v = v + 1){
  xCarros[v] -= veloCarros[v];
 }
}

function loopcarros(){
 for (let l = 0; l < imagemCarros.length; l = l + 1){
  if (xCarros[l] < -50){
    xCarros[l] = 600
  }
 }  
}

  
function movimentaTomate(){
  if (keyIsDown (UP_ARROW)){
    yTomate -=3;
  }
  if (keyIsDown (DOWN_ARROW)){
    if (podeAndar())
    yTomate +=3;
  }
  if (keyIsDown (LEFT_ARROW)){
    xTomate -=3;
  }
  if (keyIsDown (RIGHT_ARROW)){
    xTomate +=3;
  }
}

function podeAndar(){
  return yTomate < 366;
}


function verificaColisão(){
  ////collideRectRect(x, y, width, height, x2, y2, width2, height2 
  for(let i = 0; i < imagemCarros.length; i++){
    colisão = collideRectRect(xCarros[i], yCarros[i], wCarros[i], hCarros[i], xTomate, yTomate, wTomate, hTomate)
    if (colisão){
      PosiçãoInicialTomate()
      image (ketchup, 60, 80)
       // aumentar o tempo da imagem
     if (meusPontos > 0){
        meusPontos -=1}
      colidiuSom.play()
    }
  }
}

function PosiçãoInicialTomate(){
  yTomate = 366 
}

function incluiPontos(){
  textAlign (CENTER)
  fill (255, 69, 0)
  textSize (20)
  text(meusPontos, width / 5, 25);
}

function marcarPontos(){
  if (yTomate < 15){
    meusPontos += 1;
    PosiçãoInicialTomate()
    pontos.play()
  }
}
