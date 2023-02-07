function Add(a, b) {
    return a+b;
}

function Subtract(a, b) {
    return a-b;
}

function Multiply(a, b) {
    return a*b;
}

function Divide(a, b) {
    return a/b;
}

function operate(first, second, operator){
    switch(operator === string){
    case ('+'):
        Add(first, second)
        break;
    case ('-'):
        Subtract(first, second)
    case ('*'):
        Multiply(first, second)
    case ('/'):
        Divide(first, second)
    default: 
    }
}