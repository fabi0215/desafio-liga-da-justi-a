let nomes_herois = ["superman", "batman", "flash"];
console.log("Olá heróis " + nomes_herois.join(", ") + "!");

let forca = [95, 75, 60];
let agilidade = [100, 95, 60];
let coragem = [100, 100, 90];

console.log("Hoje vamos classificar suas habilidades.");

console.log("Superman possui força " + forca[0] + ", agilidade " + agilidade[0] + " e coragem " + coragem[0]);
console.log("Batman possui força " + forca[1] + ", agilidade " + agilidade[1] + " e coragem " + coragem[1]);
console.log("Flash possui força " + forca[2] + ", agilidade " + agilidade[2] + " e coragem " + coragem[2]);



// Defina os objetos com as propriedades
const superman = {
  nome: 'Superman',
  forca: 95,
  agilidade: 95,
  coragem: 100
};

const batman = {
  nome: 'Batman',
  forca: 60,
  agilidade: 60,
  coragem: 100
};

const flash = {
  nome: 'Flash',
  forca: 75,
  agilidade: 100,
  coragem: 90
};

// Função para calcular a média das habilidades
function calcularMedia(heroi) {
  return ((heroi.forca + heroi.agilidade + heroi.coragem) / 3).toFixed(2);
}

// Função para determinar o nível do herói
function determinarNivel(media) {
  if (media >= 90) {
    return "alto";
  } else if (media >= 70) {
    return "médio";
  } else {
    return "baixo";
  }
}

// Função para exibir a classificação do herói
function exibirClassificacao(heroi) {
  const media = calcularMedia(heroi);
  const nivel = determinarNivel(media);
  console.log(`${heroi.nome} sua classificação é ${nivel} com uma média de ${media}`);
}

// Exibir a classificação para cada herói
exibirClassificacao(superman);
exibirClassificacao(batman);
exibirClassificacao(flash);
