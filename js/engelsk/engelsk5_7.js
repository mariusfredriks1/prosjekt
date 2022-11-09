let sitat_array = [
  'the car is blue',
  'the train was late',
  'winter is coming',
  'she has brown hair',
  'the cat is white',
  'she opened the door',
  'i bought a new pc',
  'we played football',
  'they ran in the forest',
  'i watched a movie',
  'do you like apples',
  'i love you',
  'see you tomorrow',
  'learning is fun',
  'lea is super cute',
  'petter is really strong',
  'brede is super handsome'
];
//Globale variabler
let sitatRandom;
let id_Arr_Splitted;

//Globale verdier for resultater
let bokstaverSkrevet = 0;
let feilTrykk = 0;
let noyaktighet = 100;
let wpm = 0;

let genererSitat = () => {
  let randomTall = Math.floor(Math.random() * sitat_array.length);
  sitatRandom = sitat_array[randomTall];
  sitat_array.splice(randomTall, 1);

  let sitat_splitted = sitatRandom.split('');
  let id_Arr = [];

  let zip = (sitat_splitted, id_Arr) =>
    sitat_splitted.map((x, i) => [x, id_Arr[i]]);

  for (let i = 0; i < sitat_splitted.length; i++) {
    let id = i;
    id_Arr.push(id);
  }

  id_Arr_Splitted = zip(sitat_splitted, id_Arr);
};

let sitat_div = document.getElementById('sitatet');

let fyllSitat = () => {
  genererSitat();

  for (let i = 0; i < id_Arr_Splitted.length; i++) {
    let new_span = document.createElement('span');
    new_span.setAttribute('id', id_Arr_Splitted[i][1]);
    new_span.innerText = `${id_Arr_Splitted[i][0]}`;
    sitat_div.appendChild(new_span);
  }
};

let started = false;

let startTimer = () => {
  if (!started) {
    let tidsgrense = 60;
    let nedtelling = setInterval(() => {
      tidsgrense--;
      document.getElementById('timer').textContent = tidsgrense;
      if (tidsgrense === 0) {
        textArea.disabled = true;
        visModal();
        clearInterval(nedtelling);
      }
    }, 1000);
  }
  started = true;
};

let input = document.getElementById('textArea');

let poeng = 0;
let poengTekst = document.getElementById('poengTekst');
poengTekst.innerText = poeng;

let sjekkSvar = () => {
  bokstaverSkrevet++;

  if (input.value === sitatRandom) {
    poeng++;
    document.getElementById('poengTekst').innerText = poeng;
    nyttSitat();
  }

  let input_splitted = input.value.split('');

  for (let i = 0; i < input_splitted.length + 1; i++) {
    if (i >= id_Arr_Splitted.length) nyttSitat();

    let bokstav = document.getElementById(id_Arr_Splitted[i][1]);

    if (input_splitted[i] == null) {
      bokstav.classList.remove('riktig');
      bokstav.classList.remove('feil');
    } else if (input_splitted[i] === id_Arr_Splitted[i][0]) {
      bokstav.classList.add('riktig');
    } else {
      bokstav.classList.add('feil');
      feilTrykk++;
    }
  }
  noyaktighet = Math.round(100 - (feilTrykk / bokstaverSkrevet) * 100);

  
  wpm = Math.round(bokstaverSkrevet / 4.7);
};

let nyttSitat = () => {
  textArea.value = null;
  sitat_div.innerText = '';
  fyllSitat();
};

let fjernVelkomstModal = () => {
  velkommenModal.style.display = 'none';
  textArea.focus();
  sessionStorage.setItem('viseVelkomstModal', 'false');
};

if (sessionStorage.getItem('viseVelkomstModal') == 'false') {
  velkommenModal.style.display = 'none';
  textArea.focus();
}
