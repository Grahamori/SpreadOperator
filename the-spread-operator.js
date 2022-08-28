/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4); //when pushing to array2 also pushes to array1 and vice versa.
console.log("Second array:", arr2);
console.log("First array:", arr1);

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3]; //uses three dots as spread operator, prevents pushing to array3 when pushing to array4

arr4.push(7);
console.log("Third array:", arr3);
console.log("Fourth array:", arr4);

// Copying an object

let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4}; // spread operator works same with objects
let obj3 = {...obj1, b: 5}; // This overwrites b: with new value
console.log("first object:", obj1);
console.log("second object", obj2);
console.log("third object:", obj3);


// Copying only part of an array/object

let arr5 = [...arr1, { ...obj1}, ...arr3, "x", "y", "z"]; // conatins all elements of each array and object declared plus additional values
console.log(arr5);

