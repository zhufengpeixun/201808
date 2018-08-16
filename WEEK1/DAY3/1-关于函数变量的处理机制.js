/*
console.log(n, m, x);
var n = 12,
    m = 13,
    x = 14;

function fn(n) {
    console.log(n, m, x);
    var m = 20;
    x = 30;
    console.log(n, m, x);
}

fn(10);
console.log(n, m, x);
*/

console.log(x, y);//=>undefined*2
var x = 10,
    y = 20;

function fn() {
    console.log(x, y, z);//=>undefined 20 报错
    var x = y = 100;
    z = 30;
    console.log(x, y, z);//=>100 100 30
}

x = fn(20);
console.log(x, y, z);//=>undefined 100 30