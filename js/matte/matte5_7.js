//riktig funksjon
//let riktig = document.getElementById("alt1")

let poeng = [];
sum = 0;

let verdier = [];

for (let i = 0; i <= 10; i++) {
  verdier.push(i);
}

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

  if (feilsvar < randomTall1 * randomTall2) {
    riktig = alt1;
    feil = alt2;
    alt1.innerHTML = randomTall1 * randomTall2;
    alt2.innerHTML = randomTall1 * feilsvar;
  } else {
    riktig = alt2;
    feil = alt1;
    alt2.innerHTML = randomTall1 * randomTall2;
    alt1.innerHTML = randomTall1 * feilsvar;
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

feil.onclick = () => {
  feil.classList.add('feil');

  setTimeout(() => {
    feil.classList.remove('feil');
  }, 500);
};

// When the user clicks on <span> (x), close the modal
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
