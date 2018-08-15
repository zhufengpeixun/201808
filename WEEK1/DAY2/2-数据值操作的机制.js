console.log(n, m, x, y);//=>undefined
var n = 12;
var m = n;
m = 13;
console.log(n);

var x = [10, 20];
var y = x;
y[0] = 100;
console.log(x[0]);

var i = [10];
var j = i;
j = [20];
console.log(i);