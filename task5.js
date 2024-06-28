for (i=1; i<=20; i++){
    console.log(i);
}
    

let index = 1;
while (index<=10) {
    console.log(index);
    index++;
    
}


let age = 1
do {
    console.log(`Age is ${age}`);
    age++
} while (age<22);

const myName = "MEGHA";
for (let char of myName){
    console.log("my characters " + char)
}

const person = {
    city: "Lucknow",
    age: 21
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}