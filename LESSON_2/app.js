Welcome

// --створити масив та вивести його в консоль:
//   - з 5 числових значень
let arrNum = [1,2,3,4,5];
console.log(arrNum);

// - з 5 стічкових значень
let arrStr = ['a','b','c','d','f'];
console.log(arrStr);

// - з 5 значень стрічкового, числового та булевого типу
let arrMix = ['abc', 123, true, 321, false];
console.log(arrMix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arrEmpty = [];
arrEmpty[0] = 'olala';
arrEmpty[1] = 44;
arrEmpty[2] = true;
console.log(arrEmpty);

// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
let objMix = {
    dog: 'Rudolf',
    people: 'Thomas_Riddle',
    car: false,
    apartment: false,
    book: 'Harry Potter'
}

console.log(objMix);

// -- Створити масив та вивести його в консоль:
//   - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
let arrLol = ['Gerda','Elza','Rudolf','Jack','Nick','Denya','Karina','Igor','Maki4','Ludmila','Sergey','citroen','opel','moskvich','fiat','bmw'];

console.log(arrLol);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
let objLol = {
    house: 'Korosten',
    driver: 'Daniel',
    toy: 'Dota2',
    table: true,
    bag: {
        driver_licence: true,
        keys: true,
        cigarettes: 'Sobranie Gold'
    }
};

console.log(objLol);

// Дан массив:
//   let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
//   ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима users[10].status
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни users[9].age + ' ' + user[9].status
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
  let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
  ];
console.log(users);
console.log(users[7].status);
console.log(users[4].status);
console.log(users[9].name);
console.log(users[2].name);
console.log(users[6].age);
console.log(users[3].age);
console.log(users[4].age + ' ' + users[4].name);
console.log(users[5].age + ' ' + users[5].status);
console.log('*************************************');

/////////////////////////////////////////////////////////////////////////////////
// -Візьміть файл task2_template.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний
////////////////////////////////////////////////////////////////////////////////

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arrTenNum = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while.
//let arrTenNum = [2,17,13,6,22,31,45,66,100,-18];

let count = 0;

while (count < arrTenNum.length) {
    console.log(arrTenNum[count]);

    count++
}
console.log('**************************************');

// 2. перебрати його циклом for.
// let arrTenNum = [2,17,13,6,22,31,45,66,100,-18];
for (let j = 0; j < arrTenNum.length; j++) {
    console.log(arrTenNum[j]);
}
console.log('**************************************');

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом.
// let arrTenNum = [2,17,13,6,22,31,45,66,100,-18];
let counter = 0;

while (counter < arrTenNum.length) {
    if (arrTenNum[counter] % 2 !== 0) {
        console.log(arrTenNum[counter]);
    }
    counter++
}
console.log('**************************************');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом.
// let arrTenNum = [2,17,13,6,22,31,45,66,100,-18];
for (let t = 0; t < arrTenNum.length; t++){
    if (arrTenNum[t] % 2 !== 0) {
        console.log(arrTenNum[t]);
    }
}
console.log('**************************************');

// 5. перебрати циклом while та вивести  числа тільки парні  значення.
// let arrTenNum = [2,17,13,6,22,31,45,66,100,-18];
let o = 0;

while (o < arrTenNum.length) {
    if (arrTenNum[o] % 2 === 0 ) {
        console.log(arrTenNum[o]);
    }
    o++
}
console.log('**************************************');

// 6. перебрати циклом for та вивести  числа тільки парні  значення.
// let arrTenNum = [2,17,13,6,22,31,45,66,100,-18];
for (let m = 0; m < arrTenNum.length; m++) {
    if (arrTenNum[m] % 2 === 0) {
        console.log(arrTenNum[m]);
    }
}
console.log('**************************************');

// 7. замінити кожне число кратне 3 на слово "okten".
// let arrTenNum = [2,17,13,6,22,31,45,66,100,-18];
for (let q = 0; q < arrTenNum.length; q++) {
    if (arrTenNum[q] % 3 === 0) {
        arrTenNum[q] = 'okten';
    }
    console.log(arrTenNum[q]);
}
console.log('**************************************');

// 8. вивести масив в зворотньому порядку.
// let arrTenNum = [2,17,13,6,22,31,45,66,100,-18];
for (let z = arrTenNum.length -1; z >= 0; z--) {
    console.log(arrTenNum[z]);
}
console.log('**************************************');

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let arrTenNum = [2,17,13,6,22,31,45,66,100,-18];
let countZ = arrTenNum.length - 1;
while (countZ >= 0) {
    console.log(arrTenNum[countZ]);

    countZ--
}
console.log('**************************************');

// 10. створити пустий масив та :
let arrEmpty2 = [];

// - заповнити його 50 парними числами за допомоги циклу.
// let arrEmpty2 = [];
let even = 2;
for (let s = 0; s < 50; s++) {
     arrEmpty2[s] = even;
     even+=2
}
console.log(arrEmpty2);
console.log('**************************************');

// - заповнити його 50 непарними числами за допомоги циклу.
// let arrEmpty2 = [];
let even2 = 1;
for (let r = 0; r < 50; r++) {
    arrEmpty2[r] = even2;
    even2+=2;
}
console.log(arrEmpty2);
console.log('**************************************');

// створити пустий масив та :
let emptyArr = [];

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//   диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

for (let u = 0; u < 50; u++) {
    emptyArr[u] = Math.round(Math.random() * 732 - 8 + 8);
}
console.log(emptyArr);

// 2. вывести на консоль  каждый третий елемент
// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.
// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
//
// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.


// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.
// =================
// =====class=======
// =================
// Взяти файл task2_template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший +
// -- робить шириниу елементу ul 400 пікселів +
// -- робить шириниу всіх елементів з класом linkList шириною 50% +
// -- отримує текст який зберігається в елементі з класом listElement2+
// -- отримує всі елементи li та змінює ім колір фону на сірий
// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення



