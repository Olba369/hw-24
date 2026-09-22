/////////1.
// const queue = ["Аня", "Богдан"];

// console.log(queue[0]); // Аня
// queue[0] = "Аня2";
// console.log(queue);

// queue.push("Вipa");
// queue.push("Вipa2");
// console.log(queue);
// console.log(queue.length);
// queue.pop();
// console.log(queue);

// queue.unshift("Вова", "Вова");
// console.log(queue); //вивести масивчик))
// queue.shift();
// console.log(queue); //вивести масивчик))

//////2.
// Є масив [10, 20, 30, 40].
// Видали перший і останній елементи,
// збережи їх у змінні first і last.
// Виведи суму first + last і масив, що залишився.

// const arr = [10, 20, 30, 40];
// let result = 0;
// arr.shift();
// arr.pop();
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   result = result + arr[i];
// }
// console.log(result);
// /////////////////////////////////////////
// const arr = [10, 20, 30, 40];
// let result = 0;
// for (const sum of arr)
//   {result = result + sum}
// console.log(result);
// //////////////////////////////////

// const tasks = [
//   { id: 2, title: "Покласти хліб в тостер", done: false },
//   { id: 3, title: "Зїсти тост", done: true },
// ];
// const newTask = { id: 1, title: "Купити хліб", done: false };
// tasks.push(newTask);
// tasks.shift();
// console.log(tasks);
//////////////////
//4. Напиши функцію addUser(users, name),
// яка додає нового користувача в кінець масиву.
// id має бути на 1 більшим за id останнього елемента
// (якщо масив порожній - 1).
// const user = [
//   { id: 1, name: "Вася" },
//   { id: 2, name: "Коля" },
//   { id: 3, name: "і остальниє успєшниє люді" },
// ];
// console.log(user.length);
//const newUser [{ id: 3, name: "і остальниє успєшниє люді"}];
//function addUser(users) {return user.map {}
//////////////////////////////////
//////5. Знайди перше число, більше за 10, у масиві [3, 8, 12, 5, 20]
// const numbers = [3, 8, 12, 5, 20];
// const result = numbers.find((item) => item > 10);
// console.log(result);
//////////////////////////////////////////
//////////6. Знайди перший рядок довжиною більше 5 символів у
// ['кіт', 'собака', 'пес', 'ведмідь'].
// Що повернеться, якщо таких немає?
// const animals = ["кіт", "ака", "пес", "мідь"];
// const result = animals.find((item) => item.length > 5);
// console.log(result);// undefined
//////////////////////////////////////////
///////////7. Знайди перше від'ємне число в масиві
// // [4, 0, -2, 7, -9]. Якщо його немає - виведи 'Від'ємних немає'.
// const numbers = [4, 0, -2, 7, -9];
// const result = numbers.find((item) => item < 0);
// console.log(result); // undefined
//////////////////
////8. Знайди користувача з id === 2. Виведи його ім'я.
// const user = [
//   { id: 1, name: 'Аня', age: 25},
//   { id: 2, name: 'Богдан', age: 17},
//   { id: 3, name: 'Віра', age: 32},];
// const secId = user.find((item) => item.id === 2);
// console.log(secId.name);//Богдан
/////////////////////////
///9. Напиши функцію getUserName(users, id),
//  яка повертає ім'я користувача або 'Невідомий',
// якщо такого id немає.
// const user = [
//   { id: 1, name: "Аня", age: 25 },
//   { id: 2, name: "Богдан", age: 17 },
//   { id: 3, name: "Віра", age: 32 },
// ];

// function getUserName(users, id) []
// console.log(
//   user.find((arr) => {
//     if (arr.id === 2) {
//       return arr.name;
//     } else {
//       return "Невідомий";
//     }
//   }),
// );
///////////////////////////

// 10.  Знайди перший товар, якого немає в наявності, і виведи його назву.
// const products = [
//   { name: "Ноутбук", price: 30000, inStock: true },
//   { name: "Миша", price: 800, inStock: false },
//   { name: "Клавіатура", price: 2500, inStock: false },
// ];
// const result = products.find(function (item) {
//   return item.inStock === false;
// });
// console.log(result.name);
//////////////////
// ///////////11. Залиш тільки слова, що починаються на 'к':
// const anml = ["кіт", "собака", "кінь", "миша", "корова"];
// const result = anml.filter(function (item) {
//   return item[0] === "к";
// });
// console.log(result);
//////
// // 12. Напиши функцію removeAll(array, value), яка повертає новий масив без усіх входжень value.
// // removeAll([1, 2, 1, 3, 1], 1) → [2, 3].
// const number = [1, 2, 1, 3, 1];
// function removeAll(array, value) {
//   return array.filter(function(item) {
//     return item !== value;
//   });
// }
// const result = removeAll(number, 1);
// console.log(result); // [2, 3]
// // //////////////////////////////////

// const fruits = ["apple", "banana", "apple", "orange", "apple"];

// function removeWord(array, value) {
//   return array.filter(function (item) {
//     return item !== value;
//   });
// }

// const result = removeWord(fruits, "apple");
// console.log(result); // ["banana", "orange"]
/////////////
// 13. Отримай товари в наявності з ціною до 5000.
const products = [
  { name: "Ноутбук", price: 30000, inStock: true },
  { name: "Миша", price: 800, inStock: false },
  { name: "Клавіатура", price: 2500, inStock: true },
  { name: "Килимок", price: 300, inStock: true },
];
// function findGoods(array) {
//   return array.filter(function (item) {
//     return item.price < 5000 && item.inStock;
//   });
// }
// const result = findGoods(products);
// console.log(result);
/////////////

const callback = (array) => {
  return array.price < 5000 && array.inStock;
};
console.log(products.filter(callback));

/////////////
// 14. Отримай масив квадратів:
// const nums = [1, 2, 3, 4];
// function numsSquare(array) {
//   return array.map(function (item) {
//     return item * item;
//   });
// }
// const result = numsSquare(nums);
// console.log(result);
//////////////////////////
// 15. Перетвори масив рядків на масив їхніх довжин: ['кіт', 'собака', 'пес'] → [3, 6, 3].
// const animals = ["кіт", "собака", "пес"];
// function namesLength(array) {
//   return array.map(function (item) {
//     return item.length;
//   });
// }
// const result = namesLength(animals);
// console.log(result);
// ////////////////////////////
// // 16. Перетвори масив цін у гривнях на рядки з валютою: [100, 250] → ['100 грн', '250 грн'].

// const numbs = [100, 250];
// function prices(array) {return array.map (function(item) {return `${item} UAH`;});}
// const result = prices(numbs);
// console.log(result);

// 17. Отримай масив імен користувачів.
// const users = [
//   { id: 1, name: "Аня", age: 25 },
//   { id: 2, name: "Богдан", age: 17 },
// ];
// function names(arr) {
//   return arr.map(function (item) {
//     return item.name;
//   });
// }
// newArr = names(users );
// console.log(newArr);
/////////////////////////
const users = [
  { id: 1, name: "Аня", age: 25 },
  { id: 2, name: "Богдан", age: 17 },
];
const newArr = users.map((item) => item.name);
console.log(newArr);
