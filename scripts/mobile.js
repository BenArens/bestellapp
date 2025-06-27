function toggleMobileCart(){
 
   let cartAbsoluteRef = document.getElementById('cart-absolute'); 
   cartAbsoluteRef.classList.toggle('hidden-mobile');
   let cartHeading = document.getElementById('cart-heading');
   fixMobileCart()
   if (cartHeading.innerHTML === "Warenkorb") {
    cartHeading.innerHTML = "schließen";
   } else {
    cartHeading.innerHTML = "Warenkorb";
   }
}

function fixMobileCart(){
   let body = document.getElementById(`body`);
   body.classList.toggle('fixoverflow-y');
}