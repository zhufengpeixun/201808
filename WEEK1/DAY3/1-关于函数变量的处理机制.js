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