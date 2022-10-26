const fargeArray = [
  'blå',
  'rød',
  'grønn',
  'gul',
  'lilla',
  'rosa',
  'oransje',
  'brun',
  'hvit',
  'sort',
  'grå',
];

const hexArray = [
  '#6495ED',
  '#FF0000',
  '#008000',
  '#FFFF00',
  '#800080',
  '#FF00FF',
  '#FF5733',
  '#8B4513',
  '#FFFFFF',
  '#000000',
  '##808080',
];

let tilfeldigFarge = hexArray[Math.floor(Math.random() * hexArray.length)];
let randomtekst = fargeArray[Math.floor(Math.random() * hexArray.length)];
// tilfeldig bakgrunn

function velgTilfeldigFarge() {
  location.reload()
}

// knappeinnhold
function bakgrunnOnload() {
  colorBoard.style.backgroundColor = tilfeldigFarge;
} //hente samme index i farge som i hex

// tilfeldig knappeinnhold
function tekst() {
  document.getElementById("knapp2").innerText =  randomtekst;
  
}


