// function makeStringFromArray(array, delimiter) {
//     let string = ""; 
//     join = array.join(delimiter);
//     string = join;
//     return string;
// }

// function slugify(title) {
//     let slug = title.toLowerCase().split(" ").join("-");
//     return slug;
// }


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);


// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line


// function makeArray (firstArray, secondArray, maxLength) {
//     const newArray = firstArray.concat(secondArray);
//     if (newArray.length > maxLength) {
//         return newArray.slice(0, maxLength);
//     }
//     return newArray;
// }

// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }


// function calculateTotal(number) {
//     let total = 0;
//     for (let i = 0; i <= number; i += 1) {
//         total += i;
//     }
//     return total;
// }

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//     const fruit = fruits[i];
//     console.log(fruit);
// }


// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//     }
//     return total;
// }

// function findLongestWord(string) {
//     let longestWord = "";
//     const words = string.split(" ");
//     for (let i = 0; i < words.length; i += 1) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }
//     return numbers;
// }


// function filterArray (numbers, value) {
//     const filteredNumbers = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             filteredNumbers.push(numbers[i]);
//         }
//     }
//     return filteredNumbers;
// }


// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
//     return fruits.includes(fruit);
// }

// // function getCommonElements(array1, array2) {
// //     const commonElements = [];
// //     for (let i = 0; i < array1.length; i += 1) {
// //         if (array2.includes(array1[i])) {
// //             commonElements.push(array1[i]);
// //         }
// //     }
// //     return commonElements;
// // }



// function calculateTotalPrice(order); {
//     let total = 0;



// function getEvenNumbers(start, end) {
//     const evenNumbers = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             evenNumbers.push(i);
//         }
//     }
//     return evenNumbers;
// }

function includes(array, value) {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}