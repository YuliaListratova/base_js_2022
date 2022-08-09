// // DOM

// // window
// console.log(navigator);
// console.log(history);
// console.log(location);
// console.log(screen);

// // document

// console.log(document.head);

// const block2 = document.querySelector(".block-2"); // находит первый элемент с классом block-2
// const block2 = document.querySelector("div"); // находит первый div
// const block2 = document.querySelector("#block-2"); находит первый элемент с id=block-2
// const block2 = document.querySelector(".block-2 .paragraph-2");
// console.log(block2.parentElement); // узел-родитель у block2
// console.log(block2.previousElementSibling); // предыдущий элемент на том же уровне
// console.log(block2.nextElementSibling); // следующий элемент на том же уровне
// console.log(block2.firstElementChild); // первый дочерний элемент
// console.log(block2.lastElementChild); // первый дочерний элемент


// Поиск эл
// const block2 = document.querySelector(".block-2"); // находит первый элемент с классом block-2
// const block2 = document.querySelector("div"); // находит первый div
// const block2 = document.querySelector("#block-2"); находит первый элемент с id=block-2
// const block2 = document.querySelector(".block-2 .paragraph-2");

// console.log(document.getElementById("block-1"));

// console.log(document.getElementsByTagName("div"));

// console.log(document.querySelectorAll("div"));

// const link = document.querySelector('a');
// const input = document.querySelector("input");

// console.log(link);

//plaseholder - заглушка

// innerText


// const header = document.createElement("header");
// header.className = "page-header";
// header.style.background = "yellow";
// header.style.height = "60px";
// header.style.display = "flex";
// header.style.justifyContent = "center";
// header.style.alignItems = "center";
// header.innerHTML = "Это шапка сайта";
// document.body.prepend(header);



// Создание To Do List, необходимо средствами JS 
// создать страницу на которой будут элементы:
// header содержащий заголовок страницы
// контейнер с контентом страницы
// поле ввода input
// список элементов (число элементов > 1)
// кнопка добавления To Do

// const header = document.createElement("header");
// header.className = "page-header";
// header.innerHTML = "Заголовок";
// header.style.height = "60px";
// header.style.display = "flex";
// header.style.justifyContent = "center";
// header.style.alignItems = "center";
// document.body.prepend(header);

// const content = document.createElement("content");
// content.className = "content-block";
// content.innerHTML = "Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника."
// content.style.height = "200px";
// content.style.display = "flex";
// content.style.justifyContent = "center";
// content.style.alignItems = "center";
// // document.body.append(content);
// header.after(content);

// const input = document.createElement("input");
// input.className = "input-block";
// input.style.height = "50px";
// document.body.append(input);

// СОБЫТИЯ

// ВСПЛЫТИЕ - часто на собесах
// первым отработает самый глубоко вложенный элемент
// прекращение всплытия event.stopPropagation
// event.stopImmediatePropagation
// event.preventDefault() - отменяет действие
// в чем разница? 


function handleToDoAdd() {
    const currentInput = input.value;
    const todoListLength = document.querySelectorAll("li").length;
    const newLi = document
}