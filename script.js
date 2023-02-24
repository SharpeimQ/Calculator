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

let stored = '0';
let operator = '';
let temp = '';
let temp1 = '';
let temp2 = '';


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

function operate(operator, a, b){
    switch(operator){
    case ('+'):
        return Add(a, b);
    case ('-'):
        return Subtract(a, b);
    case ('*'):
        return Multiply(a, b);
    case ('/'):
        return Divide(a, b);
    default:
        display.innerHTML = stored;
    }
}

function update() {
    display.innerHTML = stored;
}

update();

//Numbers
one.addEventListener('click', () => {
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
});

two.addEventListener('click', () => {
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
});

three.addEventListener('click', () => {
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
});

four.addEventListener('click', () => {
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
});

five.addEventListener('click', () => {
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
});

six.addEventListener('click', () => {
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
});

seven.addEventListener('click', () => {
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
});

eight.addEventListener('click', () => {
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
});

nine.addEventListener('click', () => {
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
});

zero.addEventListener('click', () => {
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
});

//Operations
clear.addEventListener('click', () => {
    stored = '0';
    update();
    return stored;
})

plus.addEventListener('click', () => {
    temp = stored;
    operator = "+";
    stored = "+";
    update();
    return temp;
})

subtract.addEventListener('click', () => {
    temp = stored;
    operator = "-";
    stored = "-";
    update();
    return temp;
})


multiply.addEventListener('click', () => {
    temp = stored;
    operator = "*";
    stored = "*";
    update();
    return temp;
})

divide.addEventListener('click', () => {
    temp = stored;
    operator = "/";
    stored = "/";
    update();
    return temp;
})

equal.addEventListener('click', () => {
    temp1 = stored;
    temp2 = temp1.replace('+', "").replace('-',"")
                                .replace('*',"").replace("/","");
    temp1 = temp2;
    stored = operate(operator, temp, temp1);
    temp = '';
    temp1 = '';
    update();
    return stored;
});