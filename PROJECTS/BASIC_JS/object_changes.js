// OBJECT CHANGES IN JAVASACRIPT
// Santiago Garcia Arango

class person {
    constructor(name, last_name, age, sex) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
        this.sex = sex;
    };
}

// The correct way of "changing" objects is by returning a new object...
function happy_birthday(person) {
    console.log(`\n... Happy Birthay ${person.name}\n`);
    return {
        ...person,
        age: person.age + 1
    }
}

// Test object changes with the function that returns a "new" object
santi = new person("Santiago", "Garcia", 21, "Male");
console.log("\nSANTI (year 1): ", santi);
var older_santi = happy_birthday(santi);
console.log("\OLDER SANTI (year 2): ", older_santi);
