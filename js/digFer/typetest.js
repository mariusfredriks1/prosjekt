//Lager variabel som tilfeldig velger en quote
let sitatRandom;
let id_Arr_Splitted = 0;

function genererSitat() {
  let randomTall = Math.floor(Math.random() * sitat_array.length);
  sitatRandom = sitat_array[randomTall];
  sitat_array.splice(randomTall, 1);
  console.log(sitat_array);

  let sitat_splitted = sitatRandom.split('');
  let id_Arr = [];

  // Zip higher order function
  const zip = (sitat_splitted, id_Arr) =>
    sitat_splitted.map((x, i) => [x, id_Arr[i]]);

  //For løkke for å gi id_Arr id "elementer"
  for (let i = 0; i < sitat_splitted.length; i++) {
    //Genererer id'er basert på index
    const id = i;
    id_Arr.push(id);
  }
  //Forklaring kommer
  id_Arr_Splitted = zip(sitat_splitted, id_Arr);

    console.log(sitat_splitted);
  console.log(id_Arr)
  console.log(id_Arr_Splitted);
}

const sitat_div = document.getElementById('sitatet');
//Funksjon som fyller inn sitatet
function fyllSitat() {
  genererSitat();

  for (let i = 0; i < id_Arr_Splitted.length; i++) {
    let new_span = document.createElement('span');
    new_span.setAttribute('id', id_Arr_Splitted[i][1]);
    new_span.innerText = `${id_Arr_Splitted[i][0]}`;
    sitat_div.appendChild(new_span);
  }
}

//Bruker en boolean til å passe på at startTimer kjører kun en gang, og ikke starter på nytt for hvert input
let started = false;
//Starte nedtelling
function startTimer() {
  if (!started) {
    //Definerer tidsgrense
    timer = window.setTimeout(() => {}, 60000);

    let tidsgrense = 60;
    let nedtelling = setInterval(function () {
      tidsgrense--;
      document.getElementById('timer').textContent = tidsgrense;
      if (tidsgrense === 0) {
        visModal();

        clearInterval(nedtelling);
      }
    }, 1000);
  }
  started = true;
}

//Lager en variabel for textarea/inputfeltet
let input = document.getElementById('textArea');

//Variabler for poeng
let poeng = 0;
let poengTekst = document.getElementById('poengTekst');
poengTekst.innerText = poeng;

let feil = 0;
//?????
let ulikeFeil = [];

function sjekkSvar() {
  //Sjekke om input er  100% riktig,
  //i så fall hente ut nytt sitat fra array
  if (input.value === sitatRandom) {
    poeng++;
    document.getElementById('poengTekst').innerText = poeng;
    nyttSitat();
  }
  //Splitter strengen fra input feltet
  const input_splitted = input.value.split('');
  //Hvis brukeren skriver inn feil, og deretter for mye tekst,
  //gir denne løkken brukeren et nytt sitat
  for (let i = 0; i < input_splitted.length + 1; i++) {
    if (i >= id_Arr_Splitted.length) {
      nyttSitat();
    }

    //Sjekke bokstav for bokstav om brukerinput er riktig.
    const bokstav = document.getElementById(id_Arr_Splitted[i][1]);
    //?????
    ulikeFeil.push(bokstav);

    //Skal fjerne farger hvis man skriver feil
    if (input_splitted[i] == null) {
      bokstav.classList.remove('riktig');
      bokstav.classList.remove('feil');
    } else if (input_splitted[i] === id_Arr_Splitted[i][0]) {
      bokstav.classList.add('riktig');
      bokstav.classList.remove('feil');
    } else {
      bokstav.classList.add('feil');
      bokstav.classList.remove('riktig');
    }
  }

  //?????
  for (let bokstav of ulikeFeil) {
    if (bokstav.classList.contains('feil')) {
      feil++;
    }
  }
}
//??????
console.log(ulikeFeil);

//Henter nytt sitat til brukeren
function nyttSitat() {
  textArea.value = null;
  sitat_div.innerText = '';
  fyllSitat();
}
