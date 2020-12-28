// STAR WARS API EXAMPLE IN JAVASACRIPT USING JQUERY (UNDERSTANDING CALLBACKS)
// Santiago Garcia Arango

// ----------------------------------------------------------------------------

// SUMMARY OF THE SWAPI LEARNING PROJECT:
// --> must run "SWAPI.html" to see API working properly (with JQuery) then...
//     access browser console to check response (doesn't work with Node.js)
// --> TEST 1: Exploring the SWAPI and a JQuery GET method to show the ...
//     recieved arguments.
// --> TEST 2: Getting specific attributes from the SWAPI response.
// --> TEST 3: Calling multiple GET methods, showing their info but wihtout...
//     control of the order in which logs are shown.
// --> TEST 4: Calling multiple GET methods, showing their info and adding...
//     control of the order in which logs are shown with callbacks.
// --> TEST 5: Organizing callbacks and adding error handling in GET method.
// --> TEST 6: Adding promises to solve "callback hell" and organize code...
//     also added way of calling promises in "series" or "parallel".

// ----------------------------------------------------------------------------

// Define constant elements for the urls of the Star Wars API
const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

// ----------------- TEST 1 ----------------------
// Explore the arguments of the Star Wars API response for persons
function test_1() {

    const exploreResponseArguments = function () {
        console.log(arguments);
    };

    // Create our JQuery arguments for doing GET to the SWAPI
    const path = `${API_URL}${PEOPLE_URL.replace(':id', "1")}`;
    const get_options = {crossDomain: true};

    $.get(path, get_options, exploreResponseArguments);
}


// ----------------- TEST 2 ----------------------
// Show some attributes of our character (response)
function test_2() {

    const onPeopleResponse = function (person) {
        console.log(`\n\nMy name is ${person.name}`);
        console.log(`The color of my eyes is ${person.eye_color}`);
        console.log(`My birth year is ${person.birth_year}`);
    }

    // Create our JQuery arguments for doing GET to the SWAPI
    const path = `${API_URL}${PEOPLE_URL.replace(':id', "1")}`;
    const get_options = {crossDomain: true};

    $.get(path, get_options, onPeopleResponse);
}


// ----------------- TEST 3 ----------------------
// Get any person that we want from the Star Wars API based on their "id"
function test_3() {

    function getPersonBasedOnIdWithoutCallback (id) {
        // Create our JQuery arguments for doing GET to the SWAPI
        const get_options = {crossDomain: true};
        const path = `${API_URL}${PEOPLE_URL.replace(':id', String(id))}`;

        $.get(path, get_options, function (person) {
            console.log(`\n\nHello, my name is ${person.name}`);
        });
    }

    // Here we dont control the order in which the results are shown
    getPersonBasedOnIdWithoutCallback(1);
    getPersonBasedOnIdWithoutCallback(2);
    getPersonBasedOnIdWithoutCallback(3);
}


// ----------------- TEST 4 ----------------------
// Get any person that we want from the Star Wars API based on their "id"
function test_4() {

    function getPersonBasedOnIdWithCallback (id, callback) {
        // Create our JQuery arguments for doing GET to the SWAPI
        const path = `${API_URL}${PEOPLE_URL.replace(':id', String(id))}`;
        const get_options = {crossDomain: true};

        $.get(path, get_options, function (person) {
            console.log(`\n\nHello, my name is ${person.name}`);

            if (callback) {
                callback();
            }
        });

    };

    // Here we control the order of the results with the callbacks
    // This is known as "Callcback Hell" (for the "complex" structure and read)
    getPersonBasedOnIdWithCallback(1, function () {
        getPersonBasedOnIdWithCallback(2, function () {
            getPersonBasedOnIdWithCallback(3, function () {
                getPersonBasedOnIdWithCallback(4, function () {
                    getPersonBasedOnIdWithCallback(5);
                });
            });
        });
    });
}


// ----------------- TEST 5 ----------------------
// Get any person that we want from the Star Wars API based on their "id"
function test_5() {

    function getPersonBasedOnIdWithCallback (id, callback) {
        // Create our JQuery arguments for doing GET to the SWAPI
        const path = `${API_URL}${PEOPLE_URL.replace(':id', String(id))}`;
        const get_options = {crossDomain: true};

        $.get(path, get_options, callback).fail(function () {
            console.log(`There was an error trying to get the person ${id}`);
        });
    };


    // Here we control the order of the results with the callbacks
    getPersonBasedOnIdWithCallback(1, function (person) {
        console.log(`\n\nHello, my name is ${person.name}`);

        getPersonBasedOnIdWithCallback(2, function (person) {
            console.log(`\n\nHello, my name is ${person.name}`);

            getPersonBasedOnIdWithCallback(3, function (person) {
                console.log(`\n\nHello, my name is ${person.name}`);

                getPersonBasedOnIdWithCallback(4, function (person) {
                    console.log(`\n\nHello, my name is ${person.name}`);

                    getPersonBasedOnIdWithCallback(5);
                    console.log(`\n\nHello, my name is ${person.name}`);

                });
            });
        });
    });
}


// ----------------- TEST 6 ----------------------
// Get any person that we want from the Star Wars API based on their "id"
function test_6(series_or_parallel) {

    function getPersonBasedOnIdWithPromise (id) {
        return new Promise((resolve, reject) => {

            // Create our JQuery arguments for doing GET to the SWAPI
            const path = `${API_URL}${PEOPLE_URL.replace(':id', String(id))}`;
            const get_options = {crossDomain: true};

            $
                .get(path, get_options, function (data) {
                    resolve(data);
                })
                .fail(() => reject(id));
        });
    };


    // Here we control the order of the results with promises in series
    if (series_or_parallel == "series") {
        getPersonBasedOnIdWithPromise(1)
        .then(person => {
            console.log(`\n\nHello, my name is ${person.name}`);
            return getPersonBasedOnIdWithPromise(2)
        })
        .then(person => {
            console.log(`\n\nHello, my name is ${person.name}`);
                return getPersonBasedOnIdWithPromise(3)
            })
            .then(person => {
                console.log(`\n\nHello, my name is ${person.name}`);
                return getPersonBasedOnIdWithPromise(4)
            })
            .then(person => {
                console.log(`\n\nHello, my name is ${person.name}`);
                return getPersonBasedOnIdWithPromise(5)
            })
            .then(person => {
                console.log(`\n\nHello, my name is ${person.name}`);
            })
            .catch(id => {
                console.log(`There was an error in person with id ${id}`);
            })
    }

    // Here we control the order of the results with promises in parallel
    if (series_or_parallel == "parallel") {
        let persons_ids = [1, 2, 3, 4, 5];
        let promises = persons_ids.map(id => getPersonBasedOnIdWithPromise(id));
        Promise
            .all(promises)
            .then(persons => console.table(persons))
            .catch(id => console.log(`There was an error in person with id ${id}`))
    }

}


// RUN TESTS (run one at a time to check specific results)
// test_1();
// test_2();
// test_3();
// test_4();
// test_5();
test_6("series");
// test_6("parallel");

