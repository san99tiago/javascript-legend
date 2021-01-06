// DEFAULT PARAMETERS IN FUNCTIONS
// Santiago Garcia Arango

// Before ECMAScript 6+
function myOldFunction(user_name, age, country) {
    var user_name = user_name || 'Santiago';
    var age = age || 21;
    var country = country || 'Colombia';
    console.log(`Hey, I'm ${user_name}!\nI have ${age} years old`);
    console.log(`Did you know that I'm from ${country}?\n`)
}

// After ECMAScript 6+
function myNewFunction(user_name = 'Santiago', age = 21, country = 'Colombia') {
    console.log(`Hey, I'm ${user_name}!\nI have ${age} years old`);
    console.log(`Did you know that I'm from ${country}?\n`)
}

// Test both functions
console.log('\n------------- TEST 1 --------------------')
myOldFunction('Moni', 22, 'Italia')
myNewFunction()
console.log('\n------------- TEST 2 --------------------')
myOldFunction('Moni', 22, 'Italia')
myNewFunction()
