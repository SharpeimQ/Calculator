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
        console.log('oops');
    }
}
