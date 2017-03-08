$(document).ready(function() {
    
    
    if(!localStorage.getItem("pbh_cart") {
       var pbh_cart = {};
       pbh_cart.products = [];
       localStorage.setItem ("pbh_cart", JSON.stringify(pbh_cart));
       }
    
    
)};