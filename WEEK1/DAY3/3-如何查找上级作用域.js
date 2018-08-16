/*
/!*
 * [变量提升]
 *   var x;
 *   fn = AAAFFF000;  FN是在全局作用域下定义的
 *!/
var x = 100;
function fn() {
    console.log(x);
}
//=>自执行函数：代码运行到这一块，函数创建完成后立即执行
~function () {
    /!*
     * 自执行函数执行形成一个私有作用域(AAA)
     *   [变量提升]
     *     var x;
     *!/
    var x = 200;
    fn();//=>100
}();
*/

/*
var x = 100;
function fn() {
    var x = 200;
    return function () {
        console.log(x);
    }
}
var f = fn();//=>先执行FN，把FN执行的返回结果赋值给F（函数执行的返回结果就看RETURN返回的值即可）
f();//=>200
*/

/*
var ary = [10, 20];
function fn(ary) {
    ary.push(30);
    ary=[100];
    ary.push(40);
    console.log(ary);
}
fn(ary);
console.log(ary);
*/
