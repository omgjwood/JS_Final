/* added the accordion to the cart*/
$(document).ready(function(){
    $("#checkout_accordion").accordion();

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
    var currentItemTotal = p.itemPrice * p.itemQty;

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
                '<input value="' + p.itemQty + '" class="form-control" type="number">',
            '</td>',
            '<td>$' + p.itemPrice + '</td>',
            '<td>$0.00</td>',
            '<td>$' + currentItemTotal + '</td>',
            '<td>',
                '<a href="#" id="trashItem" val="' + p.itemProductID + '"><i id="trashItem" class="fa fa-trash-o"></i></a>',
            '</td>',
        '</tr>',
    ].join("\n");

    // append to DOM
    $("#checkoutcart").append(html);

}); // end foreach product loop





}); // end document.ready();
