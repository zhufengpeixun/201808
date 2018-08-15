/*
 * ARG和形参默认存在映射机制
 *   1.形参变量修改传递进来的值，也会映射到对应的ARG上(ARG对应索引的值也会跟着修改)
 *   2.如果ARG基于索引改掉了某个值，对应形参变量的值也会跟着修改
 */

/*
function fn(x, y) {
    console.log(x, y);//=>10/20
    console.log(arguments);//=>[10,20]
    x *= 10;
    arguments[1] = 200;
    console.log(x, y);//=>100/200
    console.log(arguments);//=>[100,200]
}
fn(10, 20);
*/

/*
 * 函数执行传递一些实参，此时ARG中记录了这些信息，形参变量也一一记录这些信息，而之前讲到的ARG和形参的映射机制是建立在“形参变量和ARG中具体的某一个索引项对应的基础上”
 */
/*
function fn(x, y) {
    //x, y => 10/undefined
    //arguments => [10]
    var arg = arguments;
    x = 100;
    console.log(arg[0]);//=>100

    //=>ARG的第一项和X存在映射机制;但是ARG的第二项和Y是毫无关系的;
    // y = 200;
    // console.log(arg[1]);//=>undefined
    // arg[1] = 300;
    // console.log(y);//=>undefined
}
fn(10);
*/


/*
 * 在JS的非严格模式下才会存在映射机制，严格模式下是不存在映射机制的
 */
"use strict";//=>使用JS中的严格模式
function fn(x, y) {
    console.log(x, y);//=>10/20
    console.log(arguments);//=>[10,20]
    x *= 10;
    arguments[1] = 200;
    console.log(x, y);//=>100/20
    console.log(arguments);//=>[10,200]
}
fn(10, 20);
