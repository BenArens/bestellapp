function getGerichteTemplate(i){
    return `

    <div class="gericht">
     <div class="gericht-info" >
            <h4 class="name-gericht">${gerichte[i].name}</h4>
            <p class="beschreibung" >${gerichte[i].description}</p>
            <span class="preis">${gerichte[i].price} €</span>
          </div> 
          <i onclick="addToCart(${i})" class='bx  bx-plus-circle plus-icon'></i>
    </div>
    `
}

function getCartTemplate(i){
  return `
         <div class="myOrder"><span class="gericht-cart">${cart[i].name} ${cart[i].quantity}</span></div>
  `
}