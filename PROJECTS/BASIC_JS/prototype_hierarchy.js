// PROTOTYPE HIERARCHY IN JAVASACRIPT
// Santiago Garcia Arango


// Create main prototype of Person (that will be extended to Developer)
class Person {
    constructor(name, last_name, age) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
    }

    // Add function "say_hi" to Person object
    say_hi() {
        console.log(`\n Hello, I am ${this.name} ${this.last_name} and I am a person!`);
    }
}

// Create Developer prototype that has hierarchy of Person...
// --> remark 1: remember to add "extends ______" to add hierarchy
// --> remakr 2: "super" is to get the parent object constructor
class Developer extends Person {
    constructor(name, last_name, age, language) {
        super(name, last_name, age);
        this.language = language;
    }

    // Add function "say_hi" to Developer object
    say_hi() {
        console.log(`\n Hello, my name is ${this.name} ${this.last_name} and I am a programmer!`);
    }
}


// Create a class of Person and test "say_hi()" function
console.log("\n\n-------------- TEST FOR PERSON OBJECT ---------------")
person_1 = new Person("Santiago", "Garcia", 21);
person_1.say_hi()
console.log(person_1);

// Create a class of Developer and test "say_hi()" function
console.log("\n\n------------ TEST FOR DEVELOPER OBJECT --------------")
person_2 = new Developer("Santi", "Garci", 21, "Python");
person_2.say_hi()
console.log(person_2);
