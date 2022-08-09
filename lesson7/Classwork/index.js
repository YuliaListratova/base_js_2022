// const myArr = [1, () => console.log("123"), "string"];

// console.log(myArr);
// console.log(typeof myArr);
// console.log(Array.isArray(myArr));

// const newArray = new Array(5);
// newArray[6] = 1;
// console.log(newArray);

// const user = {
//     id: 1,
//     name: "Vasya",
//     date: [1, 2, 3, 4]
// };

// const users = [
//     { id: 1, name: "Vasya" },
//     { id: 2, name: "Lena" },
//     { id: 3, name: "Olga" },
//     { id: 4, name: "Tolya" },
//     { id: 5, name: "Valya" },
// ]

// const myArr = [
//     ["один", "два"], //0
//     [3, 4], //1
//     [5, 6, ["семь", "восемь"]], //2
// ];

// console.log(myArr[2][2][1]);

// плохая практика
// const myArr = [1, 2, 3, 4, 5];
// myArr[1000] = 10;
// console.log(myArr)




// Полезные методы массивов

// find

// const myArr = ["один", "два", "три"];

// const foundItem = myArr.find((elem) => elem === "два");

// console.log(foundItem);



// const myArr = ["один", "два", "три"];

// let foundItem = "";

// for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] === "два") foundItem = myArr[i];
// }

// console.log(foundItem);

// 1 variant
// const users = [
//     { id: 1, name: "Vasya" },
//     { id: 2, name: "Olga" },
//     { id: 3, name: "Igor" },
//     { id: 4, name: "Lena" },
//     { id: 5, name: "Petya" },
//   ];

// //   const foundItem = users.find((user) => {
// //     console.log(user);
// //     return user.id === 1;
// // });

// / const users = [
    //     { id: 1, name: "Vasya" },
    //     { id: 2, name: "Olga" },
    //     { id: 3, name: "Igor" },
    //     { id: 4, name: "Lena" },
    //     { id: 5, name: "Petya" },
    //   ];
// const foundItem = users.find((user) => user.id === 1);


