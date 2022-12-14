//Definerer quotes som skal brukes
let bokstav_array = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'æ',
  'ø',
  'å',
];

let bokstavRandom;

let genererSitat = () => {
  let randomTall = Math.floor(Math.random() * bokstav_array.length);
  bokstavRandom = bokstav_array[randomTall];
  bokstav_array.splice(randomTall, 1);
};

let sitat_div = document.getElementById('sitatet');

let fyllBokstav = () => {
  genererSitat();
  sitat_div.innerText += bokstavRandom;
};
let modalFerdig = () => {
  modal.style.display = 'block';
  modalResultat.innerText = `Bra jobba! Du skrev inn alle bokstavene i alfabetet på  ${
    60 - tidsgrense
  } sekunder ; )`;
};

let tomForTidModal = () => {
  modal.style.display = 'block';
  modalResultat.innerText = `Tiden er ute, du klarte ${poeng} bokstaver på 60 sekunder!`;
};

//Bruker en boolean til å passe på at startTimer kjører kun en gang, og ikke starter på nytt for hvert input
let started = false;
//Definerer tidsgrense
let tidsgrense = 60;
let nedtelling;
//Starte nedtelling
let startTimer = () => {
  if (!started) {
    nedtelling = setInterval(() => {
      tidsgrense--;
      if (tidsgrense === 0) {
        tomForTidModal();
        clearInterval(nedtelling);
      }

      document.getElementById('timer').textContent = tidsgrense;
    }, 1000);
  }
  //Endrer boolean fra false til true, dermed kjører funksjonen kun en gang
  started = true;
};

//Lager en variabel for textarea/inputfeltet
//Variabler for poeng
let poeng = 0;
let poengTekst = document.getElementById('poengTekst');
poengTekst.innerText = poeng;

let bokstav = document.getElementById('textArea');

let sjekkSvar = () => {
  //Sjekke om input er riktig, i så fall hente ut ny bokstav fra array
  if (bokstav_array.length === 0) {
    //Stopper nedtellingen, forhindrer at tidsgrense når 0
    //og dermed kjører tomForTidModal() funksjonen når den ikke skal kjøres
    clearInterval(nedtelling);
    poeng++;
    modalFerdig();
  } else if (bokstav.value == bokstavRandom) {
    bokstav.classList.remove('feil');
    bokstav.classList.add('riktig');
    poeng++;
    document.getElementById('poengTekst').innerText = poeng;
    nyBokstav();
  } else {
    bokstav.classList.add('feil');
    bokstav.classList.remove('riktig');
  }
};

//Henter nytt sitat til brukeren
let nyBokstav = () => {
  textArea.value = null;
  sitat_div.innerText = '';
  fyllBokstav();
};

let fjernVelkomstModal = () => {
  velkommenModal.style.display = 'none';
  textArea.focus();
  sessionStorage.setItem('viseVelkomstModal1_2', 'false');
};

if (sessionStorage.getItem('viseVelkomstModal1_2') == 'false') {
  velkommenModal.style.display = 'none';
  textArea.focus();
}
