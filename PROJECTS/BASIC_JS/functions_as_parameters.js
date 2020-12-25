// FUNCTIONS AS PARAMETERS IN JAVASCRIPT
// Santiago Garcia Arango

// Create main prototype of Person
class Person {
    constructor(user_name, last_name, age) {
        this.user_name = user_name;
        this.last_name = last_name;
        this.age = age;
    }

    // Add function "say_hi" to Person object (with OPTIONAL "fn" function)
    say_hi(fn) {
        console.log(`\nHello, I am ${this.user_name} ${this.last_name}!`);
        
        // If we pass a function, execute next block, otherwise don't
        if (fn) {
            fn("friend");
        }
    }
}

function say_hi_back(alias) {
    console.log(`Have a nice day ${alias}`);
}

let santi = new Person("Santiago", "Garcia", 21);
let moni = new Person("Monica", "Hill", 21);

santi.say_hi();
moni.say_hi(say_hi_back);
