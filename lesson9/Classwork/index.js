// const user = {
//     name: "Vasya",
//     age: 20,
// };

// console.log(user);

// const str = new String("строка");

// console.log(str);

// const user = new Object ({
//     name: "Vasya",
//     age: 20,
//     sayHi() {
//         console.log("пока");
//     }
// });
// console.log(user);

// // const admin = {
// //     __proto__: user,
// // };

// // console.log(admin);

// const user2 = {
//     name: "Petya",
//     age: 30,
// };

// // admin.__proto__ = user;

// // Object.setPrototypeOf({user});

// Object.prototype.sayHi = function() {
//     console.log(`Привет, ${this.name}!`);
// };
// console.log(user);
// console.log(user2);

// user.sayHi();
// user2.sayHi();

// const animal = {
//     jumps: "Прыжок!",
// };

// const rabbit = {
//     __proto__: animal,
//     jumps: "Заяц прыгнул!",
// };

// console.log(rabbit.jumps);

// delete rabbit.jumps;

// console.log(rabbit.jumps);
// console.log(rabbit);

// Object.prototype.sayHi = function() {
//     console.log(`Hi, I am robot ${this.model}`);
// }

// const robot = {
//     model: "R2D2",
//     created: 2150,
//     move: function () {
//         console.log("R2D2 just moved!");
//     },
// };

// const terminator = {
//     model: "T-800",
//     sayHi: function() {
//         console.log("I will be back");
//     },
// };

// Object.setPrototypeOf(terminator, robot);

// console.log(robot);
// console.log(terminator);

// robot.sayHi();
// terminator.move();

// Функции конструкторы

// function CreatedUser(name, age) {
//     this.name = name;
//     this.age = age;
// };

// CreatedUser.prototype.showName = function() {
//     console.log(this.name);
// };
// CreatedUser.prototype.showAge = function() {
//     console.log(this.age);
// };

// const userVasya = new CreatedUser("Vasya", 20);
// const userAsya = new CreatedUser("Asya", 19);

// console.log(userVasya);
// console.log(userAsya);

// userVasya.showName();
// userAsya.showName();

// function PostCard(from, to) {
//     this.from = from;
//     this.to = to;
//     this.show = function() {
//         console.log(`от ${this.from}, кому ${this.to}`)
//     }
// };

// PostCard.prototype.showFrom = function() {
//     console.log(this.from);
// };
// PostCard.prototype.showTo = function() {
//     console.log(this.to);
// };

// const direction1 = new PostCard("Нижний Новгород", "Москва");
// const direction2 = new PostCard("Москва", "Нижний Новгород");

// console.log(direction1);
// console.log(direction2);

// direction1.showFrom();
// direction2.showFrom();
// direction1.showTo();
// direction2.showTo();

// function CreatePostCard(from, to) {
//     this.from = from;
//     this.to = to;
//     this.show: function() {
//         console.log(` ${this.from}, ${this.to} `)
//     }
// };

// CreatePostCard.prototype.changeProps = function (newFrom, newTo) {
//     this.from = newFrom;
//     this.to = newTo;
// };

// const myPostCard = new CreatePostCard(me, NN);

// console.log(myPostCard);

// changeProps(u, Krd);

// class Animal {
//   constructor(props) {
//     this.name = props.name;
//     this.age = props.age;
//     this.hasTail = props.hasTail;
//   }

//   voise() {
//     console.log("I am animal");
//   }
// }

// const myAnimal = new Animal({ 
//     name: "Animal", 
//     age: 5, 
//     hasTail: true });

// console.log(myAnimal);
// myAnimal.voise();

// class Cat extends Animal {
//   constructor(props) {
//     super(props);
//     this.color = props.color;
//   }
// }

// const myCat = new Cat({ 
//     name: "Cat", 
//     age: 8, 
//     hasTail: true, 
//     color: "blue" });

// console.log(myCat);

// class Animal {
//     #name = "";

//     static type = "ANIMAL";

//   constructor(props) {
//     this.#name = props.name;
//     this.age = props.age;
//     this.hasTail = props.hasTail;
//   }

//   voise() {
//     console.log("I am animal");
//   }

//   get getName() {
//       console.log(this.#name);
//   }

//   set setName(newName) {
//       this.#name = newName;
//   }
// }

// const myAnimal = new Animal({ 
//     name: "Animal", 
//     age: 5, 
//     hasTail: true });

// class Cat extends Animal {
//   constructor(props) {
//     super(props);
//     this.color = props.color;
//   }
//   voice() {
//       console.log("I am cat");
//   }
// }


// const myCat = new Cat({ 
//     name: "Cat", 
//     age: 8, 
//     hasTail: true, 
//     color: "blue",
//  });

// myCat.getName;
// myCat.setName = "Dog";

// console.log(myCat); 


// class People {
//   constructor(props) {
//     this.name = props.name;
//     this.surname = props.surname;
//     };
  
//   getFullName() {
//     console.log(`${this.name} ${this.surname}`);
//   };
// };


// class Worker extends People {
//     constructor(props) {
//         super(props);
//         this.rate = props.rate;
//         this.day = props.day;
//       }
//       getSalary() {
//           console.log(this.rate * this.day);
//       }
//     }

// const employee = new Worker({
//     name:"Iuliia", 
//     surname: "Listratova", 
//     rate: 1000, 
//     day: 20});

// console.log(employee);
// employee.getFullName();
// employee.getSalary();


// Пример работы с DOM деревом

// console.log(document);

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector);
//     }

//     hide() {
//         this.$el.style.display = "none";
//     }
//     show() {
//         this.$el.style.display = "block";
//     }
// }

// class Box extends Component {
//     constructor(options) {
//         super(options.selector);
//         this.$el.style.width = this.$el.style.height = options.size + "px";
//         this.$el.style.background = options.color;
//     }
// }

// const box1 = new Box({
//     selector: "#box1",
//     size: 100,
//     color: "red",
// });

// box1.hide();
// box1.show();


class Component {
    constructor(selector) {
      this.$el = document.querySelector(selector);
    }
  
    hide() {
      this.$el.style.display = "none";
    }
  
    show() {
      this.$el.style.display = "block";
    }
  }
  
  class Box extends Component {
    constructor(options) {
      super(options.selector);
  
      this.$el.style.width = this.$el.style.height = options.size + "px";
      this.$el.style.background = options.color;
    }
  }
  
  const box1 = new Box({
    selector: "#box1",
    size: 100,
    color: "red",
  });
  
  const box2 = new Box({
    selector: "#box2",
    size: 80,
    color: "blue",
  });
  
  class Circle extends Box {
    constructor(options) {
      super(options);
  
      this.$el.style.borderRadius = "50%";
    }
  }
  
  const myCircle = new Circle({
    selector: "#circle",
    size: 70,
    color: "green",
  });