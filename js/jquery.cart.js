$(document).ready(function() {
    
    
    
    /*this is where we are creating the local storage. at first its saying if the local storage ISNT there then it needs to be created.  Then we are creating the local sotrage by creating a var of pbh_cart.*/ 
    if(!localStorage.getItem("pbh_cart")) {
       var pbh_cart = {};
       pbh_cart.products = [];
       localStorage.setItem ("pbh_cart", JSON.stringify(pbh_cart));
    }
    
 
    /*this is where we created the function for collecting the product information when clicking the "add to cart button*/              
    $("#product").submit(function(e) {
        e.preventDefault();
        itemPrice = $("#item_price").text();
        itemName = $("#item_name").text();
        itemImg = $("#item_main_img").attr('src');
        itemQty = $("#quantity").val();
        itemUrl = window.location.href;
        itemProductID = $("#item_productID").val();
        
        product = {"itemPrice": itemPrice,
                   "itemName": itemName,
                   "itemImg": itemImg,
                   "itemQty": itemQty,
                   "itemUrl": itemUrl,
                   "itemProductID": itemProductID};
    
        
        console.log(product);    
        console.log(product.itemPrice);
        console.log(product.itemImg);
        console.log(product.itemName);
        console.log(product.itemQty);
        console.log(product.itemUrl);
        console.log(product.itemProductID);
    });
    
    
   
});

