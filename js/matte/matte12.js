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

  // let feil =


//verdi til bildene som lastes inn

let verdier = [1,2,3,4]
let randomTall1 = verdier[Math.floor(Math.random() * verdier.length)];
let randomTall2 = verdier[Math.floor(Math.random() * verdier.length)];
let feilsvar = randomTall1*2;

let bilder = ["https://iform.no/wp-content/uploads/2017/03/shutterstock_16755115.jpg"]
let randombilde = bilder[Math.floor(Math.random() * bilder.lenght)]
/* // bilder inn i array
img = Array(2)
img[0] = new Image
img[0].src="./img/matte1_2/tobananer.png"
img[1] = new Image
img[1].src='/img/matte1_2/matte1.JPG'

let randombilde = img[Math.floor(math.random() * img.length)]; */


let alternativ1 = document.getElementById("flex-childfrukt1")
let alternativ2 = document.getElementById("flex-childfrukt2")

function random() {
    alternativ1.innerHTML = randombilde;
    alternativ2.innerHTML = randomTall2;
    
} console.log(random())


// knapper
// let alt1 = document.getElementById("alt1")


function tekst() {
    document.getElementById("alt1").innerText =  randomTall1 + randomTall2;
    document.getElementById("alt2").innerText =  randomTall1 + feilsvar;
 }


// Get the modal
var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
riktig.onclick = function() {
  modal.style.display = "block";
  }
    //random(). window.reload


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  location.reload()
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}