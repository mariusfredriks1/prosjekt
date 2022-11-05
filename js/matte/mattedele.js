//riktig funksjon
//let riktig = document.getElementById("alt1")

let poeng = [];
sum = 0;

/*  // intern update
  let update = () => {
    $( ".mattestykket").load(window.location.href + " .mattestykket")
    $( ".mattestykketKnapper").load(window.location.href + " .mattestykketKnapper")
  } */

let verdier = [10, 8, 6, 2];

let randomTall1 = verdier[Math.floor(Math.random() * verdier.length)];
let randomTall2 = verdier[Math.floor(Math.random() * verdier.length)];
let feilsvar = randomTall1 + 1;

//samme verdi på svaralternativer

let alternativ1 = document.getElementById('tall1');
let alternativ2 = document.getElementById('tall2');

alternativ1.innerHTML = randomTall1;
alternativ2.innerHTML = randomTall2;

let tekstgange = () => {
  let alt1 = document.getElementById('alt1');
  let alt2 = document.getElementById('alt2');

  if (verdier % 2 === 0) {
    riktig = alt1;
    alt1.innerHTML = randomTall1 / randomTall2;
    alt2.innerHTML = randomTall2;
  } else {
    riktig = alt2;
    alt2.innerHTML = randomTall1 / randomTall2;
    alt1.innerHTML = randomTall2;
  }
};

tekstgange();

// modal
var modal = document.getElementById('modal');
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
riktig.onclick = () => {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = 'none';
  location.reload();
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
