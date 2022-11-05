const fargeArray = [
  'Blue',
  'Red',
  'Green',
  'Yellow',
  'Purple',
  'Pink',
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

let randomindex = Math.floor(Math.random() * hexArray.length);

//hente samme index i farge som i hex
let tilfeldigFarge = hexArray[randomindex];
let randomtekst = fargeArray[randomindex];
let feilfarge;
let feilfarge2;

if (randomindex < 3) {
  feilfarge = fargeArray[randomindex + 1];
  feilfarge2 = fargeArray[randomindex + 2];
} else if (randomindex > 7) {
  feilfarge = fargeArray[randomindex - 1];
  feilfarge2 = fargeArray[randomindex - 2];
} else {
  feilfarge = fargeArray[randomindex + 1];
  feilfarge2 = fargeArray[randomindex + 2];
}

// reset knapp
let velgTilfeldigFarge = () => {
  location.reload();
};

let bakgrunnOnload = () => {
  colorBoard.style.backgroundColor = tilfeldigFarge;
};

let knappeinnhold = () => {
  let alt1 = document.getElementById('knapp1');
  let alt2 = document.getElementById('knapp2');
  let alt3 = document.getElementById('knapp3');

  if (Math.random() < 0.33) {
    riktig = alt1;
    feil1 = alt2;
    feil2 = alt3;
    alt1.innerHTML = randomtekst;
    alt2.innerHTML = feilfarge2;
    alt3.innerHTML = feilfarge;
  } else if (Math.random() < 0.66) {
    riktig = alt2;
    feil1 = alt1;
    feil2 = alt3;
    alt1.innerHTML = feilfarge2;
    alt2.innerHTML = randomtekst;
    alt3.innerHTML = feilfarge;
  } else {
    riktig = alt3;
    feil1 = alt1;
    feil2 = alt2;
    alt2.innerHTML = feilfarge2;
    alt1.innerHTML = feilfarge;
    alt3.innerHTML = randomtekst;
  }
};

knappeinnhold();

// modal og funksjonalitet
var modal = document.getElementById('modal');
var span = document.getElementsByClassName('close')[0];

// når man klikker på riktig får man opp modalen
riktig.onclick = () => {
  modal.style.display = 'block';
};

feil1.onclick = () => {
  feil1.classList.add('feil');

  setTimeout(() => {
    feil1.classList.remove('feil');
  }, 500);
};

feil2.onclick = () => {
  feil2.classList.add('feil');

  setTimeout(() => {
    feil2.classList.remove('feil');
  }, 500);
};

span.onclick = () => {
  modal.style.display = 'none';
  location.reload();
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
    location.reload();
  }
};
