
//Hier wird du den Array "gerichte" iterriert
function renderGerichte(){
    let gerichteRef = document.getElementById('gerichte'); 
    gerichteRef.innerHTML = '';
    //localStorage

    for (let i = 0; i < gerichte.length; i++) {
        gerichteRef.innerHTML += getGerichteTemplate(i); 
    }

}


//Hier wird durch den Array "cart" iterriert. Durch die if Bedingung wird sichergestellt, dass das Objekt
//"empty cart" nicht geladen wird. 
function renderCart(){
    let cartRef = document.getElementById('cart');
    cartRef.innerHTML =''; 
     
    for (let i = 0; i < cart.length; i++){
        if (cart[i].empty == false) {
            cartRef.innerHTML += getCartTemplate(i);
        }
         
    }
}

//Diese funktion fügt das ausgewählte gerichte (objekte) zu dem Array "cart" hinzu
// Die Menge, "quantity" wird erst mit dem wert 0 gepusht
function addToCart(index){
    
    if (gerichte[index].added == false){
        gerichte[index].added = true;
        cart.push({name: gerichte[index].name, description: gerichte[index].description, price: gerichte[index].price, quantity: 0, empty: false});
        updateQuantity(index);
    } else {
        updateQuantity(index);
    }
    
    renderCart();
}

//Hier wird die Menge "quantity" um 1 erhöt. Die if-Bedingung stellt sicher, das bei mehrfacher Produktauswahl die Anzahl im Warenkorb erhöht wird.
// Dank der if-Bedingung nur bei dem erneut angeklickten Artikel
 function updateQuantity(index){
    for (let i = 1; i < cart.length; i++) {
        if (gerichte[index].added == true && gerichte[index].name === cart[i].name ){
            cart[i].quantity++
        } 
    }
 }