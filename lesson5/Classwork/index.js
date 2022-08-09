// const myVar = "строка";

// console.log(Object.getPrototypeOf(myVar));
// console.log(myVar.bold;

// const myArray = [10, 20, 30, 50, 235, 3000];
 
// for (let i = 0; i < myArray.length; i++) {
//      const firstArrayElemetn = myArray[i].toString;
//      if (
//          firstArrayElemetn[0] === '1' || 
//          firstArrayElemetn[0] === "2" ||
//          firstArrayElemetn[0] === "5"
// ) {
//         console.log(myArray[i]);
//   }
//  }


// Основы функции
// Function Declaration - объявление функции
// Function Expression - функциональное выражение
// Arrow Function - стрелочная функция

//  function showMessage () {
//      console.log("hello");
//  }
//  showMessage();

//  const user = "Vasya";

//  function greetUser (name) {
//      console.log(`Привет, ${name}`);
//  }
//  greetUser(user);

// const user = {
//     name: "Vasya",
//     age: 18,
// };

// function checkAccess (age) {
//     if (age < 18){
//         console.log("Доступ разрешен");
//     } else {
//         console.log("Доступ разрешен");
//     }
// }

// function showAllowedMsg () {
//     console.log("Доступ разрешен");
// }

// function showDeniedMsg () {
//     console.log("Доступ запрещен");
// }

// checkAccess(user.age);


// const user = {
//     name: "Vasya",
//     age: 18,
// };

// Function Declaration

// function checkAccess (age) {
//     if (age < 18){
//         console.log("Доступ разрешен");
//     } else {
//         console.log("Доступ разрешен");
//     }
// }

// Function Expression

// const showAllowedMsg = function () {
//     console.log("Доступ разрешен");
// }
// const showDeniedMsg () {
//     console.log("Доступ запрещен");
// }

// checkAccess(user.age);

// Директива return

// function calcValue (a, b) {
//     return a+b;
// }

// const result = calcValue(3, 5);

// console.log(result);

// const user = {
//     name: "Vasya",
// };
// const greetMsg = "Привет";
// function getName(user) {
//     return user.name || "гость"
// }
// function sayHi(text, name = getName()){
//     console.log(`${text}, ${name}!`);
// }
// sayHi(greetMsg, getName(user));

// функция внутри функции callback

// const name = "vasya";
// function showMsg () {
//     console.log(name)
// }
// showMsg ();

// то что внутри функции не доступно снаружи,
// но то что снаружи доступно внутри функции.


// 1 задача

// 2 задача

// const calcPower = function (num, power=1) {
//     if (typeof num !== "number") {
//         const errorMsg = "Некорректные аргументы";
//         return errorMsg;
//     } 
//     return num ** power;
// };

// const result = calcPower(2, 3);

// console.log(result);

// 3 задача

// const myArray = [5, 10, 15];

// const calAaverageValue = function (arr) {

//     if(!arr.length) {
//         return "Пустой";
//     }

//     let sum = 0;

//     for (let i = 0; i < myArray.length; i++) {
//         sum += arr[i];
//     }
    
//     return sum / arr.length
// } 

// console.log(calAaverageValue(myArray));


// Практика

// 1 задача

// const msgsAmount =  5;
// const message = "Сообщение";

// const showMessage = (msg, count) => {
//     for (let i = 1; i <= count; i++) {
//         console.log(`${msg} ${i}`);
//     }
// };

// showMessage(message, msgsAmount);

// 2 задача

// const myChar = "н";

// const isMyCharVowel = (char) => {
//     const vowels = "ауоыэяюёие";

//     if (vowels.includes(char)) {
//         return "Гласная!";
//     }
//         return "Не гласная";
// };

// console.log(isMyCharVowel(myChar));



