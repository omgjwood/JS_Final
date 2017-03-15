$(document).ready(function() {

    /*this is where we are creating the local storage. at first its saying if the local storage ISNT there then it needs to be created.  Then we are creating the local sotrage by creating a object of pbh_cart.*/ 
    if(!localStorage.getItem("pbh_cart")) {
       var pbh_cart = {};
       pbh_cart.products = [];/* adding an array*/
       localStorage.setItem ("pbh_cart", JSON.stringify(pbh_cart));
    }
    
 
    /*this is where we created the function for collecting the product information when clicking the "add to cart button*/              
    $("#product").submit(function(e) {
        e.preventDefault();
        itemPrice = Number($("#item_price").text()).toFixed(2);
        itemName = $("#item_name").text();
        itemImg = $("#item_main_img").attr('src');
        itemQty = Number($("#quantity").val());
        itemUrl = window.location.href;
        itemProductID = $("#item_productID").val();
        
        
   /*this is where we put the stuf in "product*/     
        product = {"itemPrice": itemPrice,
                   "itemName": itemName,
                   "itemImg": itemImg,
                   "itemQty": itemQty,
                   "itemUrl": itemUrl,
                   "itemProductID": itemProductID};
        
        addToCart(product);
        
        /*console.logs
        console.log(product);    
        console.log(product.itemPrice);
        console.log(product.itemImg);
        console.log(product.itemName);
        console.log(product.itemQty);
        console.log(product.itemUrl);
        console.log(product.itemProductID); */
    });
    
    
    /* we created the function for the product. */
    function addToCart(product) {
        //get cart object from local storage, unstring it
        var pbh_cart = JSON.parse(localStorage.pbh_cart);
        
        //check if the item is already in the cart
        var isItemInCart = false;
        pbh_cart.products.forEach(function(p) {
            if(p.itemProductID == product.itemProductID) {
                p.itemQty += product.itemQty;
                isItemInCart = true;
            }
            
        });
        
        //add product to cart object, 
        if(!isItemInCart) { pbh_cart.products.push(product)};
        
        //update the shopping cart icon
        var cartQty = Number($("#cart_qty").text());
        cartQty += product.itemQty;
        
        $("#cart_qty").text(cartQty);
        
        //return cart data to local storage, restring it
        localStorage.setItem ("pbh_cart", JSON.stringify(pbh_cart));
        
         
    }
   
});

