//   let city = {
//     name: 'Boston',
//     number: 235000,
//     myFuncName: function (){
//         return this.name;
//     },
//     myFuncNumber: function (){
//         return this.number;
//     },
//     newFuncName: function (name){
//         this.name = name;
//     }
// }

// const say = function (phrase, phrase2) {
//     console.log(`${this.name}: ${phrase}`);
//     console.log(phrase2);
//   };
  
//   const myObject = {
//     name: "Vasya",
//   };
  
//   const newObject = {
//     name: "Petya",
//   };
  
//   const argsArray = ["Привет", "phrase"];
  
//   say.apply(myObject, argsArray);
  
//   // say.call(newObject, "И тебе привет!", "phrase");
//   const boundFunc = say.bind(newObject, "И тебе привет!", "phrase");
//   boundFunc();


// const myCity = {
//   name: "Moscow",
//   population: 10000000,
//   showName: function () {
//     console.log(this.name);
//   },
//   showPopulation: function () {
//     console.log(this.population);
//   },

//   changeKeyValue: function (key, newValue) {
//     switch (key) {
//       case "name":
//         this.name = newValue;
//         return;
//       case "population":
//         this.population = newValue;
//         return;
//       default:
//         console.log("Ключ не найден");
//         return;
//     }
//   },
// };


// const newCity = {
//     name: "NN",
//     population: 1500000,
// };

// myCity.showName().call(newCity);
// myCity.showPopulation.call(newCity);
// myCity.changeKeyValue.call(newCity, "name", "NY");
// myCity.changeKeyValue.apply(newCity, ["population", 5000]);

// const boundFunc = myCity.changeKeyValue.bind(newCity, "name", "LA");
// boundFunc();

// console.log(newCity);

// Замыкание

// const myFunc = () => {
//     const myVar = 5;

//     return(param) => {
//         console.log(myVar + param);
//     };
// };

// myFunc()(10);

// Карирование

// const myFunc = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c;
//         };
//     };
// };
// console.log(myFunc(2)(3)(10));

// Практика

// const volume = () => {
//     const hight = 10;

//     return(base) => {
//         console.log(hight * base);
//     };
// };

// volume()(25);

const myFunc = (a) => {
    return (b, c) => {
        return a * b * c;
        };
};
console.log(myFunc(2)(3, 10));