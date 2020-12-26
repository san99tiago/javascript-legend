// UNDERSTANDING TIME FOR ASYNCHRONOUS JAVASCRIPT
// Santiago Garcia Arango

// Lets play with some functions to see execution order with "callstack"
function test_1() {
    console.log('\n------------ TEST 1 --------------')
    console.log('A');
    setTimeout(() => console.log('B'), 1000);
    console.log('C');
}

function test_2() {
    console.log('\n------------ TEST 2 --------------')
    console.log('A');
    setTimeout(() => console.log('B'), 0);
    console.log('C');
}

function test_3() {
    console.log('\n------------ TEST 3 --------------')
    console.log('A');
    setTimeout(() => console.log('B'), 0);
    for (let i = 0; i < 1000000000; i++);
}


// test_1();
// test_2();
test_3();
