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
function calculateTotal(number) {
  let total = 0;
  for (let i = 0; i <= number; i += 1) {
    total += i;
  }
  return total;
}
