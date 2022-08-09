// Видео

// const person = {
//     name: "Maxim",
//     age: 25,
//     greet: function() {
//         console.log("Greet")
//     },
// };

// const person = new Object({
//   name: "Maxim",
//   age: 25,
//   greet: function () {
//     console.log("Greet");
//   },
// });

// Object.prototype.sayHello = function () {
//   console.log("Hello!");
// };

// const lena = Object.create(person);
// lena.name = "Elena";

// const str = new String("I am string");

// 1
// Реализуйте класс Worker (Работник), который будет иметь следующие
// свойства: name (имя), surname (фамилия), rate (ставка за день работы),
// days (количество отработанных дней). Также класс должен иметь
// метод getSalary(), который будет выводить зарплату работника.
// Зарплата - это произведение (умножение) ставки rate на количество
// отработанных дней days. И метод getFullName() - имя и фамиля работника.

// class Worker {
//   constructor(options) {
//     this.name = options.name;
//     this.surname = options.surname;
//     this.rate = options.rate;
//     this.days = options.days;

//   };
//   getSalary() {
//     console.log(this.rate * this.days)
//   };
//   getFullName() {
//     console.log(`${this.name} ${this.surname}`)
//   };
// };

// const worker = new Worker({
//   name: "Iuliia",
//   surname: "Listratov",
//   rate: 2000,
//   days: 21,
// })

// console.log(worker);
// worker.getSalary();
// worker.getFullName();

// 2
// Напишите новый класс Boss, этот класс наследуется от класса Worker
// из прошлого задания. Появляется новые свойство: workers - количество
// работников. И зарплата считается по другому: произведение (умножение)
// ставки rate на количество отработанных дней и на количество работников.

// class Boss extends Worker {
//   constructor(options) {
//     super(options);
//     this.workers = options.workers;
//   };
//   getSalary() {
//     console.log(this.rate * this.days * this.workers);
//   };
// };

// const boss = new Boss({
//   name: "Ivan",
//   surname: "Petrov",
//   rate: 3000,
//   days: 21,
//   workers: 50,
// })

// console.log(boss);
// boss.getSalary();
// boss.getFullName();

// 3
// Модифицируйте класс Worker из предыдущей задачи следующим образом:
// сделайте все его свойства приватными, а для их чтения сделайте
// методы-геттеры.

// class Worker {

//   #name;
//   #surname;
//   #rate;
//   #days;

//   constructor(options) {
//         this.#name = options.name;
//         this.#surname = options.surname;
//         this.#rate = options.rate;
//         this.#days = options.days;
    
//       };

//   get myName() {
//     return this.#name;
//   };

//   get mySurname() {
//     return this.#surname;
//   };

//   get myRate() {
//     return this.#rate;
//   };

//   get myDays() {
//     return this.#days;
//   };

//   getSalary() {
//     console.log(this.#rate * this.#days)
//   };
//   getFullName() {
//     console.log(`${this.#name} ${this.#surname}`)
//   };
// };

// const worker = new Worker({
//   name: "Iuliia",
//   surname: "Listratov",
//   rate: 2000,
//   days: 21,
// });

// console.log(worker);
// console.log(worker.getmyName());
// console.log(worker.getmySurname());
// console.log(worker.getmyRate());
// console.log(worker.getmyDays());
// worker.getSalary();
// worker.getFullName();



// // 4
// // Модифицируйте класс Worker из предыдущей задачи следующим образом:
// // для свойства rate и для свойства days сделайте еще и методы-сеттеры.

// class Worker {

//   constructor() {

//   };

//   #name = "Iuliia";
//   #surname = "Listratov";
//   #rate = 3000;
//   #days = 21;

//   get myName() {
//     return this.#name;
//   };

//   get mySurname() {
//     return this.#surname;
//   };

//   get myRate() {
//     return this.#rate;
//   };

//   set myRate(newRate) {
//     this.#rate = newRate;
//   };

//   get myDays() {
//     return this.#days;
//   };

//   set myDays(newDays) {
//     this.#days = newDays;
//   };

//   getSalary() {
//     console.log(this.#rate * this.#days)
//   };
//   getFullName() {
//     console.log(`${this.#name} ${this.#surname}`)
//   };
// };

// const worker = new Worker

// // const worker = new Worker('Иван', 'Иванов', 10, 31);

// // console.log(worker.getRate()); //выведет 10
// // console.log(worker.getDays()); //выведет 31
// // console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// // //Теперь используем сеттер:
// // worker.setRate(20); //увеличим ставку
// // worker.setDays(10); //уменьшим дни
// // console.log(worker.getSalary()); //выведет 200 - то есть 20*10

// // 5
// // Реализуйте класс MyString, который будет иметь следующие методы:
// // метод reverse(), который параметром принимает строку, а возвращает
// // ее в перевернутом виде, метод ucFirst(), который параметром принимает
// // строку, а возвращает эту же строку, сделав ее первую букву заглавной
// // и метод ucWords, который принимает строку и делает заглавной первую
// // букву каждого слова этой строки.

// class MyString {
//   constructor() {}
//   reverse(string) {
//     return string.split("").reverse().join("");
//   }
//   ucFirst(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
//   ucWords(string) {
//     return string.replace(/( |^)[а-яёa-z]/g, function (a) {
//       return a.toUpperCase();
//     });
//   }
// }

// const str = new MyString();

// console.log(str.reverse("город"));
// console.log(str.ucFirst("город нижний новгород"));
// console.log(str.ucWords("город нижний новгород"));

// // 6
// // Реализуйте класс Validator, который будет проверять строки.
// // К примеру, у него будет метод isEmail параметром принимает строку
// // и проверяет, является ли она корректным емейлом или нет.
// // Если является - возвращает true, если не является - то false.
// // Кроме того, класс будет иметь следующие методы: метод isDomain
// // для проверки домена, метод isDate для проверки даты и метод isPhone
// // для проверки телефона.

// class Validator {
//   constructor() {}
//   isEmail(str) {
//     return str.indexOf("@") !== -1 && str.indexOf(".") !== -1;
//   }
//   isDomain(str) {
//     return str.indexOf(".com") !== -1 || str.indexOf(".net") !== -1;
//   }
//   isDate(str) {
//     let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
//     return date === null ? false : true;
//   }
//   isPhone(str) {
//     let phone = str.match(/\+7\ \([0-9]{3}\)\ [0-9]{3}-[0-9]{2}-[0-9]{2}/);
//     return phone === null ? false : true;
//   }
// };

// const validator = new Validator();

// console.log(validator.isEmail('iuliia@mail.ru'));
// console.log(validator.isDomain('list.net'));
// console.log(validator.isDate('15.04.2022'));
// console.log(validator.isPhone('+7 (831) 264-54-79')); 

// // 7
// // Реализуйте класс Student (Студент), который будет наследовать
// // от класса User, подобно тому, как это сделано в теоретической
// // части урока. Этот класс должен иметь следующие свойства: name
// // (имя, наследуется от User), surname (фамилия, наследуется от User),
// // year (год поступления в вуз). Класс должен иметь метод getFullName()
// // (наследуется от User), с помощью которого можно вывести одновременно
// // имя и фамилию студента. Также класс должен иметь метод getCourse(),
// // который будет выводить текущий курс студента (от 1 до 5).
// // Курс вычисляется так: нужно от текущего года отнять год поступления
// // в вуз. Текущий год получите самостоятельно.

// class User {
// 	constructor(name, surname) {
// 		this.name = name;
// 		this.surname = surname;
// 	}

// 	getFullName() {
// 		return this.name + ' ' + this.surname;
// 	}
// }

// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }
//   getCourse() {
//     return (new Date()).getFullYear() - this.year;
//   }
// } 

// const student = new Student('Юлия', 'Листратова', 2020);

// console.log(student.name); 
// console.log(student.surname); 
// console.log(student.getFullName()); 
// console.log(student.year); 
// console.log(student.getCourse());
