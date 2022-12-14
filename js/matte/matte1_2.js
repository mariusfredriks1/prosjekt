//riktig funksjon
//let riktig = document.getElementById("alt1")

let poeng = [];
sum = 0;

//verdi til bildene som lastes inn

let verdier = [1, 2, 3, 4, 5, 6];
let randomTall1 = verdier[Math.floor(Math.random() * verdier.length)];
let randomTall2 = verdier[Math.floor(Math.random() * verdier.length)];
let feilsvar = randomTall1 * 2;

/* // bilder
let alternativ1 = document.getElementById('tall1');
let alter1 = document.getElementById('sprml1');
let alternativ2 = document.getElementById('tall2');
alternativ1.innerHTML = randomTall1;
alternativ2.innerHTML = randomTall2;
 */

let alternativ1 = document.getElementById('tall1');
let alternativ2 = document.getElementById('tall2');

alternativ1.innerHTML = randomTall1;
alternativ2.innerHTML = randomTall2;

/* let random2 = () => {
  let alter1 = document.getElementById("bildenr1");
  let alter2 = document.getElementById("bildenr2");
 
    alternativ1.innerHTML = randomTall1;
    alternativ2.innerHTML = randomTall2;

    alter1.src = "/bilder/matte/"+randomTall1+"bilde.png"
    alter2.src = "/bilder/matte/"+randomTall2+"bilde.png"

} 

random2();*/

// knapper

let tekst = () => {
  let alt1 = document.getElementById('alt1');
  let alt2 = document.getElementById('alt2');

  if (Math.random() < 0.5) {
    riktig = alt1;
    feil = alt2;
    alt1.innerHTML = randomTall1 + randomTall2;
    alt2.innerHTML = randomTall1 + feilsvar;
  } else {
    riktig = alt2;
    feil = alt1;
    alt2.innerHTML = randomTall1 + randomTall2;
    alt1.innerHTML = randomTall1 + feilsvar;
  }
};

tekst();

// modal og funksjonalitet
var modal = document.getElementById('modal');
var span = document.getElementsByClassName('close')[0];

// når man klikker på riktig får man opp modalen
riktig.onclick = () => {
  modal.style.display = 'block';
};

feil.onclick = () => {
  feil.classList.add('feil');

  setTimeout(() => {
    feil.classList.remove('feil');
  }, 500);
};

// når modalen krysses ut får man inn et nytt regnestykke
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
