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

      function genererSitat() {
        let randomTall = Math.floor(Math.random() * bokstav_array.length);
        bokstavRandom = bokstav_array[randomTall];
        bokstav_array.splice(randomTall, 1);
      }

      let sitat_div = document.getElementById('sitatet');

      function fyllBokstav() {
        genererSitat();
        sitat_div.innerText += bokstavRandom;
      }
      function modalFerdig() {
        modal.style.display = 'block';
        resultat.innerText = `Bra jobba! Du skrev inn alle bokstavene i alfabetet på  ${
          60 - tidsgrense
        } sekunder ; )`;
      }

      function tomForTidModal() {
        modal.style.display = 'block';
        resultat.innerText = `Tiden er ute, du klarte ${poeng} bokstaver på 60 sekunder!`;
      }

      //Bruker en boolean til å passe på at startTimer kjører kun en gang, og ikke starter på nytt for hvert input
      let started = false;
      let tidsgrense = 60;
      let nedtelling;
      //Starte nedtelling
      function startTimer() {
        if (!started) {
          //Definerer tidsgrense
          timer = window.setTimeout(() => {}, 60000);

          nedtelling = setInterval(function () {
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
      }

      //Lager en variabel for textarea/inputfeltet
      //Variabler for poeng
      let poeng = 0;
      let poengTekst = document.getElementById('poengTekst');
      poengTekst.innerText = poeng;

      let bokstav = document.getElementById('textArea');

      function sjekkSvar() {
        //Sjekke om input er riktig,
        //i så fall hente ut ny bokstav fra array
        if (bokstav.value !== bokstavRandom) {
          bokstav.classList.add('feil');
          bokstav.classList.remove('riktig');
        } else if (bokstav_array.length === 0) {
          //Stopper nedtellingen, forhindrer at tidsgrense når 0
          //og dermed kjører tomForTidModal() funkjsonen.
          clearInterval(nedtelling);
          poeng++;
          modalFerdig();
        } else {
          bokstav.classList.remove('feil');
          bokstav.classList.add('riktig');
          poeng++;
          document.getElementById('poengTekst').innerText = poeng;
          nyBokstav();
        }
      }

      //Henter nytt sitat til brukeren
      function nyBokstav() {
        textArea.value = null;
        sitat_div.innerText = '';
        fyllBokstav();
      }