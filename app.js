'use strict';
// задание 2

let i = 0;
for (i = 0; i < 11; i++) {
    if (i == 0) {
        alert (`${i} это ноль`);
    }
    else if (i%2 == 0) {
        alert (`${i} это четное число`);
    }
    
    else
        {
        alert (`${i} это нечетное число`)
        }
}


//задание 3

const post = { author: "John", //вывести этот текст 
              postId: 23, 
              comments: [
                  { 
                      userId: 10, 
                      userName: "Alex", 
                      text: "lorem ipsum", 
                      rating: { 
                          likes: 10, 
                          dislikes: 2 //вывести это число 
                      } 
                  }, 
                  { 
                      userId: 5, //вывести это число 
                      userName: "Jane", 
                      text: "lorem ipsum 2", //вывести этот текст 
                      rating: {
                          likes: 3, 
                          dislikes: 1 
                      } 
                  }, 
              ] 
             }

console.log (post.author);
console.log (post.comments[0].rating.dislikes);
console.log (post.comments[1].userId);
console.log (post.comments[1].text);



//задание 4

const products = [ 
    { 
        id: 3, price: 200, 
    }, 
    {
        id: 4, price: 900, 
    }, 
    { 
        id: 1, price: 1000,
    }, 
];

products.forEach (function (item){
    item.price *= 0.85;
    alert(`Новая цена товара id ${item.id} = ${item.price}`)
}
) 


// задание 5

const productS = [ 
    { 
        id: 3, 
        price: 127, 
        photos: [
            "1.jpg", 
            "2.jpg", 
        ] 
    }, 
    {
        id: 5, 
        price: 499,
        photos: [] 
    }, 
    { 
        id: 10,
        price: 26,
        photos: [
            "3.jpg" 
        ] 
    },
    { 
        id: 8,
        price: 78,
    }, 
];


let result = productS.filter(product => product.photos != false && product.photos != undefined);

console.log (result);


productS.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
        if (a.price < b.price) {
        return -1;
    }
    return 0;
})

console.log (products);


// задание 6


for (let p = 0; p < 10; alert(p++)){};



let q = 0;
for (q = 0; q < 21; q++){
    console.log ('*'.repeat(q));
};

