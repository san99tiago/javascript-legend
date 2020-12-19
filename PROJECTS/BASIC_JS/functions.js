// FUNCTIONS IN JAVASACRIPT
// Santiago Garcia Arango

// Declarative functions
function getMyAverageGrade(grades_vector) {
    // Function to get average grade out of an array of N grades
    var average = 0;
    for (let i = 0; i < grades_vector.length; i++) {
        average = average + grades_vector[i]
    }
    average = average / grades_vector.length
    return average;
}

// Expressive functions
var getMyHighestGrade = function(grades_vector) {
    // Function to get highest grade out of an array of N grades
    var highest_grade = 0;
    for (let i = 0; i < grades_vector.length; i++) {
        if (grades_vector[i] > highest_grade) {
            highest_grade = grades_vector[i]
        }
    }
    return highest_grade;
}


// Test both functions
console.log("\n--------------Test GetMyAverageGrade--------------")
grades = [4.8, 5.0, 4.0]
average_grade = getMyAverageGrade(grades)
console.log("grades: ", grades)
console.log("average_grade: ", average_grade)

console.log("\n--------------Test GetMyHighestGrade--------------")
grades = [4.8, 5.0, 4.0]
highest_grade = getMyHighestGrade(grades)
console.log("grades: ", grades)
console.log("highest_grade: ", highest_grade)
