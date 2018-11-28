// console.log("Hello World");
// function StartCars(car1, car2, car3, ...rest){
//     console.log(rest);
// }
// let carId = [1,2,3,4,5,6];
// StartCars(...carId);
// let a = typeof(1);
// let b = typeof('animal');
// let c = typeof(true);
// let d = typeof(function() {});
// let e = typeof({});
// let f = typeof(null);
// let g = typeof(undefined);
// let h = typeof(NaN);
// console.log(a,b,c,d,e,f,g,h);
// console.log(parseInt('ABC55')); //NaN - Since Parser always performs parsing from left to right.
// console.log(parseInt('55')); //55
// console.log(parseInt('55ABC')); //55 - When "A" will be triggered by parser- it will just ignore it.
// console.log(parseFloat('55.88')); //55.88
// console.log(parseFloat('2ABC')); //2

// for(let i=0; i<=4;i++){
//     if(i === 3)
//     continue;
//     console.log(i);
// }
// const constant = 5;
// constant =10;
// DOUBT - let str = console.log(toString(2));

// console.log(1==1); //true
// console.log(1==true); //true
// console.log(1 === 1); //true
// console.log(1 === true); //false
// console.log(true == true); //true
// console.log(true == true); //true

//IMPORTANT NOTE:
// Above results are calculated on the basis of 2 binary operators called as double equal and triple equal.
// The difference between both the operators is : Double equal operator performs type conversion where-ever necessary whereas triple equal doesn't do that.
// let i=123;
// console.log(i == "123"); //true
// console.log(i===123); //true
// console.log(i == 123); //true
// console.log(i === '123'); //false

// console.log(i != 123); //false
// console.log(i !== 123); //false
// console.log(i != 456); //true
// console.log(i !== 456); //true
// console.log(i != "123"); //false --> Doesn.'t performs type conversion
// console.log(i !== "123"); //true --> Type conversion was oerformed

// let year = "1967";
// console.log(typeof(year)); //String
// console.log(typeof(+year)); //Number

//IMPORTANT NOTE:-
//AND has higher precedence than OR.

// let userSettings = null;
// let defaultSettings = {name: "default"};
// console.log(userSettings || defaultSettings);
// // RESULT --> { name: 'default' }

// let userSettings = {name: 'user'};
// let defaultSettings = {name: 'default'};
// console.log(userSettings || defaultSettings);
// // RESULT --> { name: 'user' }

// let userSettings = null;
// let  defaultSettings = null;
// console.log(userSettings || defaultSettings);
// // RESULT --> null

// //USAGE OF NOT OPERATOR:
// let car = null;
// if(!car) {}

// //CONDITIONAL OPERATOR:
// console.log((5>4) ? "yes" : "no"); //RESULT --> yes

// let year = 1964;
// year += 10;
// console.log(year);
// //RESULT --> 1974

// function startCar(carId){
//     let message = 'Starting...'
// }
// startCar(123);
// console.log(message); //Error

// function startCar(carId){
//     let message = 'Starting';
//     let startFn = function turnKey(){
//         console.log(message); //RESULT
//     };
//     startFn();
// }
// startCar(123);
// //RESULT --> Starting

// function startCar(carId){
//     let message = 'Starting...';
//     let startFn = function turnKey(){
//         let message = 'Stop!'; //RESULT
//         console.log(message);
//     };
//     startFn();
// }
// startCar(123);
// //RESULT --> Stop!

// function startCar(carId){
//     let message = 'Starting...'; //RESULT
//     let startFn = function turnKey(){
//         let message = 'Stop!';
//     };
//     startFn();
//     console.log(message);
// }
// startCar(123);
// //RESULT --> Starting...

//IIFE - Immidiately Invoked Function Expression
// function(){
//     console.log('The message');
// }
//RESULT --> ERROR!

// (function(){
//     console.log('The message');
// })();
// //RESULT --> The message

// let app = (function() {
//     let carId = 123;
//     let getId = function() {
//         return carId;
//     };
//     return {
//         getId: getId
//     };
// })();
// console.log(app.getId());

// let o = {
//     carId: 123,
//     getId: function() {
//         console.log(this);
//         return this.carId;
//     }
// };
// console.log(o.getId());

// let getId = prefix =>  prefix + 10;
// console.log(getId('ID: '));

// let trackCar = function(carId, city = "NY") {
//     console.log('Tracking', carId, 'in' ,city, '.');
// };
// console.log( trackCar(123) );
// console.log( trackCar(123, 'Chicago'));

// function Car(){
//     let car = new Car();
// }

// class Car{
//     constructor(id) {
//         this.id = id;
//     }
// }
// let car = new Car(123);
// console.log(car.id);

// function Car(id) {
//     this.CarId = id;
//     this.start = function() {
//     console.log('Start : ', this.CarId);
//     }
// }
// let vehicle = new Car(123);
// vehicle.start();

// let jsonIn = '[{"carId":123}, {"carId":456}, {"carId":789}]';
// let carIds = JSON.parse(jsonIn);
// console.log(JSON.stringify(carIds));

// class Vehicle {
//     constructor() {
//         this.type = 'car';
//     }
//     start() {
//         return 'Starting :  ${this.type}';
//     }
// }

// class Car extends Vehicle {
// }
// let car = new Car();
// console.log(car.type);


// import { Car } from './module/car.js';

// let car = new Car(123);
// console.log(car.id);

// let intervalId = setInterval( function() {
//     console.log('1 second passed.'); }, 1000);

// //if need to cancel...
// clearInterval(intervalId);


// //REFERENCE ERROR:
// let car = newCar; //reference error - newCar is not defined and the program execution stops.
// console.log('Continuing...'); //this statement won't be executed.

// //TRY AND CATCH BLOCKS - ERROR HANDLING
// try {
//     let car = newCar;
// }
// catch(error) {
//     console.log('error : ', error);
// }
// console.log('Continuing...'); //This statement will be executed irrespective of error occurence in previous statements

// //FINALLY BLOCK - IT WILL ALWAYS EXECUTE.
// try {
//     let car = newCar;
// }
// catch(error) {
//     console.log('error : ', error);
// }
// finally{
//     console.log('This will always execute.');
// }

// //DEVELOPER DEFINED ERRORS - "throw" keyword
// try{
//     //code here
//     throw new Error('My custom error');
// }
// catch(error){
//     console.log('error : ', error);
// }
// finally{
//     console.log('This will always execute.');
// }

// //PROMISES:
// let promise = new Promise(
//     function(resolve, reject){
//         setTimeout(resolve, 100, 'some value'); //Result depends on what we are passing to the setTimeout function.
//     }
// );
// promise.then(
//     value => console.log('fulfilled : '+value),
//     error => console.log('rejected : '+error)
// );

// //DATA ACCESS USING HTTP
// //1. HTTP REQUESTS USING XHR
// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if(this.readyState == 4 && this.status == 200)
//     console.log(this.responseText);
// };

// xhttp.open("GET","http://myid.mockapi.io/api/v1/users",true);
// xhttp.send();

import $ from 'jquery';
let promise = $.get("http://myid.mockapi.io/api/v1/users");
promise.then(
data => console.log('success : '+data),
error => console.log('error : ', error));