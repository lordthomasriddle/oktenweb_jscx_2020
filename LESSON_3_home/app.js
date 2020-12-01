//HOMEWORK 3 ;D

// -- створити об'єкт (не меньше 5ти властивостей) який описує( собаку, людину, автомобіль, квартиру, книгу ):
let mObj = {
    snake: 'Nagini',
    people: 'Thomas Riddle',
    car: 'Ernest Prang',
    apartment: 'Little Hangleton',
    book: 'book~Herpo~the~Foul'
}
console.log(mObj);

// -- Створити масив та вивести його в консоль ( 5 собак, 5 людей, 5 автомобілів ):
let mArr = [
    { deathEaters: 'Mr.Goyle * Jugson * Antonin Dolohov * Crabbe sr * Alecto Carrow' },
    { marauders: 'James Potter× ^ Marseille× ^ Remus John Lupin× ^ Peter Pettigrew×' },
    { horcruxVdM: `T.M.Riddle\'s Diary\u{1D196} Marvolo Gaunt\'s Ring\u{23E3} Slytherin\'s Locket<sup>\u{028D}</sup> Helga Hufflepuff\'s Cup\u{0E2D} Ravenclaw\'s Diadem\u{00A7} Harry James Potter\u{061F} Nagini<sup><sup>\u{1DC2}</sup></sup> ` }
]
console.log(mArr);
let horcruxJSON = JSON.stringify(mArr[2]);

let horcruxParse = JSON.parse(horcruxJSON);

let valHorcrux = Object.values(horcruxParse);

document.write(valHorcrux)

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом ( будинок, водій, іграшку, стіл, сумка ):

let tObj = {
    house: [
        'Little Hangleton',
        1943,
        'House of Gaunt',
        'Frank Bryce',
        'You have no right to pray at Father\'s grave !'
    ],
    driver: {
        name: 'JIMMY GARDNER',
        underCodeName: 'Ernest Prang',
        city: 'no detectable consistency',
        car: 'Knight Bus',
        status: false
    },
    toy: 'Elder Wand',
    table: 'https://static.wikia.nocookie.net/harrypotter/images/a/a7/A7841fc0400f.jpg/revision/latest?cb=20110817154340&path-prefix=ru',
    bag: 'L&V'
}
console.log(tObj);

// Дан массив:
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
]
console.log(users);
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
console.log(users[7].status)

// - статус Максима
console.log(users[10].status)

// - ім'я передостаннього об'єкту
console.log(users[9].name)

// - ім'я третього об'єкта
console.log(users[2].name)

// - вік Олега
console.log(users[6].age)

// - вік Олі
console.log(users[9].age)

// - вік + ім'я 5го об'єкта
console.log(users[4].age + ' ' + users[4].name)

// - вік + сатус Анни
console.log(users[5].age + ' ' + users[5].status)


// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// ( Ctrl+C все что в template1.html себе в index.html ;D )
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
let idCont = document.getElementById('content')

console.log(idCont.textContent)

// - отримує текст з блоку з id "rules"
let idRul = document.getElementById('rules')

console.log(idRul.textContent)

// - замініть текст параграфа з id 'content' на будь-який інший
idCont.innerText = 'Thomas Marvolo Riddle'

console.log(idCont.textContent);

// - замініть текст параграфа з id 'rules' на будь-який інший
idRul.innerText = 'Harry James Potter'
console.log(idRul.textContent);

// - змініть кожному елементу колір фону на червоний
document.body.style.backgroundColor = '#b01030'

// - змініть кожному елементу колір тексту на синій
document.body.style.color = '#22bdeb'

document.body.style.fontSize = '23px' // :)

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
let getListRul = document.getElementById('rules').classList

console.log(getListRul)

// - отримати всі елементи з класом fc_rules
let getElClassFc = document.getElementsByClassName('fc_rules')

console.log(getElClassFc);

// - поміняти колір тексту у всіх елементів fc_rules на червоний
for (let i=0; i< getElClassFc.length; i++) {
    getElClassFc[i].style.color = '#f37c8c'
}


// Взяти файл template_2.html та працювати в ньому
// ( Ctrl+C все что в template2.html себе в index.html ;D )
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
let changeMainHeadId = document.getElementById('main_header')

changeMainHeadId.style.color = '#53ee44'

// -- робить шириниу елементу ul 400 пікселів
let changeUlEl = document.getElementsByClassName('ul2')

for (let i=0; i< changeUlEl.length; i++) {
    changeUlEl[i].style.width = '400px';
}

// -- робить шириниу всіх елементів з класом linkList шириною 50%
let changeLinkList = document.getElementsByClassName('linkList')

for (let i=0; i< changeLinkList.length; i++) {
    changeLinkList[i].style.width = '50%';
}

// -- отримує текст який зберігається в елементі з класом listElement2
let getTextLiEl2 = document.getElementsByClassName('listElement2');
console.log(getTextLiEl2[0].textContent);

// -- отримує всі елементи li та змінює ім колір фону на сірий
// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
