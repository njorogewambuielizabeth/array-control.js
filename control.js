//Quiz 1
//write a function that accepts an array of strings and console.logs each element using a for loop.

function arrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
  let myArray = ["hello", "mama", "how", "are", "you"];
  
  arrayElements(myArray);

  //Quiz 2
  //write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
  function arrayNums() {
    let numbers= [1, 2, 3, 4, 5];
    function multiplied(numbers) {
      console.log(numbers * 2);
    }
    numbers.forEach(multiplied)
  }
 arrayNums()

 //Quiz 3
 //Write a function that takes in an array of numbers and consoles the first four items multiplied by 8
 // and the last two added by 5. Console the array with the new values
 function manipulateArray(arr) {
  const newArr = [];
  const firstFour = arr.slice(0, 4); 
  const lastTwo = arr.slice(-2); 

  firstFour.forEach(num => {
    newArr.push(num * 8); 
  });

  lastTwo.forEach(num => {
    newArr.push(num + 5); 
  });

  console.log(newArr); 
}
let main = [2,4,6,8,10,12];
manipulateArray(main);

//Quiz 4
//Write a function that takes in the following array and use a while loop to iterate 
//and break when the item is equal to the fourth index
//let arrNum = [1,2,3,4,5,6,7,8,9];

function findIndex(arr) {
  let i = 0;
  while (i < arr.length) {
    if (i === 4) {
      break; 
    }
    console.log(arr[i]);
    i++;
  }
}
let arrNum = [1,2,3,4,5,6,7,8,9];
findIndex(arrNum);

//Write a function that takes in a an array of strings and
// use a continue statement when the item is at the second index
//let fruits= ['apple','plum','banana','strawberries','kiwi']
function skipIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === 2) {
      continue; 
    }
    console.log(arr[i]);
  }
}
let fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi'];
skipIndex(fruits);





