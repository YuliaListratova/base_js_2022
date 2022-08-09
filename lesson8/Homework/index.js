// Решение 1
// const timer = (start, end) => {
//   let current = start;
//   console.log(current);
//   if (current > end) {
//     setTimeout(() => timer(current, end), 1000);
//     current--;
//   } else {
//     console.log(Таймер завершил работу на ${current} секунде);
//   }
// };
// timer(35, 30);
// Решение 2
// const timer = (start, end) => {
//   --start;
//   if (start > end) {
//     console.log(start);
//     setTimeout(() => timer(start, end), 1000);
//   } else {
//     console.log(Таймер завершил работу на ${start} секунде);
//   }
// };
// timer(35, 30);