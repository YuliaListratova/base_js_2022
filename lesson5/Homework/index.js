// номер 1
// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// function getSquaredNumber (number) {
//     console.log(number**2);
// }
// const number = 5;
// getSquaredNumber(number);

function getSquaredNumber(number) {
  return number ** 2;
}
const result1 = getSquaredNumber(3);
console.log(result1);

// номер 2
// Сделайте функцию, которая возвращает сумму двух чисел.

// function sum (a, b) {
//     console.log(a + b);
// }
// const a = 1;
// const b = 2;
// sum (a, b);

function calcSum(a, b) {
  return a + b;
}
const result2 = calcSum(1, 2);
console.log(result2);

// номер 3
// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

function calc(a, b, c) {
  return (a - b) / c;
}
const result3 = calc(19, 3, 2);
console.log(result3);

// номер 4
// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function numberDayOfWeek(n) {
  switch (n) {
    case 1:
      return "Понедельник";
      break;
    case 2:
      return "Вторник";
      break;
    case 3:
      return "Среда";
      break;
    case 4:
      return "Четверг";
      break;
    case 5:
      return "Пятница";
      break;
    case 6:
      return "Суббота";
      break;
    case 7:
      return "Воскресенье";
      break;
    default:
      return "Неверное значение";
      break;
  }
}
const day = numberDayOfWeek(7);
console.log(day);

// номер 5
// Сделайте функцию, которая параметрами принимает 2 числа.
// Если эти числа равны - пусть функция вернет true, а если не равны - false.

function compareNumbers(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}
const compare = compareNumbers(5, 5);
console.log(compare);

// номер 6
// Сделайте функцию, которая параметрами принимает 2 числа.
// Если их сумма больше 10 - пусть вернет true, а если нет то - false.

function calcSumTen(d, e) {
  if (d + e > 10) {
    return true;
  } else {
    return false;
  }
}
const calcSumm = calcSumTen(3, 4);
console.log(calcSumm);

// номер 7
// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
// Если отрицательное - пусть функция вернет true, а если нет - false.

function negativeOrPositiveValue(f) {
  if (f < 0) {
    return true;
  } else {
    return false;
  }
}
const negativeOrPositive = negativeOrPositiveValue(-1);
console.log(negativeOrPositive);

// номер 8
// Сделайте функцию isNumberInRange, которая параметром
// принимает число и проверяет, что оно больше нуля и меньше 10.
// Если это так - пусть функция возвращает true, если не так - false.

function isNumberInRange(j) {
  if (j > 0 && j < 10) {
    return true;
  } else {
    return false;
  }
}
const range = isNumberInRange(17);
console.log(range);

// номер 9
// Дан массив с числами. Запишите в новый массив только те числа,
// которые больше нуля и меньше 10-ти. Для этого используйте
// вспомогательную функцию isNumberInRange из предыдущей задачи.

// const myArray = [-1, 2, 3, 4, 15];

// for (let i = 0; i < myArray.length; i++) {
//     console.log( myArray[i] );
//   }

// номер 10
// Сделайте функцию getDigitsSum (digit - это цифра),
// которая параметром принимает целое число и возвращает сумму его цифр.

// function getDigitsSum(number) {
//   let str = String(number);
//   let result = 0;
//   for (let i = 0; i < str.length; i++) {
//     result += Number(str[i]);
//   }
//   return result;
// }
// const sumDigits = getDigitsSum(713);
// console.log(sumDigits);

// номер 11
// Найдите все года от 1 до 2020, сумма цифр которых равна 13. 
// Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

for (let year = 1; year <= 2020; year++) {
    function getDigitsSum(year) {
        let str = String(year);
        let result = 0;
        for (let i = 0; i < str.length; i++) {
          result += Number(str[i]);
        }
        return result;
      } 
}  
// console.log(year);
