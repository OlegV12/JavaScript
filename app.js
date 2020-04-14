"use  strict";

// задание 3а
let btn = document.querySelector('.modalWindowBtn');
let modalWindow = document.querySelector('.modalWindow');
btn.addEventListener('click', function () {
    modalWindow.classList.remove('doNotShow');
})
let cancelBtn = modalWindow.querySelector('.cancel');
cancelBtn.addEventListener('click', function () {
    modalWindow.classList.add('doNotShow')
})




//задание 4
let buttons = document.querySelectorAll('.button');
buttons.forEach(function clickListen(element) {
    element.addEventListener('click', function (event) {
        let prod = event.target.parentNode;
        let imag = prod.querySelector("img");
        let button = prod.querySelector("button")
        let desc = prod.querySelector('.desc');
        imag.style = "display: none";
        desc.style = "display: block";
        button.innerText = "Отмена";
        button.addEventListener('click', function (event) {
            imag.style = "display: block";
            desc.style = "display: none";
            button.innerText = "Подробнее";
            clickListen(button);

        })
        console.log(imag);
        console.log(button);
    })
})

// задание 5
function chess() {
    let tbl = document.createElement('table');
    // создаем 9 рядов таблицы
    for (let rows = 0; rows < 9; rows++) {
        let tr = document.createElement('tr');
        tbl.appendChild(tr);
        // создаем 9 строк в каждом ряду
        for (cols = 0; cols < 9; cols++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
    }
    document.body.appendChild(tbl);
    tbl.border = "solid";


    let square = tbl.querySelectorAll('td');
    let indexLetters = 0;
    let indexNumbers = 8
    square.forEach(function (element, index) {
        element.style.height = '30px';
        element.style.width = '30px'

        // окрашиваем нечетные квадраты в черный
        if (index % 2 != 0) {
            element.style.backgroundColor = "black"
        }
        // именуем нижний ряд
        if (index > 71) {
            element.style.backgroundColor = "white";
            let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', null];
            element.innerText = letters[indexLetters];
            indexLetters++;
        }

        // нумеруем правый ряд
        /* тут у меня не получилось создать проверку 
        let i = [8, 17, 26, 35, 44, 53, 62, 71]
        if (index in i)
        нумеровались только первые ячейки
        по этому записал все варианты так
        */
        if (index == 8 || index == 17 || index == 26 || index == 35 || index == 44 || index == 53 ||
            index == 62 || index == 71) {
            element.style.backgroundColor = 'white';
            element.innerText = indexNumbers;
            indexNumbers--;
        }
    }
    )


}
chess();


