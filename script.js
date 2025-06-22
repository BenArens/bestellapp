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
        cartRef.innerHTML += getCartTemplate(i); 
    }
}


function addToCart(index){
    

    if (gerichte[index].added == false){
        gerichte[index].added = true;
        gerichte[index].quantity++;
        updateQuantity();
    } else {
        gerichte[index].quantity++
        updateQuantity();
    }
    
    renderCart();
}

 function updateQuantity(){
    cart = [];
    for (let index = 0; index < gerichte.length; index++) {
        if (gerichte[index].added == true){
            cart.push({name: gerichte[index].name, description: gerichte[index].description, price: gerichte[index].price, quantity: gerichte[index].quantity});
        }
    }
 }