'use strict';
/*
задание 1

let a = 1, b = 1, c, d;
c = ++a;
alert(c); // a увеличено на 1 префиксной формой инкремента

d = b++;
alert(d); // b увеличено на 1 постфиксной формой так что выводится значение до инкрементации

c = 2 + ++a;
alert(c); // a увеличено еще на 1 относительно первого примера

d = 2 + b++;
alert(d); // 2 сложено с b до инкрементации т.е. с 2

alert(a); // a = 3 из примера 3
alert(b); // b = 3 из примера 4 т.к. инкрементация постфиксной формой


*/

// задание 2

/*
let a = 2;
let x = 1 + (a *= 2); // (a = a*2) = 4 затем x = 4 + 1 = 5
*/



// задание 3

let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите второе число"));

if (a >= 0 && b >= 0)
    alert (`Оба числа положительные. Их разница ${a - b}`);
else if (a < 0 && b < 0)
    alert (`Оба числа отрицательные. Их произведение ${a * b}`);
else if ((Math.sign(a) >= 0 && Math.sign(b) < 0) || (Math.sign(a) < 0 && Math.sign(b) >= 0))
    alert (`Оба числа имеют разные знаки. Их сумма ${a + b}`);


// задание 4
/**
Суммирует параметры
@returns {number} 
*/
function numbersSum(num1, num2){
    let result = num1 + num2;
    return result;
}

/**
@description Вычитает параметры
@returns {number} 
*/
function numbersSub(num1, num2){
    let result = num1 - num2;
    return result;
}

/**
@description Делит параметры
@returns {number} 
*/
function numbersDiv(num1, num2){
    let result = num1 / num2;
    return result;
}

/**
@description Перемножает параметры
@returns {number} 
*/
function numbersMul(num1, num2){
    let result = num1 * num2;
    return result;
}

//задание 5
/**
@description примнимает 2 числа и математическую функцию

@returns {number} 
*/
function mathOperator (arg1, arg2, operation){
    switch (operation){
        case numbersSum:
            let resultSum = numbersSum(arg1, arg2);
            return resultSum;
            break;
        case numbersSub:
            let resultSub = numbersSub(arg1, arg2);
            return resultSub;
            break;
        case numbersDiv:
            let resultDiv = numbersDiv(arg1, arg2);
            return resultDiv;
            break;
        case numbersMul:
            let resultMul = numbersMul(arg1, arg2);
            return resultMul;
            break;
    }
}



let g = mathOperator (4, 5, numbersSum);
alert (g);

let t = mathOperator (4, 5, numbersSub);
alert (t);

let y = mathOperator (4, 5, numbersDiv);
alert (y);

let u = mathOperator (4, 5, numbersMul);
alert (u);



//задание 6

let rubles = Number(prompt("Введите количство рублей"))


let resultRubles = (rubles % 10); //вычисление последней цифры 

if (resultRubles == 1)
    alert (`Ваша сумма в ${rubles} рубль зачислена`);

else if (resultRubles >1 && resultRubles < 5)
    alert (`Ваша сумма в ${rubles} рубля зачислена`); 
else 
    alert (`Ваша сумма в ${rubles} рублей зачислена`); 
   
