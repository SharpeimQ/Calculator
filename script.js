const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const clear = document.querySelector('.clear');
const plus = document.querySelector('.plus');
const subtract = document.querySelector('.subtract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const display = document.querySelector('.display-hold');
const equal = document.querySelector('.equal');
const container = document.querySelector('.container');
const del = document.querySelector('.del');
const exp = document.querySelector('.exp');
const decimal = document.querySelector('.decimal');
const swap = document.querySelector('.swap');

let stored = '0';
let operator = '';
let temp = '';
let temp1 = '';
let backTemp = '';
let signTemp = '';
let calc = '';
let calcTemp = '';
let expo = '';

function update() {
    display.innerHTML = stored;
}
function Add(a, b) {
    return +a + +b;
}
function Subtract(a, b) {
    return +a - +b;
}
function Multiply(a, b) {
    return +a * +b;
}
function Divide(a, b) {
    return +a / +b;
}
function Exponent(a, b){
    return Math.pow(a,b);
}
function expRound(){
    calc = +calc;
    calcTemp = calc.toExponential(10);
    calc = calcTemp.toString().substring(0,8);
    expo = calcTemp.toString().substring(calcTemp.length - 4, calcTemp.length - 0);
    return calc+expo;
}
function operate(operator, a, b){
    switch(operator){
    case ('+'):
        calc = Add(a,b).toString();
        if (calc.length > 11) {
            return expRound();
        };
        return Add(a,b);

    case ('-'):
        calc = Subtract(a,b).toString();
        if (calc.length > 11) {
            return expRound();
        };
        return Subtract(a, b);

    case ('*'):
        calc = Multiply(a,b).toString();
        if (calc.length > 11) {
            return expRound();
        };
        return Multiply(a, b);

    case ('/'):
        calc = Divide(a,b).toString();
        if (calc.length > 11) {
            return expRound();
        };
        return Divide(a, b);

    case ('^'):
        calc = Exponent(a,b).toString();
        if (calc.length > 11) {
            return expRound()
        };
        return Exponent(a, b);

    default:
        break;
    }
}
//Calc Functions
function yi(){
    if (stored.length >= 11) {
        update();
        return stored;
    }
    if (stored === '0') {
        stored = '1';
        update();
        return stored;
    }
    stored = stored + '1';
    update();
    return stored;
}
function er(){
    if (stored.length >= 11) {
        update();
        return stored;
    }
    if (stored === '0') {
        stored = '2';
        update();
        return stored;
    }
    stored = stored + '2';
    update();
    return stored;
}
function san(){
    if (stored.length >= 11) {
        update();
        return stored;
    }
    if (stored === '0') {
        stored = '3';
        update();
        return stored;
    }
    stored = stored + '3';
    update();
    return stored;
}
function si(){
    if (stored.length >= 11) {
        update();
        return stored;
    }
    if (stored === '0') {
        stored = '4';
        update();
        return stored;
    }
    stored = stored + '4';
    update();
    return stored;
}
function wu(){
    if (stored.length >= 11) {
        update();
        return stored;
    }
    if (stored === '0') {
        stored = '5';
        update();
        return stored;
    }
    stored = stored + '5';
    update();
    return stored;
}
function liu(){
    if (stored.length >= 11) {
        update();
        return stored;
    }
    if (stored === '0') {
        stored = '6';
        update();
        return stored;
    }
    stored = stored + '6';
    update();
    return stored;
}
function qi(){
    if (stored.length >= 11) {
        update();
        return stored;
    }
    if (stored === '0') {
        stored = '7';
        update();
        return stored;
    }
    stored = stored + '7';
    update();
    return stored;
}
function ba(){
    if (stored.length >= 11) {
        update();
        return stored;
    }
    if (stored === '0') {
        stored = '8';
        update();
        return stored;
    }
    stored = stored + '8';
    update();
    return stored;
}
function jiu(){
    if (stored.length >= 11) {
        update();
        return stored;
    }
    if (stored === '0') {
        stored = '9';
        update();
        return stored;
    }
    stored = stored + '9';
    update();
    return stored;
}
function ling(){
    if (stored.length >= 11) {
        update();
        return stored;
    }
    if (stored === '0') {
        update();
        return stored;
    }
    stored = stored + '0';
    update();
    return stored;
}
function wipe(){
    stored = '0';
    update();
    return stored;
}
function addition(){
    temp = stored;
    operator = "+";
    stored = "+";
    update();
    return temp;
}
function minus(){
    temp = stored;
    operator = "-";
    stored = "-";
    update();
    return temp;
}
function times(){
    temp = stored;
    operator = "*";
    stored = "*";
    update();
    return temp;
}
function division(){
    temp = stored;
    operator = "/";
    stored = "/";
    update();
    return temp;
}
function operation(){
    temp1 = stored;
    temp1 = temp1.replace('+', "").replace('-',"")
                                .replace('*',"").replace("/","")
                                .replace('^', "");
    stored = operate(operator, temp, temp1);
    temp = '';
    temp1 = '';
    update();
    return stored;
}
function backspace(){
    if (stored === "+" || stored === "-" || stored === "*"
    || stored === "/" || stored === "^") {
        return stored;
    }
    backTemp = stored.slice(0, stored.length - 1);
    stored = backTemp;
    if (stored === '') {
        stored = "0";
    }
    update();
    return stored;
}
function Exponential(){
    temp = stored;
    operator = "^";
    stored = "^";
    update();
    return temp;
}
function Decimal(){
    if (stored.includes(".")) {
        update();
        return stored;
    } else {
        stored = stored + ".";
        update();
        return stored;
}}
function signChange(){
if (stored === '0') {
    return stored;
}
if (stored.includes("-")) {
        signTemp = stored.replace("-", "");
        stored = signTemp;
        update();
        return stored;
    }else {
        signTemp = "-" + stored;
        stored = signTemp;
        update();
        return stored;
    }
}

//Click Events
one.addEventListener('click', () => {
    yi();
});
two.addEventListener('click', () => {
    er();
});
three.addEventListener('click', () => {
    san();
});
four.addEventListener('click', () => {
    si();
});
five.addEventListener('click', () => {
    wu();
});
six.addEventListener('click', () => {
    liu();
});
seven.addEventListener('click', () => {
    qi();
});
eight.addEventListener('click', () => {
    ba();
});
nine.addEventListener('click', () => {
    jiu();
});
zero.addEventListener('click', () => {
    ling();
});
clear.addEventListener('click', () => {
    wipe();
})
plus.addEventListener('click', () => {
    addition();
})
subtract.addEventListener('click', () => {
    minus();
})
multiply.addEventListener('click', () => {
    times();
})
divide.addEventListener('click', () => {
    division();
})
equal.addEventListener('click', () => {
    operation();
});
del.addEventListener('click', () => {
    backspace();
})
exp.addEventListener('click', () => {
    Exponential();
})
decimal.addEventListener('click', () => {
    Decimal();
})
swap.addEventListener('click', () => {
    signChange();
})

//Keyboard Events
document.addEventListener('keydown', (e) => {
    console.log(e.key);
    switch(e.key) {
        case('1'): yi(); break;
        case('2'): er(); break;
        case('3'): san(); break;
        case('4'): si(); break;
        case('5'): wu(); break;
        case('6'): liu(); break;
        case('7'): qi(); break;
        case('8'): ba(); break;
        case('9'): jiu(); break;
        case('0'): ling(); break;
        case('c'): wipe(); break;
        case('C'): wipe(); break;
        case('+'): addition(); break;
        case('-'): minus(); break;
        case('*'): times(); break;
        case('/'): division(); break;
        case('='): operation(); break;
        case('Enter'): operation(); break;
        case('Backspace'): backspace(); break;
        case('^'): Exponential(); break;
        case('.'): Decimal(); break;
    }
})