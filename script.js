function renderGerichte(){
    let gerichteRef = document.getElementById('gerichte'); 
    gerichteRef.innerHTML = '';
    //localStorage

    for (let i = 0; i < gerichte.length; i++) {
        gerichteRef.innerHTML += getGerichteTemplate(i); 
    }

}



function renderCart(){
    let cartRef = document.getElementById('cart');
    cartRef.innerHTML =''; 
     
    for (let i = 0; i < cart.length; i++){
        if (cart[i].empty == false) {
            cartRef.innerHTML += getCartTemplate(i);
        }
         
    }
}


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

 function updateQuantity(index){
    // cart = [];
    for (let i = 1; i < cart.length; i++) {
        if (gerichte[index].added == true && gerichte[index].name === cart[i].name ){
            cart[i].quantity++
        } 
    }
 }