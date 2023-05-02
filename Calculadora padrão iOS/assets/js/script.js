const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const comma = document.querySelector('.comma');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;
let cont = 0;
let cont2 = 0;
let contPoint = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        
        if (isFirstValue === false && cont < 6) {
            getFirstValue(atr);
        }

        if (isSecondValue === false && cont2 < 6) {
            getSecondValue(atr);
        }
    });
}

function getFirstValue (el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
    cont++;
}

function getSecondValue (el) {
    if (firstValue != "" && sign != "") {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
        cont2++;
    }
}

function getSign () {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}
getSign();

equals.addEventListener('click', (e) => {
    result.innerHTML = "";

    if (sign === "+") {
        resultValue = firstValue + secondValue;
    }
    else if (sign === "-") {
        resultValue = firstValue - secondValue;
    }
    else if (sign === "x") {
        resultValue = firstValue * secondValue;
    }
    else if (sign === "/") {
        resultValue = firstValue / secondValue;
    }

    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
    contPoint = 0;

    checkResultLength();
});

function checkResultLength () {
    resultValue = JSON.stringify(resultValue);

    if (resultValue.length >= 6) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(3);
    }
}

negative.addEventListener('click', (e) => {
    result.innerHTML = "";

    if (firstValue != "") {
        resultValue = -firstValue;
        firstValue = resultValue;
    }

    if (firstValue != "" && secondValue != "" && sign != "") {
        resultValue = -resultValue;
    }

    result.innerHTML = resultValue;
});

percent.addEventListener('click', (e) => {
    result.innerHTML = "";

    if (firstValue != "") {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }

    if (firstValue != "" && secondValue != "" && sign != "") {
        resultValue = resultValue / 100;
    }

    result.innerHTML = resultValue;
});

clear.addEventListener('click', (e) => {
    result.innerHTML = 0;

    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
    cont = 0;
    cont2 = 0;
    contPoint = 0;
});

comma.addEventListener('click', (e) => {
    point = e.target.getAttribute('value');

    if (firstValue != "" && sign == "" && contPoint == 0) {
        result.innerHTML = "";
        firstValue += point;
        result.innerHTML = firstValue;
        cont++;
        contPoint++;
    }

    if (secondValue != "" && sign != "" && contPoint == 1) {
        secondValue += point;
        result.innerHTML = secondValue;
        cont2++;
        contPoint++;
    }
    
});