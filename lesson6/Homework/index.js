// number 1
// Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

const str = "ПреобрАзовать стрОку в массив сЛов";

const stringToarray = (str) => {
  return str.split(" ");
};
console.log(stringToarray(str));

// number 2
// Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

const deleteСharacters = (str, length) => {
  return str.substr(0, length);
};
console.log(deleteСharacters(str, 13));

// number 3
// Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами.
// При этом все символы строки необходимо перевести в верхний регистр.

const insertDash = (str) => {
  return str.toUpperCase().replaceAll(" ", "-");
};
console.log(insertDash(str));

// number 4
// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр
// первого символа строки из нижнего регистра в верхний.

const myStr = "регистр первого символа строки из нижнего регистра в верхний";

const capitalLetter = (myStr) => {
  return myStr.charAt(0).toUpperCase() + myStr.slice(1);
};
console.log(capitalLetter(myStr));

// number 5
// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

const str5 = "каждое слово начинается с заглавной буквы";

const capitalize = (str) => {
  return str.replace(/( |^)[а-яёa-z]/g, function (a) {
    return a.toUpperCase();
  });
};
console.log(capitalize(str5));

// number 6
// Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и заменяет регистр каждого символа
// на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

const changeRegister = (str) => {
  let Upper = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
  let Lower = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (Upper.includes(str[i])) {
      result.push(str[i].toLowerCase());
    } else if (Lower.includes(str[i])) {
      result.push(str[i].toUpperCase());
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
};
console.log(changeRegister(str));

// number 7
// Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов

const str7 = "«Дороги? Там, куда мы отправляемся, дороги не нужны».";

const removeChar = (str7) => {
  return str7.replace(/[^a-zа-яё0-9\s]/gi, "").trim();
};
console.log(removeChar(str7));

// number 8
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение
// с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.

// number 9
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

const strOne = "Hello World";
const strTwo = "heLLo worLd";

const comparison = (str1, str2) => {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};
console.log(comparison(strOne, strTwo));

// number 10
// Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

// const str1 = "HeLlO WoRlD";
// const str2 = "world";

const insensitiveSearch = (str1, str2) => {
  let newStr1 = str1.toLowerCase();
  let newStr2 = str2.toLowerCase();
  //  return newStr1.includes(newStr2);; // 1 вариант
  return newStr1.indexOf(newStr2); // 2 вариант
};
console.log(insensitiveSearch(strOne, strTwo));

// number 11
// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором
// несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

const str11 =
  "Несколько слов пишутся слитно без пробелов, каждое слово пишется с заглавной буквы";

const noSpaces = (str) => {
  return str.replaceAll(" ", "");
};
// console.log(noSpaces(str11));

const initCap = (str) => {
  const result1 = capitalize(str);
  const result2 = noSpaces(result1);
  return result2;
};

console.log(initCap(str11));

// number 12
// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case,
// при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

const strCamelCase =
  "СловаРазделяютсяСимволомПодчеркивания,СловаПишутсяСМаленькойБуквы";

// const initSnake = (srt) => {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       return str[i].replaceAll("", " ");
//     } else {
//       return str[i];
//     }
//   }
// };
// console.log(initSnake(strCamelCase));

// number 13
// Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

const quote = "Быть или не быть, вот в чем вопрос.";

// const repeatStr = (str, n) => {
//   return str.repeat(n);
// }
// console.log(repeatStr(quote, 5));

const reapetStr = (str, n) => {
    for (let i = 0; i < n; i++) {
        console.log(str);
    }
};
reapetStr(quote, 5);

// number 14
// Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

const adress = "\BASE_JS_2022\lesson6\Homework\index.js";

const path = (pathname) => {
  for (let i = pathname.length; i > 0 ; i--) {
    if (pathname[i] === "\\") {
      return pathname.substr(i + 1, pathname.length);
    }
  };
};
console.log(path(adress));


// number 15
// Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str
// и определяет заканчивается ли строка символами подстроки.



// number 16
// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную 
// после или до указанного символа char в зависимости от параметра pos.



// number 17
// Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. 
// По умолчанию подстрока вставляется в начало строки.


// number 18
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. 
// Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.


// number 19
// Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.


// number 20
// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.


// number 21
// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.


// number 22
// Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.


