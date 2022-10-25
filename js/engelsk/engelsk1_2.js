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

function bakgrunnOnload() {
  colorBoard.style.text = red;
}

function velgTilfeldigFarge() {
<<<<<<< HEAD
    fargeDiv.style.backgroundColor = tilfeldigFarge;
}
=======
  colorBoard.style.backgroundColor = tilfeldigFarge;
}
//indexOf?
>>>>>>> 24e3e9cce305b868dde9e8f04835ee5b84a1f3ea
