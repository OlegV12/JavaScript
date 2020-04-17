'use strict';

let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})





let shoppingCart = (function () {
    let cart = [];

    // Constructor
    class Item {
        constructor (name, price, count){
            this.name = name;
            this.price = price;
            this.count = count;
        }
    }


    let obj = {};

    // Add to cart
    obj.addItemToCart = function (name, price, count) {
        for (let item in cart) {
            if (cart[item].name === name) {
                cart[item].count++;
                return;
            }
        }
        let item = new Item(name, price, count);
        cart.push(item);
    }

    // Set count from item
    obj.setCountForItem = function (name, count) {
        for (let i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };

    // Remove item from cart
    obj.removeItemFromCart = function (name) {
        for (let item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
    }

    // Remove all items from cart
    obj.removeItemFromCartAll = function (name) {
        for (let item in cart) {
            if (cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
    }

    // Clear cart
    obj.clearCart = function () {
        cart = [];
    }

    // Count cart 
    obj.totalCount = function () {
        let totalCount = 0;
        for (let item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    // Total cart
    obj.totalCart = function () {
        let totalCart = 0;
        for (let item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    // List cart
    obj.listCart = function () {
        let cartCopy = [];
        for (let i in cart) {
            let item = cart[i];
            let itemCopy = {};
            for (let p in item) {
                itemCopy[p] = item[p];

            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }

    return obj;
})();


// Add item
let addToCartBtn = document.querySelectorAll('.add-to-cart');
addToCartBtn.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        let name = event.srcElement.dataset.name;
        let price = event.srcElement.dataset.price;
        shoppingCart.addItemToCart(name, price, 1);
        displayCart();
    });
});



// Clear items
let clearBtn = document.querySelector('.clear-cart');
clearBtn.addEventListener('click', function (event) {
    shoppingCart.clearCart();
    displayCart();
});



function displayCart() {
    let cartArray = shoppingCart.listCart();
    let output = "";
    for (let i in cartArray) {
        output += "<tr>"
            + "<td>" + cartArray[i].name + "</td>"
            + "<td>(" + cartArray[i].price + ")</td>"
            + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
            + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
            + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
            + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
            + " = "
            + "<td>" + cartArray[i].total + "</td>"
            + "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function (event) {
    let name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function (event) {
    let name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function (event) {
    let name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
    let name = $(this).data('name');
    let count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
});

displayCart();
