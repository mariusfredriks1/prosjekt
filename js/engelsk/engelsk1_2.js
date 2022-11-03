const fargeArray = [
  'Blue',
  'Red',
  'Green',
  'Yellow',
  'Purple',
  'Rosa',
  'Orange',
  'Brown',
  'White',
  'Black',
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
];

let randomindex = Math.floor(Math.random() * hexArray.length)

//hente samme index i farge som i hex
let tilfeldigFarge = hexArray[randomindex];
let randomtekst = fargeArray[randomindex];

let feilRandom = Math.floor(Math.random() * hexArray.length - 1)
let feilfarge = fargeArray[feilRandom];

let feilRandom2 = Math.floor(Math.random() * hexArray.length)
let feilfarge2 = fargeArray[feilRandom2];


// reset knapp
function velgTilfeldigFarge() {
  location.reload()
}

function bakgrunnOnload() {
  colorBoard.style.backgroundColor = tilfeldigFarge;
} 



function knappeinnhold() {
let alt1 = document.getElementById("knapp1")
let alt2 = document.getElementById("knapp2")
let alt3 = document.getElementById("knapp3")

  if (Math.random() < 0.7) {
  riktig = alt1
  alt1.innerHTML = randomtekst;
  alt2.innerHTML = feilfarge2;
  alt3.innerHTML = feilfarge;

  } else {
  riktig = alt3
  alt2.innerHTML = feilfarge2;
  alt1.innerHTML = feilfarge;
  alt3.innerHTML = randomtekst;
  
 }
}

knappeinnhold()


