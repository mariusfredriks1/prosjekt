//Definerer quotes som skal brukes
let sitat_array = [
  'Gresset er grønnere på andre siden av gjerdet',
  'Å være sliten og nedfor og er ikke et tegn på svakhet, mest sannsynlig har du vært sterk for lenge',
  'Jeg skulle ikke spise den, jeg skulle bare smake på den',
  'Nøtter er ikke noe for en hel rev',
  'Man skal ikke plage andre, man skal være grei og snill, og for øvrig kan man gjøre hva man vil',
  'Her kommer klatremus lillemann, en mus som synge og spille kan',
  'Det har jeg aldri gjort før, så det klarer jeg helt sikkert',
  'Det var hyggelig at du kom, men enda hyggeligere at du går',
  'Nordmenn tror på Gud, Allah, Altet og Ingenting. Nordmenn liker Grieg og Kygo, Hellbillies og Kari Bremnes',
  'Det er typisk norsk å være god',
  'Enten så går det fint, eller så går det over',
  'Det er bedre å være stille og bli tenkt om som en tulling, enn å snakke og fjerne all tvil.',
  'Kunnskap er å vite at en tomat er en frukt. Visdom er å ikke bruke den i en fruktsalat.',
  'Noen ganger er alt man tenker noe som ikke kan hjelpe i det hele tatt.',
  'Utsett ikke til i morgen det du kan gjøre i overmorgen.',
];
//Lager variabel som tilfeldig velger en quote

let sitatRandom = sitat_array[Math.floor(Math.random() * sitat_array.length)];
//Prøver å  splitte sitatet samt legge resultattet inn i et span, slik at jeg kan sjekke
// hver bokstav induviduelt opp mot arrayen som inneholder bokstavene for å passe på
//at det skrives inn riktig. Ved riktig bokstav skal boksataven bli grønn, ved feil
//skal bokstaven(e) som er skrevet feil bli røde, samt understreket.
sitatRandom.split('').forEach((bokstav) => {
  let bokstavSpan = document.createElement('span');
  bokstavSpan.innerText(bokstav);
});

//Funksjon som fyller inn sitatet
function fyllSitat() {
  document.getElementById('sitat').innerText = `${sitatRandom}`;
  console.log(sitatRandom);
}
//Kjører funksjonen fyllSitat

function startTimer() {
  //starte nedtelling
  //Definerer tidsgrense
  let tidsgrense = 60;
  let nedtelling = setInterval(function () {
    tidsgrense--;
    document.getElementById('timer').textContent = tidsgrense;

    if (tidsgrense === 0) clearInterval(nedtelling);
    timer = window.setTimeout(() => {
      alert(`60 sekunder har gått, poengsummen din ble ${poeng}`);
      window.location.reload();
    }, 60000);
  }, 1000);
}

function startOnce() {
  if (!saidHello) sayHello();
}

let input = document.getElementById('inputFelt');
let poeng = 0;
let poengTekst = document.getElementById('poeng');
poengTekst.innerText = poeng;

function sjekkSvar() {
  //Sjekke om input er riktig
  for (let i = 0; i <= Array.length; i++) {
    if (inputFelt === sitatRandom) {
      poeng++;
      nyttSitat();
    } else if (inputFelt == sitatRandom) {
      sitatRandom.classList.add('riktig');
    } else {
      sitatRandom.classList.add('feil');
    }
  }
}

//hvordan generere nytt tilfeldig sitat?
function nyttSitat() {
  inputFelt.value = null;
  document.getElementById('sitat').innerText = `${tilfeldigSitat}`;
}
