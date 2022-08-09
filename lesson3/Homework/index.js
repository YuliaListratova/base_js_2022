// BaseJS-HW-№1

// Вывести в терминал строку “Hello World!”
console.log("Hello World");


// Создать переменную для каждого типа данных
// Вывести в консоль редактора кода созданные переменные
// Вывести ее тип через оператор typeof и функцию typeof

// Number
let numberOfTasks = 10;
console.log(numberOfTasks);
console.log(typeof 10);
console.log(typeof(10))

// BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
console.log(typeof 1234567890123456789012345678901234567890n);
console.log(typeof (1234567890123456789012345678901234567890n));

// String
const userName = "Андрей";
console.log(userName);
console.log(typeof "Андрей");
console.log(typeof ("Андрей"));

// Boolean
const isAdmin = true;
console.log(isAdmin);
console.log(typeof true);
console.log(typeof (true));

// Null
const lastName = null;
console.log(lastName);
console.log(typeof null);
console.log(typeof (null));

// Undefined
let firstName;
console.log(firstName);
console.log(typeof firstName);
console.log(typeof (firstName));

// Object
const book = {
    title: "Война и мир",
    author: "Л.Н. Толстой",
    quote: "Надо жить, надо любить, надо верить.",
}
console.log(book.quote);
console.log(typeof book);
console.log(typeof (book));

//Symbol
//не используют


// BaseJS-HW-№2

// true     т по порядку позже д больше весит
console.log("кот" > "код"); 

// 24       конкатенация строк
console.log("2" + 2 * "2"); 

// true     null может равняться только null или undefined, и ничему другому
console.log(undefined == null); 

// false    null может равняться только null или undefined, и ничему другому
console.log(undefined != null); 

// false    null может равняться только null или undefined, и ничему другому
console.log(null == 0);

// false  = 2 > 3  3 в число
console.log(2 > "3");

// 1    =    0   -   0   +  1
console.log(null - false + true); 

// Nan число на строку
console.log(1 / "l");

// 6    =   2   *   3
console.log("2" * "3"); 

// 9O    =    9 (сложение)  O (конкатенация строк)
console.log(4 + 5 + "O"); 

// l45 (конкатенация строк) бинарный плюс 
console.log("l" + 4 + 5); 

// 2
console.log("4" - 2); 

// Nan
console.log("4" - "4x"); 

// true      23  =  23
console.log("23" == 23);

// false    null может равняться только null или undefined, и ничему другому
console.log(null == false); 

// -Infinity =  -4/0+1 при делении на ноль мат.бесконечность
console.log(" -4 "/ 0 + 1); 

// 1    =    0  +  1
console.log(null + 1); 

// Nan   =     NaN    +   0
console.log(undefined + null);

// false === равенство без приведения типов (число не равно строке)
console.log(1 === "1");

// false 2 приводится к номеру
console.log("2" > 10);

// false    undefined может равняться только null или undefined, и ничему другому
console.log(NaN == undefined);


// Закрепить тему
//  Number
console.log(1, typeof 1);
console.log(5 - "2", typeof (5 - "2"));
console.log(5 - "123abc", typeof (5 - "123abc"));

console.log("\n");

// BigInt
console.log(
  BigInt(0b11111111111111111111111111111111111111111111111111111),
  typeof BigInt(0b11111111111111111111111111111111111111111111111111111)
);

console.log("\n");

// String
console.log("Строка", typeof "Строка");
console.log("2" + 3, typeof ("2" + 3));

console.log("\n");

// Boolean
console.log(true, typeof true);
console.log(!0, typeof !0);
console.log(!!2, typeof !!2);
console.log(Boolean(""), typeof Boolean(""));

console.log("\n");

//Null, undefined
console.log(null, typeof null);
console.log(null + 0, typeof (null + 0));
console.log(null - "2", typeof (null - "2"));
console.log(null + "123", typeof (null + "123"));
console.log(null === undefined);
console.log(null == undefined);

console.log("\n");

//Symblol
console.log(Symbol("123"), typeof Symbol("123"));

console.log("\n");

//Object
const newUser = {
  name: "Vasya",
  age: 23,
  role: {
    id: 1,
    type: "admin",
  },
};

console.log(typeof newUser);
newUser.type = "normal_user";
console.log(newUser);