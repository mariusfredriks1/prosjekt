//Lager en global variabel som under genererSitat() tilfeldig velger en quote
let sitatRandom;
//Må også være global så den oppdateres hver gang fyllSitat() kjører
let id_Arr_Splitted;

/*Funksjonen generersitat henter ut et tilfeldig sitat fra sitat_array.
 Variablen sitatRandom er en global variabel slik at
 Den henter ut ett ubrukt sitat hver gang.
 Bruker også splice her slik at sitatet forsvinner
 Ut av arrayen, og dermed ikke kommer fler ganger */
let genererSitat = () => {
  let randomTall = Math.floor(Math.random() * sitat_array.length);
  sitatRandom = sitat_array[randomTall];
  sitat_array.splice(randomTall, 1);
  console.log('sitat_array', sitat_array);

  /*Her splittes sitatet opp i induviduelle bokstaver
   ved hjelp av split. I tillegg defineres en tom array
   med navn id_Arr, som vil tas i bruk i for løkken
  noen kodelinjer lenger ned */
  let sitat_splitted = sitatRandom.split('');
  let id_Arr = [];

  /*Funksjonen zip lager en todimensjonell array som inneholder
  sitat_splitted og id_Arr.*/
  let zip = (sitat_splitted, id_Arr) =>
    sitat_splitted.map((x, i) => [x, id_Arr[i]]);

  /*Hvis man console logger her vil man få opp f.eks. 

  console log(sitat_splitted.map((x, i) => [x, id_Arr[i]])); 
  
  Det tilfeldige sitatet her var "Eplet faller ikke langt fra stammen"

            0 //Dette er en array med index 0 i den nye arrayen
            : 
            (2) ['e', undefined]      <<<----- to elementer i arrayen, 'e' og undefined 


            1 //Dette er en array med index 1 i den nye arrayen
            : 
            (2) ['p', undefined]      <<<----- to elementer i arrayen, 'p' og undefined 


            2 //Dette er en array med index 2 i den nye arrayen
            : 
            (2) ['l', undefined]      <<<----- to elementer i arrayen, 'l' og undefined 


            3 //Dette er en array med index 3 i den nye arrayen
            : 
            (2) ['e', undefined]      <<<----- to elementer i arrayen, 'e' og undefined 

  
  I den nye arrayen kan vi se at det er oprettet fire nye arrays, en 
  for hver bokstav. e sin array har index 0, og inneholder ['e', undefined] 
  Grunnen til at vi får opp undefined er fordi id_arr fortsatt er tom. */

  /*Her kommer for løkken som vil generere en innholdet til id_Arr.
  Løkken går gjennom bokstav for bokstav, lengden til det tilfeldige 
  sitatet, og gir en id basert på hvilken index bokstaven har i sitatet.
  Deretter pushes id inn i id_Arr. Hvis løkken hadde gjort dette for de 
  fire første bokstavene i sitatet vi brukte i eksempelet over, ville
  id_arr blitt seende slik ut: id_Arr[0, 1, 2, 3]. Det er disse tallene
  som vil erstatte de stedene det kom "undefined".

  */
  for (let i = 0; i < sitat_splitted.length; i++) {
    //Genererer id'er basert på index
    let id = i;
    id_Arr.push(id);
  }
  /*Hvis man kjører samme console log her vil resultatet bli:

      console log(sitat_splitted.map((x, i) => [x, id_Arr[i]])); 
  

            0 //Dette er en array med index 0 i den nye arrayen
            : 
            (2) ['e', 0]      <<<----- to elementer i arrayen, 'e' og 0 


            1 //Dette er en array med index 1 i den nye arrayen
            : 
            (2) ['p', 1]      <<<----- to elementer i arrayen, 'p' og 1 


            2 //Dette er en array med index 2 i den nye arrayen
            : 
            (2) ['l', 2]      <<<----- to elementer i arrayen, 'l' og 2 


            3 //Dette er en array med index 3 i den nye arrayen
            : 
            (2) ['e', 3]      <<<----- to elementer i arrayen, 'e' og 3 
  
  
    Som man kan se er undefined byttet ut med id'ene som ble generert
    i for løkken over. Disse id'ene blir sentrale når koden senere
    skal sammenlikne bruker-input mot sitatene.

  */

  /*Setter zip, som er det vi har jobbet siden linje 26,  lik den globale 
   variabelen vi definerte helt på starten.(id_Arr_Splitted), slik at andre
   funksjoner har tilgang til funksjonen. Dette må man gjøre ettersom zip 
   ligger lokalt inni genererSitat funksjonen  */
  id_Arr_Splitted = zip(sitat_splitted, id_Arr);

  console.log('sitat_splitted', sitat_splitted);
  console.log('id_Arr', id_Arr);
  console.log('id_Arr_Splitted', id_Arr_Splitted);
};

/*Definerer variablen som kobles til div'en der sitatet vil komme opp */
let sitat_div = document.getElementById('sitatet');

/*Funksjonen fyllSitat() kjøres ved body onload, altså med en gang nettsiden
åpnes. Den startes så på nytt hver gang funksjonen nyttSitat() kjøres. Det
første fyllSitat gjør er å kjøre funksjonen generersitat(). Dermed fyller
en for-løkke inn sitatet i variablen vi nettop definerte. Her er det bare å
holde tunga rett i munnen ;) 
*/
let fyllSitat = () => {
  genererSitat();

  for (let i = 0; i < id_Arr_Splitted.length; i++) {
    let new_span = document.createElement('span');
    new_span.setAttribute('id', id_Arr_Splitted[i][1]);
    new_span.innerText = `${id_Arr_Splitted[i][0]}`;
    sitat_div.appendChild(new_span);
  }
  /*For-løkken går gjennom lengden til den globale verdien vi har lagret zip i.
    Innenfor for-løkken definerer vi en variabel "new_span", og bruker
    document.createElement til å lage et span. Span er et html element som ofte
    brukes til å markere deler av tekst. Deretter bruker vi setAttribute på 
    variablen vår, og gir den attributtet 'id'. Samtidig henter den ut
    id_Arr_splitted[i][1] som henter indexen, se eksempel nederst i denne kommentaren.
    Det neste for-løkken gjør er å fylle variablen vår med bokstaver ol.. Det gjør den ved å 
    sette innerText = id_Arr_splitted[i][0]. Vi vil nå ha et span som ser sånn her ut:

                                <span id="0">e</span>

    For-løkken gjør altså dette for alle bokstaver, tegn og mellomrom  i sitatet, for så å
    fylle sitatet ved hjelp av de ulike spans'ene den har laget. Det gjøres ved å
    bruke appendChild. Altså legger du hvert span inn i sitat_div, som du jo selvfølgelig
    husker er den div'en sitatet vises frem i.

                    0 //Dette er en array med index 0 i den nye arrayen
                                : 
                                (2) [ 'e', 0 ]      <<<----- To elementer i arrayen, 'e' og 0 
                                       |   |
                                       |   |
                                       |   |
 Her er 'e' = id_Arr_splitted[i][0]-----   ----- Her er 0 = id_Arr_splitted[i][1] */
};

/*Bruker en boolean til å passe på at startTimer kjører kun en gang,
 og ikke starter på nytt for hvert input. En boolean er en verdi, som
 enten er true eller false. Derfor fungerer variablen "started" som en
 av på bryter for funkjsonen */
let started = false;

/*Funskjsonen startTimer kjøres på oninput i inputfeltet i html. Det
første som skjer inni funksjonen, er at den sjekker om variablen "started"
fortsatt har verdien "false". Hvis den har det starter den selve nedtellingen.
Nedtellingen fungerer ved å definere en tidsgrense, for så å kjøre en setInterval
funksjon, som minskes med 1 for hvert 1000 millisekund. if-setningern med 
(tidsgrense === 0) har som hensikt å passe på at nedtellingen stopper på 0, 
og at en modal(en slags fancy alert) kommer opp med resultater til brukeren.
Etter første input fra brukeren, vil startTimer kjøre starte nedtellingen. 
på andre, tredje osv. brukerinput vil ikke nedtellingen starte på nytt, ettersom
if(!started) ikke stemmer. Dette er fordi variablen started har endret verdi til 
"true" 
*/
let startTimer = () => {
  if (!started) {
    let tidsgrense = 10;
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
};

//Lager en variabel for textarea/inputfeltet
let input = document.getElementById('textArea');

//Variabler for poeng
let poeng = 0;
let poengTekst = document.getElementById('poengTekst');
poengTekst.innerText = poeng;

/* let feilTrykk = 0;
let riktigeTrykk = 0; */

/*Funksjonen sjekkSvar kjøres for hvert input i inputfeltet, og
sjekker om det brukeren har skrevet inn er riktig bokstav, mellomrom
eller tegn.*/
let sjekkSvar = () => {
  /*Denne if-setningen sjekkes i starten av funksjonen, og sjekker om
  brukeren har klart å skrive inn hele sitatet riktig. Hvis alt er riktig
  vil brukeren få et poeng, og funksjonen nyttSitat vil kjøres. Deretter
  begynner sjekkSvar igjen, så fort brukeren prøver seg på det nye sitatet. */
  if (input.value === sitatRandom) {
    poeng++;
    document.getElementById('poengTekst').innerText = poeng;
    nyttSitat();
  }

  /*Her splittes bruker-input opp, og lagres i den nye variablen
   input_splittet. F.eks. kan dataen i variablen se sånn her ut: 
      
                        'e', 'p', 'l', 'e'
   */
  let input_splitted = input.value.split('');

  /*Her kommer for-løkken som sjekker om bruker-input stemmer
  bokstav for bokstav.  */
  for (let i = 0; i < input_splitted.length + 1; i++) {
    /*Denne if setningen passer på at brukeren ikke kan skrive
    uendelig langt i inputfeltet. Hvis brukeren skriver feil, og
    deretter fortsetter å skrive, vil setningen passe på at brukeren
    får opp et nytt sitat, dersom brukeren overskrider lengden til
    sitatet*/
    if (i >= id_Arr_Splitted.length) nyttSitat();

    /*For elementet med index [i] henter den ut id nummeret. id nummeret 
    ligger lagret på index 1 i arrayen "id_Arr_Splitted". Derav kommer
    [i][1]. id nummeret som hentes ut, er id'en til span for bokstav.
    Dette gjøres slik at man kan sammenlikne input[i] og id_Arr_Splitted[i][0]*/
    let bokstav = document.getElementById(id_Arr_Splitted[i][1]);

    /*Disse valgsetningene sjekker om bokstavene skrevet inn av brukeren
    stemmer overens med bokstavene i sitatet. Når en setning er sann legges
    det til farge på bokstavene i sitatet. Dette gjøres med .classList.add/remove.
    Klassene det refereres til ligger i stilarket



    
    /*if-setningen sjekker om indexen ikke er skrevet inn enda. Hvis indexen 
    ikke er skrevet inn enda fjernes farger fra bokstaven, slik at den 
    tilbakestilles til svart farge*/
    if (input_splitted[i] == null) {
      bokstav.classList.remove('riktig');
      bokstav.classList.remove('feil');
    } /*else if-setningen sjekker input sin index 0 opp mot sitatet sin index 0 osv.
      Hvis input stemmer, vil klassen grønn bli lagt til, og med det blir bokstaven
      i sitatet grønn. for-løkken passer på at alle indexene sjekkes.*/ else if (
      input_splitted[i] === id_Arr_Splitted[i][0]
    ) {
      bokstav.classList.add('riktig');
    } else {
      /*Hvis input er feil legges rød farge til bokstaven */
      bokstav.classList.add('feil');
    }
  }
};

/*nyttSitat henter ut et nytt, ubrukt sitat. Funksjonen kalles inni funskjonen fyllSitat.
  nyttSitat tømmer inputfeltet og sitat_div for innhold, før den kaller fyllSitat,
  som igjen fyller sitat_div med et ubrukt sitat */
let nyttSitat = () => {
  textArea.value = null;
  sitat_div.innerText = '';
  fyllSitat();
};
