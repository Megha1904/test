// Define a function to calculate the square of a number
function square(num) {
    return num * num;
}

// Using the function
let result = square(5);
console.log("Square of 5:", result); // Output: Square of 5: 25


let person = {
    firstName: "Megha",
    lastName: "Sharma",
    age: 21,
    greet: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
};


function introduce() {
    return person.greet();
}


console.log(introduce()); 

