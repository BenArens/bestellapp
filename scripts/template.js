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
         <div class="myOrder"><span class="gericht-cart">${cart[i].name}</span></div>
         <div class="myOrder-quantity"> <i onclick="minusQuantity(${i})" class='icon-quantity bx  bx-minus'></i>  ${cart[i].quantity}x  <i onclick="plusQuantity(${i})" class='icon-quantity bx  bx-plus'></i> 
         <div class="price">${cart[i].quantity_price}€</div>  <i onclick="removeItem(${i})" class='bx  bx-trash icon-trash'></i>   </div>
         `
}

function getTotalTemplate(){
    return `<div class="total-price" >Summe: <span class="total">${checkout[0].total.toFixed(2)}€</span></div>
    <a href="#" class="total-button" onclick="orderCompleted()" >Jetzt bestellen </a>`
}