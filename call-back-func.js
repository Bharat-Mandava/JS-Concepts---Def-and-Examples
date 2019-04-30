//callbackfunctions

let add = (a,b) => a+b;

let multiply = (a,b) => a*b;

let calc =(num1, num2, callback) => callback(num1,num2);

console.log([calc(2,4,multiply)])
