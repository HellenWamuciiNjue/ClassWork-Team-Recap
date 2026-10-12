// PART 1: Array Methods

const numbers = [4, -2, 15, 8, -7, 23, 1];

// TODO 1: every number doubled
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);

// TODO 2: non-negative numbers
const nonNegativeNumbers = numbers.filter(num => num >= 0);
console.log("Non-negative numbers:", nonNegativeNumbers);

// TODO 3: First number is greater than 10
const firstGreaterThanTen = numbers.find(num => num > 10);
console.log("First number greater than 10:", firstGreaterThanTen); 

// TODO 4: The product of all numbers
const productOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log("Product of all numbers:", productOfNumbers);

// TODO 5: is there any negative number
const hasNegativeNumber = numbers.some(num => num < 0);
console.log("Is there any negative number?", hasNegativeNumber);

// TODO 6: the numbers sorted smallest first, WITHOUT changing 'numbers' array
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log("Sorted numbers (smallest first):", sortedNumbers);

// // ==========================================
// // PART 2 - Object

// TODO: make an object about someone you invent (not you, not "John Doe"):
//       firstName, lastName, age, hobbies (array), address { city, country }
const character = {
    firstName: "Hellen",
    lastName: "Njue",
    age: 31,
    hobbies: ["Working", "Traveling", "Coding"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

// TODO: log the city with dot notation, the lastName with bracket notation
console.log("City (Dot Notation):", character.address.city);
console.log("Last Name (Bracket Notation):", character["lastName"]);

// TODO: add a `phone` property, then delete it
character.phone = "+254712345678";
console.log("Added phone:", character.phone);

delete character.phone;
console.log("After deleting phone:", character.phone); // Should print: undefined

// TODO: destructure firstName and hobbies into variables
const { firstName, hobbies } = character;
console.log("Destructured FirstName:", firstName);
console.log("Destructured Hobbies:", hobbies);

// TODO: loop Object.entries over { math: 95, english: 88, science: 92 }
//       printing "math: 95" etc.
const grades = { math: 95, english: 88, science: 92 };

for (const [subject, score] of Object.entries(grades)) {
    console.log(`${subject}: ${score}`);
}
// // ==========================================
// // ==========================================
// // PART 3 - Array of objects (Task 8.3)
// // ==========================================

const students = [
    { name: "Hellen", age: 22, grade: 85, major: "CS" },
    { name: "Florence", age: 20, grade: 72, major: "Math" },
    { name: "Yugi", age: 23, grade: 90, major: "CS" },
    { name: "Moses", age: 21, grade: 88, major: "Physics" },
    { name: "Maureen", age: 22, grade: 95, major: "CS" },
];

// TODO 1: all names -> ["Hellen", "Florence", ...]
const allNames = students.map(student => student.name);
console.log("All Names:", allNames);

// TODO 2: students with grade > 80
const highGrades = students.filter(student => student.grade > 80);
console.log("Grades > 80:", highGrades);

// TODO 3: the student named "Florence"
const florence = students.find(student => student.name === "Florence");
console.log("Found Florence:", florence);

// TODO 4: the average grade -> 86
const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
const averageGrade = totalGrade / students.length;
console.log("Average Grade:", averageGrade);

// TODO 5: CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log("CS Majors:", csMajors);

// TODO 6: sorted by grade, highest first - COPY first: [...students]
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log("Sorted by Grade (Highest First):", sortedByGrade);

// TODO 7: does any student have grade > 90? -> true
const hasGradeOver90 = students.some(student => student.grade > 90);
console.log("Any student > 90?:", hasGradeOver90);

// TODO 8: are all students passing (>= 60)? -> true
const allPassing = students.every(student => student.grade >= 60);
console.log("Are all passing?:", allPassing);

// // ==========================================
// // PART 4 - JSON (Task 8.4)
// // ==========================================

const postsJSON = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

// TODO 1: JSON.parse it - check typeof before and after
console.log("Type before parse:", typeof postsJSON); // Should be "string"

const posts = JSON.parse(postsJSON);
console.log("Type after parse:", typeof posts);     // Should be "object"

// TODO 2: keep only published posts
const publishedPosts = posts.filter(post => post.published === true);
console.log("Published Posts:", publishedPosts);

// TODO 3: sort by likes, highest first
const sortedByLikes = [...publishedPosts].sort((a, b) => b.likes - a.likes);
console.log("Sorted by Likes:", sortedByLikes);

// TODO 4: map to "Week 4 recap (30 likes)" -> ["Week 4 recap (30 likes)", "Welcome (12 likes)"]
const postSummaries = sortedByLikes.map(post => `${post.title} (${post.likes} likes)`);
console.log("Post Summaries:", postSummaries);

// TODO 5: JSON.stringify the published posts back to text
const publishedJSON = JSON.stringify(publishedPosts);
console.log("Published JSON Text:", publishedJSON);
console.log("Type after stringify:", typeof publishedJSON); // Should be "string"
