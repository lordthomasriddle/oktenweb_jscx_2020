Lesson 2 ;D

//checklist ok lesson
// for loop
//while loop
// do while
// for of
// array length
// loop in loop
// array in array
// array base functions pop push shift unshift

document.write('<h3>hello owu</h3>');
document.write('<h3>hello owu</h3>');
document.write('<h3>hello owu</h3>');
document.write('<h3>hello owu</h3>');
document.write('<h3>hello owu</h3>');

for (let i = 0; i < 5; i++) {
    document.write(`for loop <br>`);
}


for (let i = 0; i < 5; i++) {
    document.write(`for loop ${i} <br>`);
}


//--------------------------

let counter = 0;
while (counter < 10)
    document.write(`while loop ${counter} <br>`);
counter++;
}


do {
    console.log('do');
} while (false);


//--------------------------

// for (let i = 0; i < 5; i++) {
// debugger
//     document.write(`for loop ${i} <br>`);
// }
//--------------------------


// let arr = [11, 'owu', true, [9, 8, 7]];
// arr[4] = {name: 'vasya'};
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[3]);
// // console.log(arr[4]);
//
//
// for (let i = 0; i < arr.length; i++) {
//     debugger; //!!!!!
//     console.log(arr[i])
// }

//---------------
// let arr = [11, 'owu', true, [9, 8, 7]];
//
// for (let singleElement of arr) {
//     debugger;
//     console.log(singleElement);
// }

//-----------------

// let arr = [11, 'owu', true, [9, 8, 7]];
//
// let counter = 0;
// while (counter < arr.length) {
//     console.log(arr[counter]);
//     counter++;
// }

//-----------------

// for (let i = 0; i < 3; i++) {
//     document.write(`<div> hello`);
//     for (let j = 0; j < 5; j++) {
//         document.write(`<div style="background: silver;margin: 10px;">inside</div>   `);
//     }
//     document.write(`world </div>`);
// }

//-----------------
// let matrix = [['a', 'b', 'c'], [101, 102], [true, false], [{name: 'kokos'}, {name: 'ananas'}]];
// // matrix[0];
// // matrix[1];
// // matrix[2];
// // matrix[3];
//
// for (const singleArray of matrix) {
//     debugger;
//     console.log(singleArray);
//     for (const singleArrayElement of singleArray) {
//         console.log(singleArray)
//     }
// }
//
//
// for (let i = 0; i < matrix.length; i++) {
//     debugger;
//     let singleArray = matrix[i];
//     for (let j = 0; j < singleArray.length; j++) {
//         let singleArrayElement = singleArray[j];
//         console.log(singleArrayElement);
//     }
// }

//--------------------------

// let array = [];
// let newLength = array.push(111);
// console.log(array, newLength);
// let newLength2 = array.push(222);
// console.log(array, newLength2);
//
// let deletedElement = array.pop();
// console.log(array, deletedElement);
//
// let newLength3 = array.unshift(333);
// console.log(array, newLength3);
// let shiftedElement = array.shift();
// console.log(array, shiftedElement);
//--------------------------
// if (4 in [1, 2, 3]) {
//     console.log('yes');
// }


// console.log(a - 100);

try {
    console.log(a - 100);
} catch (e) {
    console.log('this is an error - ', e);
}



