'use strict';
// задание 1

class UnitsTensHundreds {
    constructor(num) {
        this.units = num % 10;
        this.tens = ((num - this.units) % 100) / 10;
        this.hundreds = (num - this.units - ((num - this.units) % 100)) / 100;
    }
}

/**
* проверка числа на диапазон и целочисленность,
* если проверка пройдена создается объект UnitsTensHundreds
* @param {number} - принимает число
* @return {object} - возвращает объект
*/
function userNumberCheck(num1) {
    if (num1 < 0 || num1 > 999) {
        console.log("ваше число вне диапазона");
        return {}
    }
    else if (!Number.isInteger(num1)) {
        console.log("вы не задали целое число");
        return {}
    }
    else {
        let resultObj = new UnitsTensHundreds(num1)
        return resultObj
    }
}

let userNumber = Number(prompt("Введите число от 0 до 999: "));
let res = userNumberCheck(userNumber);
console.log(res);

// задание 1.1

//es5

function Product(name, price) {
    this.name = name;
    this.price = price;
}


Product.prototype.make25percentDiscount = function () {
    this.price *= 0.75;
}



//es6
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25percentDiscount() {
        this.price *= 0.75;
    }
}

let phone = new Product("iphone", 1000);
console.log(phone);
phone.make25percentDiscount();
console.log(phone);


// задание 1.2
//es5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (str) {
    this.text = str;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.hilighted = false;
}



AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlited = function () {
    this.hilighted = true;
}


//es6
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(str) {
        this.text = str;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlited = false;
    }
    makeTextHighlited() {
        this.highlited = true;
    }
}


let pst1 = new Post("ivan", "helo", "10:10:2002");
console.log(pst1);
pst1.edit("hello world");
console.log(pst1);

let pst2 = new AttachedPost("John", "hi", "10:10:2020");
console.log(pst2);
pst2.edit("hi ivan");
pst2.makeTextHighlited();
console.log(pst2);