$(document).ready(function() {
    $("#product").submit(function(e) {
        e.preventDefault();
        itemPrice = $(".price").text();
        itemName = $(".product__heading").text();
        itemImg = $("#main_product_img").attr('src');
        itemQty = $("#quantity").val();
        itemUrl = window.location.href;
        
        product = {"itemPrice": itemPrice,
                   "itemName": itemName,
                   "itemImg": itemImg,
                   "itemQty": itemQty,
                   "itemUrl": itemUrl};
    
        
    console.log(product);    
    console.log(product.itemPrice);
    console.log(product.itemImg);
    console.log(product.itemName);
    console.log(product.itemQty);
    console.log(product.itemUrl);
    });
   
});