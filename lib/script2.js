"use strict";
// program 1
// function addition(a,b){
//     console.log(a+b)
// }
// addition('1',"11")
// program2
// function additionB(x,y){
//     if(typeof x == "number" && typeof y == "number"){
//         console.log(x+y)
//     }
//     else {
//         console.log("incorrect input")
//     }
// }
// additionB('2','4')
// program 3
function additionC(a, b) {
    console.log(a + b);
}
additionC(12, 4);
// program 4
let a = 10;
console.log(a);
let b = 20;
console.log(b);
// program 5
// let first_name = "chinmay"
// program 
let cities = ["pune", "mumbai", "nagpur", "chennai", "kolkata"];
console.log(cities);
let info = ["chinmay", "deshpande", 23];
info.push(45);
// program8
let obj = {
    firstName: "chinmay",
    lastName: "deshpande"
};
let obj2;
obj2 = {
    firstName: "chinmay",
    lastName: "deshapande",
    age: 23
};
// program 10
let fruit = ["apple", "mango", "banana", "grapes"];
fruit.forEach(function (el) {
    console.log(el.toLowerCase());
});
