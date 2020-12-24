// PROTOTYPES IN JAVASACRIPT
// Santiago Garcia Arango

// Create main prototype of Person
class Person {
    constructor(name, last_name, age) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
    }
}

// Add functions ("methods") to the Person prototype
Person.prototype.say_hi = function() {
    console.log(`\n Hello, I am ${this.name} ${this.last_name}`);
}

Person.prototype.say_age = function() {
    console.log(`\n I am currently ${this.age} years old!`);
}

// Create a prototype of Person and test "say_hi()" and "say_age()" function
person_1 = new Person("Santiago", "Garcia", 21);
person_1.say_hi()
person_1.say_age()
