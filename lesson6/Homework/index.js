// number 1
// Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

const str = "ПреобрАзовать стрОку в массив сЛов";

const stringToarray = (str) => {
    return str.split(' ');
}
console.log(stringToarray(str));

// number 2
// Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

const deleteСharacters = (str, length) => {
    return str.substr(0, length);
}
console.log(deleteСharacters(str, 13));

// number 3
// Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. 
// При этом все символы строки необходимо перевести в верхний регистр.

const insertDash = (str) => {
    return str.toUpperCase().replaceAll(" ", "-");
}
console.log(insertDash(str));

// number 4
// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр 
// первого символа строки из нижнего регистра в верхний.

const myStr = "из нижнего регистра в верхний";

const capitalLetter = (myStr) => {
    return myStr.charAt(0).toUpperCase() + myStr.slice(1);
}
console.log(capitalLetter(myStr));

// number 5
// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

const capitalize = (str) => {
    return str.replace(/( |^)[а-яёa-z]/g, function(a) {return a.toUpperCase()});
}
console.log(capitalize(str));

// number 6
// Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и заменяет регистр каждого символа 
// на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

const changeRegister = (str) => {
    let Upper = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    let Lower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    let result = [];
  
  for(let i=0; i<str.length; i++) {
    if(Upper.includes(str[i])) {
      result.push(str[i].toLowerCase());
    }
    else if(Lower.includes(str[i])) {
      result.push(str[i].toUpperCase());
    }
    else {
      result.push(str[i]);
    }
  }
  return result.join(''); 
}
console.log(changeRegister(str));

// number 7
// Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов

