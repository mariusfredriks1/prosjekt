//riktig funksjon
let riktig = document.getElementById("alt1")

let poeng = [];
sum = 0

/* riktig.onclick = () => {
        //document.createElement("div")
        poengpush([1]);
        sum = poeng.length;
        console.log(sum);
}{
        random()
    }  */


//verdi til bildene som lastes inn

let verdier = [1,2,3,4]
let randomTall1 = verdier[Math.floor(Math.random() * verdier.length)];
let randomTall2 = verdier[Math.floor(Math.random() * verdier.length)];
let feilsvar = randomTall1*2;

let img = []

// img1.src = "/img/matte1_2/3bananer.jpg"
let alternativ1 = document.getElementById("flex-childfrukt1")
let alternativ2 = document.getElementById("flex-childfrukt2")

function random() {
    alternativ1.innerHTML = randomTall1;
    alternativ2.innerHTML = randomTall2;
    
} console.log(random())


// knapper
// let alt1 = document.getElementById("alt1")


function tekst() {
    document.getElementById("alt1").innerText =  randomTall1 + randomTall2;
    document.getElementById("alt2").innerText =  randomTall1 + feilsvar;
 }


// Get the modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
riktig.onclick = function() {
  modal.style.display = "block";
    setTimeout(() => {
        
    }, 3000);
  }
    //random(). window.reload


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}