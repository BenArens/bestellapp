function renderGerichte(){
    let gerichteRef = document.getElementById('gerichte'); 
    gerichteRef.innerHTML = '';
    //localStorage

    for (let i = 0; i < gerichte.length; i++) {
        gerichteRef.innerHTML += getGerichteTemplate(i); 
    }

}