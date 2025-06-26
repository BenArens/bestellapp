// let total = 0;

//Wird beim Seitenaufruf geladen
window.addEventListener("load", emptyCart);
window.addEventListener("load", renderGerichte);



//Hier wird du den Array "gerichte" iterriert
function renderGerichte(){
    let gerichteRef = document.getElementById('gerichte'); 
    gerichteRef.innerHTML = '';

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
        if (cart[i].empty == false && cart[i].added ==true) {
            calculatePrice(i)
            cartRef.innerHTML += getCartTemplate(i);
        }
    }
    calulateTotal();
    emptyCart();
}

//Diese funktion fügt das ausgewählte gerichte (objekte) zu dem Array "cart" hinzu
// Die Menge, "quantity" wird erst mit dem wert 0 gepusht
function addToCart(index){
    if (gerichte[index].added == false){
        gerichte[index].added = true;
        cart.push({name: gerichte[index].name, description: gerichte[index].description, price: gerichte[index].price, quantity: 0, added: gerichte[index].added ,empty: false});
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

 function emptyCart(){
    if (cart.length < 2 ){
    let totalRef = document.getElementById('total');
    totalRef.classList.remove('total-container');
    totalRef.innerHTML = ``;
    
    let cartRefempty = document.getElementById('cart');
    cartRefempty.innerHTML = ``;
    cartRefempty.innerHTML ='<div class="empty-cart"> <img src="./assets/img/emptyCart.svg" alt="emptyCart"></div> <div class="empty-cart">Dein Warenkob ist leer, bitte füge Bestellungen hinzu.</div> '; 
    }
 }

 function plusQuantity(index){
    cart[index].quantity++
    calculatePrice(index)
    renderCart()
 }

 
 function minusQuantity(index){
    cart[index].quantity--
    calculatePrice(index)

    if (cart[index].quantity < 1) {
       removeItem(index);
    } else{
        renderCart();
    }
 }


 function calculatePrice(index){
    let pricePerUnit = cart[index].price;
    let calculatedprice = pricePerUnit * cart[index].quantity;
    cart[index].quantity_price = calculatedprice.toFixed(2); 
 }

 function calulateTotal(){
    let totalRef = document.getElementById('total');
    totalRef.classList.add('total-container');
    totalRef.innerHTML ='';
    checkout[0].total = 0;
    
    for (let i = 0; i < cart.length; i++) {
       checkout[0].total +=  parseFloat(cart[i].quantity_price);
       totalRef.innerHTML = getTotalTemplate();
 }
   calculateShipment();
}

function removeItem(i){  
    for (let index = 0; index < gerichte.length; index++) {
        if (cart[i].name == gerichte[index].name ) {
            gerichte[index].added = false;
            cart[i].added = false;        
        }      
    }
    cart.splice(i,1);  
    renderCart();
}

function orderCompleted(){
    let cartRef = document.getElementById('cart');
    cartRef.innerHTML=`<img src="./assets/img/orderComplete.png" alt="Bestellung abgeschlossen"> <p>Vielen Dank für Deine Bestellung, wir wünschen guten Appetit!</p>`;
    let totalRef = document.getElementById('total');
    totalRef.classList.remove('total-container');
    totalRef.innerHTML = ``;
}


function calculateShipment(){
    let totalRef = document.getElementById('total');
    totalRef.innerHTML ='';
    if (checkout[0].shipment == true) {
        checkout[0].totalShipment = checkout[0].total + 5;
        totalRef.innerHTML = getTotalTemplate();
    }
}