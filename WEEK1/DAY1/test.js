//=>需求：实现A和B两个变量交换值
var a = 12;
var b = 13;
/*
//=>方案一：创建第三方空变量
var c = null;
c = a;
a = b;
b = c;
console.log(a, b);
*/
a = a + b;//=>A存储和
b = a - b;//=>总和-B的值=原始A的值 =>给B了
a = a - b;//=>总和-A的值（此时的B存储的就是原始A的值）=原始B的值 =>给A了
console.log(a, b);