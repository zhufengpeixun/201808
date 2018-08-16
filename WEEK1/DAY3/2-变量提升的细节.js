/*//=>变量提升阶段函数就已经完成创建，所以在创建函数的代码体之前或者之后执行函数都是可以的，不会报错
fn();
function fn() {
    console.log('HELLO WORLD！');
}*/

/*
//=>匿名函数：函数表达式（把一个函数当做值赋值给一个变量或者其它的东西）
/!*
 * [变量提升]
 *   var fn;
 *   变量提升只对等号左边有用，等号右边是需要赋的值，是不进行变量提升的
 *!/
fn();//=>TypeError: fn is not a function   =>fn=undefined
var fn = function () {
    console.log('HELLO WORLD！');
};//=>fn=AAAFFF000
fn();//=>HELLO WORLD！
//=>真实项目中更喜欢这样创建函数，因为这种方式保证了：函数的执行在创建代码块的下面才可以执行，让JS编程逻辑更加严谨
*/


//=>带VAR的
// console.log(n);//=>undefined
// var n = 100;//<=>window.n = 100;
// console.log(n, window.n);//=>100/100

//=>不带VAR的
// console.log(n);//=>Uncaught ReferenceError: n is not defined （如果浏览器发现当前东西不是变量也是不是window的属性，就按照非法使用未被声明定义的变量来处理，结果就会报错）
// n = 100;//=>window.n=100
// console.log(n, window.n);//=>100/100  第一个也相当于window.n（浏览器首先看是否是声明过的变量，如果是变量按照变量来获取，如果不是变量看是否为window的属性，是他的属性，则调取属性值，“window.”可以适当的省略）

fn();
function fn() {console.log(1);}
fn();
function fn() {console.log(2);}
fn();
var fn = 10;
fn();
function fn() {console.log(3);}
fn();
function fn() {console.log(4);}
fn();







