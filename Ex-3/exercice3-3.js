/* let arr = [1, 2, 3, 4, 5];
let arr2 = arr.slice(0);

console.log(arr2); */

let arr = [1, 2, 3, 4, 5];
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i]);
}

console.log(arr2);