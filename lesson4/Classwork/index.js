// if (4>3) {
//     console.log("Верно! 4 больше 3");
// } else {
//     console.log("test");
// }

// const myVar1 = 5;
// const myVar2 = 10;

// if (myVar1>myVar2) {
//     console.log(`${myVar1} больше ${myVar2}`);
// } else if (myVar1 < myVar2) {
//     console.log(`${myVar1} меньше ${myVar2}`);
// } else {
//     console.log ("end")
// }

// const myVar1 = 5;
// const myVar2 = 10;

// if (myVar1>myVar2) {
//     console.log(`${myVar1} больше ${myVar2}`);
// } else {
//     console.log ("end")
// }
// let result = myVar1 > myVar2 ? console.log(true) : console.log(false);
// тернарный оператор

// Конструкция типа “switch”
// const userRole = 'admin';

// switch(userRole) {
//     case 'student':
//         console.log("Текущий ползователь - student");
//         break;
//     case 'admin':
//         console.log("Текущий ползователь - admin");
//         break;
//     case "normal_user":
//         console.log("Текущий ползователь - normal_user");
//         break;
//     default:
//         console.log("Нет такого типа пользователя");
//         break;
// }

// console.log("vasya");

// Логические операторы (&&, ||, !)
// && -логическое И - возвращает первое значение false, если не false возвращает последнее true
// || - ИЛИ возвращает первое значение  true, если не true возвращает последнее false
// ! - НЕ

// console.log(1 || 0 || 4);
// console.log(1 && 0);

// console.log((1 && 2) || (4 && 0));


// Что делает JS пошагово:
// if (1&&0) {
//     console.log(result);
// }
// 1. Находит ключевое слово IF, понимает, что дальше - условие.
// 2. Внутри условия находит логическое И - &&.
// 3. Оператор приводит значения к булев типу - true/false (Важно: делает это "под капотом")
// 4. 1 -> true, 0 -> false. && возвращает Значение, которое является false при приведении в булев тип
// 5. Получаем 0, кот приводится в булев тип блоком if.

// ! (логическое “НЕ”)
// JS Приводит аргумент к логическому типу.
// Возвращает противоположное значение.

// const myVar = 5;

// if (myVar) {
//     console.log("TRUE");
// }


// console.log(null || 0 || "" || undefined);
// console.log("яблоко"  &&  true  &&  null  &&  1);
// console.log(0  ||  true  &&  "false"  ||  null);
// console.log(0  &&  true  ||  "false"  &&  null);
// console.log(!0 && !!1);
// console.log(!(null || (!"апельсин" && true)));


// Практика

// Задача 1
// С помощью условных операторов вывести на экран длину наибольшего отрезка из трех данных.

// const intervalOne = 5;
// const intervalTwo = 8;
// const intervalThree = 18;

// if (intervalOne>intervalTwo && intervalOne > intervalThree) {
//     console.log(`${intervalOne} - самый большой отрезок`);
// } else if (intervalTwo > intervalOne && intervalTwo > intervalThree) {
//     console.log(`${intervalTwo} - самый большой отрезок`);
// } else if (intervalThree > intervalOne && intervalThree > intervalTwo)
// console.log(`${intervalThree} - самый большой отрезок`);
//  else {
//     console.log ("end")
// }

// const intervalOne = 5
// const intervalTwo = 8
// const intervalThree = 13

// if (intervalOne >= intervalTwo) {
//     console.log('Первый интервал длинее второго!')
// } else if (intervalTwo >= intervalThree) {
//     console.log('Второй интервал длинее третьего!')
// } else {
//     console.log('Третий интервал самый длинный!')
// }


// Задача 2
//Реализовать систему рекомендаций для пользователя опираясь на значение переменной, хранящей значение температуры в градусах Цельсия.

// const currentTmp = -30;

// if (currentTmp <= -30) {
//     console.log('Оставайтесь дома!')
// } else if (currentTmp > -30 && currentTmp <= -10) {
//     console.log ("Сегодня холодно");
// } else if (currentTmp > -10 && currentTmp <= 5) {
//     console.log("Не холодно")
// } else if (currentTmp > 5 && currentTmp <= 15) {
//     console.log("Тепло")
// } else if (currentTmp >15 && currentTmp <=25) {
//     console.log("Очень тепло")
// } else if (currentTmp > 25 && currentTmp <35) {
//     console.log("Жарко")
// } else {
//     console.log("Пекло")
// }



// Циклы while и for
// Циклы while / do while

// let myVar = 0;

// while (myVar >= 0 && myVar <= 10) {
//     console.log(myVar += 1); // myVar = myVar + 1
// }

// do {
//     console.log(myVar += 1);
// } while (false);


// Циклы for

// const endOfLoop = 10;

// for (let couter = 0; couter <= endOfLoop; couter++) {
//     console.log(couter);
// }

// const endOfLoop = 10;

// for (let couter = 0; couter <= endOfLoop; couter++) {
//         console.log(couter);
//         if (couter === 5) break;
// }



// Практика

//Задача 1 решить через while, do-while, for
//Вывести в консоль заданную строку N раз. 

// const iterationText = "Итерация"
// // while
// const limit = 5;
// let counter = 1;
// while (counter <= 5) {
//     console.log(N += 1); 
// }



// let N = 0;
// while (N < 10) {
//     console.log(N += 1); 
// }

// let N = 0;
// do {
//     console.log(N += 1);
// } while (false);

// const limit = 10;

// for (let counter = 0; counter <= limit; counter++) {
//     console.log(counter);
// }

// // Задача 2
//  let carsAmount = 60; // N
//  const minCarsAmount = 10; // M



//  // Задача 3 
//  // год, номер которого кратен 400, - високосный
//  // кратны 100 - невисокосные
//  // кратен 4 - високосные

//  const startYear = 1800;
//  const endYear = 2020;

//  let leapYearsAmount = 0;
//  const firstSpaceTripYear = 1961;

console.log(6 / "3");
// Nan число на строку
console.log(1 / "l");

// 6    =   2   *   3
console.log("\t\n"); 