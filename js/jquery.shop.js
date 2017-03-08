$(document).ready(function() {
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