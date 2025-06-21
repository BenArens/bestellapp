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
    //locarStorage

    for (let i = 0; i < cart.length; i++){
        cartRef.innerHTML += getCartTemplate (i); 
    }
}


function addToCart(index){

    if (gerichte[index].added == false){
        gerichte[index].added = true;
        cart.push({name: gerichte[index].name, description: gerichte[index].description, price: gerichte[index].price, quantity: 1});
    } else {
        cart[index].quantity++
    }

    
    
    renderCart();
}