// SIMPLE FACTORIAL FUNCTION IN JAVASCRIPT WITH RECURSIVE AND CACHE APPROACHES
// Santiago Garcia Arango

// Recursive approach
function recursiveFactorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * recursiveFactorial(n - 1);
}

// Recursive approach with cache memory handling to improve processing
class memoizationFactorial {
    constructor(n) {
        // Create cache in case it doesn't exist
        if (!this.cache) {
            this.cache = {};
        }

        if (this.cache[n]) {
            return this.cache[n];
        }

        if (n === 1) {
            return 1;
        }

        this.cache[n] = n * recursiveFactorial(n - 1);
        return this.cache[n];
    }
}

// Show results for some factorials
console.log(recursiveFactorial(8));
console.log(new memoizationFactorial(8));

console.log(recursiveFactorial(6));
console.log(new memoizationFactorial(6));

console.log(recursiveFactorial(5));
console.log(new memoizationFactorial(5));
