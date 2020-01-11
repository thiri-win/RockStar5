// normal function
function add(a,b) {
    return a + b;
}

// function with variable
var sub = function sub(a,b) {
    return a-b;
}

// arrow function with return keyword
var mul = (a,b) => {
    return a * b;
}

// arrow function with one command line inside
var div = (a,b) => a / b;

console.log(add(3,4));
console.log(sub(3,4));
console.log(mul(3,4));
console.log(div(8,4));
