// // const myObj = { name: "Vasya", surname: "Ivanov", age: 20};
// const myObj = "has error"
// const myObjJson = '{"name":"vasya", "suname":"Ivanov", "age": "20"}';

// // console.log(typeof JSON.stringify(myObj));
// // console.log(JSON.parse(myObjJson));

// // const newObj = JSON.parse(JSON.stringify(myObj));

// try {
//     const parseStr = JSON.stringify(myObj);
//     console.log(parseStr);
// } catch (e) {
//     throw new Error("Ошибка в блоке тут");
// } finally {
//     console.log("выполнится в любом случае");
// }


// https://httpstat.us/
// "https://jsonplaceholder.typicode.com/users";

// на собесе спрашивают
// Цикл CRUD

// xhr 

// fetch

// const sendRequest = async (url) => {
//     const response = await fetch(url);
//     result = await response.json();
//     return result;
// };

// sendRequest(fetchURL)


//=================================================

// const sendRequest = async (url, fetchParams = {}) => {
//     const response = await fetch(url, fetchParams);
//     result = await response.json();
  
//     return result;
//   };
  
//   const user = { name: "Vasya", surname: "Ivanov" };
  
//   const fetchParams = {
//     method: "POST",
//     body: JSON.stringify(user),
//     header: { "Content-Type": "application/json" },
//   };
  
//   sendRequest(fetchURL, fetchParams).then((res) => console.log(res));
  
//   sendRequest(`${fetchURL}/1`).then((res) => console.log(res));

// ===================================================

// MAP, SET

// MAP
 const myObj = {name:"Vasya", suname:"Ivanov"};
//  const myObjToArray = [
//      ["name", "vasya"]
//      ["suname", "Ivanov"]
//  ];

//  console.log(Object.entries(myObj));
//  console.log(Object.fromEntries(myObjToArray));

 const map = new Map(myObjToArray);

 map.set("newKey", "newValue");
 console.log(map);

 // Микротаски - промисы (код в
 // методах then/catch/finally)

 // Макротаски - setTimeout/setInterval

 //ивентлуп loupe