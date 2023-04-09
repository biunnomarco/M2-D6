//*FUNZIONE PER CAMBIARE L'H1
/* function changeH1() {
    let myH1 = document.getElementById("bestSeller");
    myH1.innerText = "Questo è il nuovo H1";
    return myH1;
}
console.log(changeH1()) */

//*FUNZIONE PER CAMBIARE IL BACKGROUND DELLA PAGINA (MIA SCELTA QUELLA DI CAMBIARE IL COLORE DELLA TABELLA)
/* function changeBGColor() {
    document.body.style.backgroundColor = "yellow"
}
changeBGColor() */

/* function changeBGColor() {
    let myTab = document.getElementById("tabella");
    myTab.style.backgroundColor = "lightgray"
}
changeBGColor() */

//*FUNZIONE PER CAMBIARE INDIRIZZO
/* function changeAddress(newAddress) {
    let address = document.getElementById("address");
    address.innerHTML = newAddress;
    return address;
} 
let newAddress = "Yggdrasil srl <br> Via dei Carciofini, 118 <br> 20032 Poggibonsi, SI, Italy"
changeAddress(newAddress) */

//*FUNZIONE PER AGGIUNGERE UNA CLASSE A TUTTI I LINK AMAZON
/* function addClassWithJs() {
let links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        links[i].classList.add("addedByJs")
    }
}
addClassWithJs(); */

//*FUNZIONE PER AGGIUNGERE CLASSE ALLE IMMAGINI PER MODIFICARNE LA VISIBILITA'
/* function changeVisibility() {
    let immagini = document.getElementsByClassName("immagine");
    for (let i = 0; i < immagini.length; i++) {
        immagini[i].classList.add("changeVisibility");        
    }
}
changeVisibility() */

//* FUNZIONE PER CAMBIARE IL COLORE DEL PREZZO

/* function changePriceColor(color) {
    let prices = document.getElementsByClassName("prezzo");
    for (let i = 0; i < prices.length; i++) {
        prices[i].style.color = color;         
    }
}
let color = "blue"
changePriceColor(color) */

//* FUNZIONE PER CREARE UN DIV DA AGGIUNGERE PRIMA DEL FOOTER
/* function addNewDiv() {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "<p>Questo è un nuovo div</p>"
    let footer = document.getElementById("footer");
    let address = document.getElementById("address")
    footer.insertBefore(newDiv, address)

}
addNewDiv() */