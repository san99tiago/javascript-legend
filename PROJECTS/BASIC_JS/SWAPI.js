// STAR WARS API EXAMPLE IN JAVASACRIPT USING JQUERY (UNDERSTANDING CALLBACKS)
// Santiago Garcia Arango

// * REMARK: must run "SWAPI.html" to see API working properly (with JQuery)...
// then access browser console to check response (doesn't work with Node.js)

// Define constant elements for the urls of the Star Wars API
const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

// ----------------- TEST 1 ----------------------
// Explore the arguments of the Star Wars API
const exploreResponseArguments = function () {
    console.log(arguments);
};

// Create our first request to explore some response
const path = `${API_URL}${PEOPLE_URL.replace(':id', "1")}`;
const get_options = {crossDomain: true};
$.get(path, get_options, exploreResponseArguments);


// ----------------- TEST 2 ----------------------
// Show some attributes of our character (response)
const onPeopleResponse = function (person) {
    console.log(`\n\nMy name is ${person.name}`);
    console.log(`The color of my eyes is ${person.eye_color}`);
    console.log(`My birth year is ${person.birth_year}`);
}
$.get(path, get_options, onPeopleResponse);


// ----------------- TEST 3 ----------------------
// Get any person that we want from the Star Wars API based on their "id"
function getPersonBasedOnId (id) {
    const path = `${API_URL}${PEOPLE_URL.replace(':id', String(id))}`;
    $.get(path, get_options, onPeopleResponse);
}
getPersonBasedOnId(2);
getPersonBasedOnId(3);
getPersonBasedOnId(4);
