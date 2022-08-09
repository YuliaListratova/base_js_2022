// Практика

// 1
// Написать функцию, которая будет принимать массив чисел, содержащий целые положительные и целые отрицательные числа,
// в качестве результата возвращать сумму четных положительных элементов переданного массива.

const myArray = [-4, -3, -2, -1, 1, 2, 3, 4, 5];

const sumEven = (sum) => {
  const result = sum
    .filter((a) => a > 0 && a % 2 === 0)
    .reduce((sum, current) => sum + current);
  return result;
};
console.log(sumEven(myArray));

// 2
// Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся значения из переданного массива,
// в качестве результата возвращать новый массив с уникальными значениями из исходного.

const myArr = [6, 3, 45, 2, 3, 8, 32, 6];

const getUn = (arr) => {
  const result = [];
};

// const myArr = [6, 3, 45, 2, 3, 8, 32, 6];

// const uniqueValues = (value) => {
//     return Array.from(new Set(value))
//     };
// console.log(uniqueValues(myArr));

// 3
//  Написать функцию  которая будет принимать два массива, и будет сравнивать их, если они идентичны
// (элементы совпадают по значению и по индексу) то функция возвращает true, в противном случае false.

// BaseJS-HW-№6

// 1
// Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

const poem = [
  "Белеет парус одинокой",
  "В тумане моря голубом!",
  "Что ищет он в стране далекой?",
  "Что кинул он в краю родном?",
];

const mapArr = poem.map((myString) => myString.length);
console.log(mapArr);

// 2
// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19].
// Использую метод reduce() напишите функцию currentSums(numbers),
// которая возвращает новый массив из такого же числа элементов,
// в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

const currentSums = (numbers) => {
  const result = [];
  const totalSum = numbers.reduce((accum, currentEl) => {
    result.push(accum);
    return accum + currentEl;
  });
  result.push(totalSum);
  return result;
};
console.log(currentSums(numbers));

//     numbers.reduce(function(sum, current, i) {
//         return result[i] = sum + current
//     }, 0);
//     console.log(result);
// };

//currentSums(numbers);

// 3
// Напишите код, который получает из массива чисел новый массив, содержащий пары чисел,
// которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.



// 4
// Напишите код, создающий массив, который будет состоять из первых букв слов строки str.

const str = "Будет состоять из первых букв слов строки str";

const firstLetter = (myStr) => {
     return myStr.split(" ").map((elem) => elem[0]);
  };
  console.log(firstLetter(str));


// const newArray = str.split(" ").charAt(0);
// console.log(newArray);
// const firstLetter = newArray.charAt(0);
// console.log(firstLetter);

// 5
// Напишите код, создащий массив, который будет состоять из строк, состоящих 
// из предыдущего, текущего и следующего символа строки str.

const myString = "LoremIpsum";

const arr = (str) => {
  const result = str
    .split("")
    .map((elem, i, arr) => arr[i - 1] + elem + arr[i + 1])
    .join();
  return result.replace(/undefined/g, "").split(",");
};

console.log(arr(myString));

// 6
// Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, 
// в массив цифр расположенных по убыванию их значений.

const myNumbers = [2, 3, 5, 7, 11, 13, 17, 19];

const newNumbers = (number) => {
    return number.sort((a, b) => b - a);
};
console.log(newNumbers(myNumbers));

// 7
// Напишите код, объединяющий три массива цифр, и располагающий цифры, 
// в полученном массиве, в порядке убывания их значений через пробел.

const arr1 = [3, 15, 8];
const arr2 = [1, 13, 17];
const arr3 = [4, 9, 45];

const threeArr = (arg1, arg2, arg3) => {
    return arg1
    .concat(arg2, arg3)
    .sort((a, b) => b - a);
};
console.log(threeArr(arr1, arr2, arr3));

// 8
// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. 
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

const myArrNumbers = [[1, 2, 3], [4, 5], [6]];

const sumArr = (num) => {
    return num
    .flat()
    .reduce((accum, current) => accum + current);
};
console.log(sumArr(myArrNumbers));


// 9
// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.


// 10
// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.



// 11
// Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. 
// Первым параметром функция принимает значение, которым заполнять массив, 
// а вторым - сколько элементов должно быть в массиве. 
// Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
