// arrays med bilder av bananer eller epler med assigned value (tilsvarer eks "3" + x)
let tall = [
    {frukt: src = "./img/matte1_2/1eple.png", verdi: 1}
    {frukt: "", verdi: 2}
    {frukt: "", verdi: 3}
    {frukt: "", verdi: 4}
    ];
    
    //kommentar
    
    // funksjon som tar random array
    
    function randomfrukt() {
    const randomTall = tall[Math.floor(Math.random() * tall.length)];
    
    document.getElementById("frukt1").innerHTML = randomfrukt();
    }
    
    /*eller 
    for (tall(Key,value) */
    
    // funksjon som legger sammen valuene
    
    
    
    //funksjon som godkjenner svar else "prøv igjen"
    