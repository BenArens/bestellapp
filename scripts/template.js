function getGerichteTemplate(i){
    return `

    <div class="gericht">
     <div class="gericht-info" >
            <h4 class="name-gericht">${gerichte[i].name}</h4>
            <p class="beschreibung" >${gerichte[i].description}</p>
            <span class="preis">${gerichte[i].price} €</span>
          </div> 
          <i class='bx  bx-plus-circle plus-icon'></i>
    </div>
    `
}