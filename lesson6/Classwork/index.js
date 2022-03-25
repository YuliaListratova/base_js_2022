// const goToThePlase = (plase) => {
//     console.log(`Иду в ${plase}! Хэхэй`);
// };

// const user = {
//     name: "Ivan",
//     age: 18,
//     goToUniversity: () => goToThePlase("универ"),
//     };

// user.goToUniversity();

// const nameKey = "name";
// const user = {
//     [nameKey]: "Ivan",
//     age: 18,
//     };
// //console.log(user);
// console.log(user["age"]);

// У объекта все ключи - строки.

// const user = {
//     name: "Ivan",
//     age: 18,
// };
// user.name = "Petya";
// delete user.age;
// console.log(user);

// const myFavoriteFilm = {
//     titleFilm: "Доктор Стрэндж",
//     releaseDate: "25.10.2016",
//     directorName: "Скотт Дерриксон",
//     country: "США",
// }
// myFavoriteFilm.income = "$677 718 395";

// myFavoriteFilm.showtitleFilm = () => console.log(myFavoriteFilm);

// delete myFavoriteFilm.releaseDate;

// console.log(myFavoriteFilm);

// const myNumber = 10.123;

// console.log(Object.getPrototypeOf(myNumber));

// console.log(myNumber.toFixed(2));

// new - устаревшее

// const myNumber = 2.3e4; // e - добавляет 0;
// console.log(myNumber);

// parseInt - для целых чисел
// parseFloat - для дробных чисел

// console.log(parseInt("654a123"));
// console.log(parseInt("6.54a123"));

//console.log(parseFloat("6.54a123"));

//console.log(parseInt("123", 8));

//const myNumber = "123.3";
//if(typeof myNumber === "number") console.log("Число!");
// if(isNaN(myNumber)) console.log("Не число!");

//console.log(isFinite(10 / 0));

// console.log(Math.ceil(myNumber)); // ceil = потолок, округляет в большую сторону
// floor = "пол" в меньшую

//console.log(Math.random());

// const myArray = [1, 4, 10, 20, 14];

// console.log(Math.max(...myArray));
// console.log(Math.min(...myArray));

//const myString = '\u00A9 \t"Привет" \n - сказал Вася';

// const myName = " Ylia"
// console.log(myName);
// console.log(myName.trim()); // схлопывает пробелы по краям

// const myString = "Widget with id";

// console.log(myString.indexOf("id", 2));

// const newString = myString.slice

// Практика
// function randNumber(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }

//   console.log(randNumber(1, 10));

//   const myFunc = (min, max) => {
//      const result = Math.random() * (max - min) + min;
//      return result.toFixed();
//   }
//   console.log(myFunc(1, 20));

//2

// const myStr = "строка";
// const isCharBig = (str, pos) => {
//   if (!str[pos]) {
//     return "Ошибка";
//   }
//   if (str[pos] === str[pos].toUpperCase()) {
//     return "Заглавная";
//   }
//   return "Не заглавная";
// };
// console.log(isCharBig(myStr, 10));

//3

// const myConst = "snfdvfd jhf jj kdj  word nfv word j";
// const replaceFunc = (str, findValue)

const replaceAll = (str, subStr, replaceStr) => {
    for (let i = 0; i < str.length; i++) {
        let foundIndex = str.indexOf(subStr);
        if (foundIndex === -1) return str;
        str =
            str.slice(0, foundIndex) +
            replaceStr +
            str.slice(foundIndex + subStr.length);
    }
    return str;
};

console.log(replaceAll("widget for id", "id", "xxx"));