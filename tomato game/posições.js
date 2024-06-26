// posição tomate

let xTomate = 300
let yTomate = 366
let wTomate = 30
let hTomate = 30


// lista carros

let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 150, 95, 210, 270, 318]
let wCarros = [50, 50, 50, 50, 50, 50]
let hCarros = [40, 40, 40, 40, 40, 40]


function mostraTomate(){
  image(tomate, xTomate, yTomate, wTomate, hTomate)
}


function mostraCarros(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
   image(imagemCarros[i], xCarros[i], yCarros[i], wCarros[i], hCarros[i])
}
}

