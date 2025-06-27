//Will be loaded when the page is called up
window.addEventListener("load", emptyCart);
window.addEventListener("load", renderGerichte);

//Here you iterate the “gerichte” array
function renderGerichte(){
    let gerichteRef = document.getElementById('gerichte'); 
    gerichteRef.innerHTML = '';

    for (let i = 0; i < gerichte.length; i++) {
        gerichteRef.innerHTML += getGerichteTemplate(i); 
    }
}

//This iterates through the "cart" array. The if condition ensures that the object
//empty cart" is not loaded.
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

//This function adds the selected dishes (objects) to the “cart” array
// The quantity is only pushed with the value 0
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

//Here the quantity is increased by 1. The if condition ensures that the quantity in the shopping cart is increased if multiple products are selected.
// Thanks to the if condition only for the article clicked on again
 function updateQuantity(index){
    for (let i = 1; i < cart.length; i++) {
        if (gerichte[index].added == true && gerichte[index].name === cart[i].name ){
            cart[i].quantity++
        } 
    }
 }

 //This function empties the shopping cart
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

 //Increases the quantity of the item added to the shopping cart
 function plusQuantity(index){
    cart[index].quantity++
    calculatePrice(index)
    renderCart()
 }

 //Reduces the quantity of the item added to the shopping cart
 function minusQuantity(index){
    cart[index].quantity--
    calculatePrice(index)

    if (cart[index].quantity < 1) {
       removeItem(index);
    } else{
        renderCart();
    }
 }

//Calculates the total price at item level
 function calculatePrice(index){
    let pricePerUnit = cart[index].price;
    let calculatedprice = pricePerUnit * cart[index].quantity;
    cart[index].quantity_price = calculatedprice.toFixed(2); 
 }

//Calculates the total price across all items
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

//Removes an item from the shopping cart
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

//Thanks page after order
function orderCompleted(){
    let cartRef = document.getElementById('cart');
    cartRef.innerHTML=`<img src="./assets/img/orderComplete.png" alt="Bestellung abgeschlossen"> <p>Vielen Dank, deine Testbestellun wurde vorgenommen!</p>`;
    let totalRef = document.getElementById('total');
    totalRef.classList.remove('total-container');
    totalRef.innerHTML = ``;
     clearCart();
}

//Calculate the total price with shipping costs
function calculateShipment(){
    let totalRef = document.getElementById('total');
    totalRef.innerHTML ='';
    if (checkout[0].shipment == true) {
        checkout[0].totalShipment = checkout[0].total + 5;
        totalRef.innerHTML = getTotalTemplate();
    }
}

//Empty the shopping cart and set gerichte[i].added to false again
function clearCart(){
    for (let index = 0;cart.length > 1 ; index++) {
        cart.pop();
    }
    for (let index = 0; index < gerichte.length; index++) {
        gerichte[index].added = false;
    }
}