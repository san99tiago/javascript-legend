// PROMISES IN JAVASCRIPT
// Santiago Garcia Arango

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        // Change if statement true/false to test
        if (true) {
            resolve('YESSS!!!');
        } else {
            reject('NOOOO!!!');
        }
    });
}

// Test simple promise example
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Finished Promise correctly'))
    .catch(error => console.log(error))
