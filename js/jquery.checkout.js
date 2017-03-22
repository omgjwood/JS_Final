/* added the accordion to the cart*/
$(document).ready(function(){
    $("#checkout_accordion").accordion();
    
    updateCart();


var trash_Items = document.querySelectorAll("#checkoutcart .trashItem");
for (var i = 0; i < trash_Items.length; i++) {
        trash_Items[i].onclick = function(e) {
            e.preventDefault();
            
            //get product id from element
            var trashProduct = $(this).val();
            
            //get shopping cart object
            var pbh_cart = JSON.parse(localStorage.pbh_cart);
            
            //loop through cart itmes, compare product ids
            //pbh_cart.products.forEach(function(p) { 
            for (var i = 0; i < pbh_cart.products.length; i++) {
                //remove matching productIDs from cart
                if(pbh_cart.products[i].itemProductID==trashProduct){
                    pbh_cart.products.splice(i,1);
                }
            }
            
            //remove current item from page
            $(this).parent("tr").remove();
            
            //return cart to local storage
            localStorage.setItem ("pbh_cart", JSON.stringify(pbh_cart));
            
            
            //update order summary
        }
}
    
    
    //clicking on update cart button
    function updateCart () {
        // get exisitng quantitys
        var itemQty = document.querySelectorAll("#checkoutcart .trashItem");
        for (var i = 0; i < trash_Items.length; i++) {
        
        // loop through cart data and build out checkout page dynamically

        // get cart object data

        //get cart object from local storage, unstring it
        var pbh_cart = JSON.parse(localStorage.pbh_cart);

        // for each item in the products array in the cart,
        pbh_cart.products.forEach(function(p) {

        /*
        // this is the product data we're looking for
        product = {
            "itemPrice": itemPrice,
            "itemName": itemName,
            "itemImg": itemImg,
            "itemQty": itemQty,
            "itemUrl": itemUrl,
            "itemProductID": itemProductID
            };
        */

        // get total price for current product,
        // it's the itemPrice * itemQty
        // also have to subtract item discount
        var currentItemTotal = (p.itemPrice * p.itemQty).toFixed(2);
        console.log(p.itemPrice);
        console.log(p.itemQty);

    // build markup string
    var html = [
        '<tr>',
            '<td>',
                '<a href="' + p.itemUrl + '"><img src="' + p.itemImg + '" alt="' + p.itemName + '"></a>',
            '</td>',
            '<td>',
                '<a href="' + p.itemUrl + '">' + p.itemName + '</a>',
            '</td>',
            '<td>',
                '<input value="' + p.itemQty + '" class="form-control product-quantity" type="number">',
            '</td>',
            '<td>$' + p.itemPrice + '</td>',
            '<td>$0.00</td>',
            '<td>$' + currentItemTotal + '</td>',
            '<td>',
                '<a href="#" class="trashItem" val="' + p.itemProductID + '"><i class="fa fa-trash-o"></i></a>',
            '</td>',
        '</tr>',
    ].join("\n");

    // append to DOM
    $("#checkoutcart").append(html);

});     
        
        // end foreach product loop
        // loop through each product
        
        //get quanity
        
        //get unit price 
        
        //update total
        
        //start acc. subtotal
        
        //after product loop update order summary sidebar
        
        //update subtotal
        
        //update total
        
    
    }

    

}); // end document.ready();
