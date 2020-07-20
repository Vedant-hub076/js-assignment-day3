console.log("Answer 3");

let marks = Number(prompt("Enter your marks between 0-100"));

// sloving using ladder if/else if ladder
console.log("if, else if, else ladder");
if (marks < 50) {
  console.log(`Marks are '${marks}' and grade is 'F'`);
} else if (marks >= 50 && marks <= 59) {
  console.log(`Marks are '${marks}' and grade is 'E'`);
} else if (marks >= 60 && marks <= 69) {
  console.log(`Marks are '${marks}' and grade is 'D'`);
} else if (marks >= 70 && marks <= 79) {
  console.log(`Marks are '${marks}' and grade is 'C'`);
} else if (marks >= 80 && marks <= 89) {
  console.log(`Marks are '${marks}' and grade is 'B'`);
} else if (marks >= 90 && marks <= 100) {
  console.log(`Marks are '${marks}' and grade is 'A'`);
} else {
  console.log(`Marks are '${marks}' and pls type between 0-100`);
}
