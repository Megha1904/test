//Array
const myArray = [1,2,3,4,5];
console.log(myArray[1]);

myArray.push(6)
console.log(myArray);
myArray.pop()
console.log(myArray);
myArray.unshift(9)
console.log(myArray);
myArray.shift()
console.log(myArray);
const newArr = myArray.join()
console.log(newArr);

const fruits = ["Mango", "Apple" , "Banana"]
const vegetables = ["Potato" , "Peas" , "Onion"]
const all = fruits.concat(vegetables)
console.log(all);

//Object

let person = {
    firstName: "Megha",
    lastName: "Sharma",
    age: 21,
    
};

console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe
console.log(person.age); // Output: 30

