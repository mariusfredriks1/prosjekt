//Definerer tidsgrense
let tidsgrense = 60;
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
let input = document.getElementById('inputFelt');
//Lager variabel som tilfeldig velger en quote
let tilfeldigSitat =
  sitat_array[Math.floor(Math.random() * sitat_array.length)];

//Funksjon som fyller inn quoten
function fyllSitat() {
  document.getElementById('sitat').innerText = `${tilfeldigSitat}`;
  inputFelt.value = null;
}

//Kjører funksjonen fyllSitat
fyllSitat();

let svar = document.getElementById('inputFelt').value;
let feil = 0;

function sjekkSvar() {
  if (svar !== tilfeldigSitat) {
    feil++;
    //Farge bokstaver som er skrevet feil røde
  } else if (d) {
  } else {
    //Farge bokstaver som er riktige grønne
  }
}
