// Define an object type
type Student = {
  name: string;
  marks: number[];
};

// Create an array of students (objects)
let students: Student[] = [
  { name: "Ali", marks: [85, 90, 78] },
  { name: "Sara", marks: [92, 88, 95] },
  { name: "Omar", marks: [70, 75, 80] }
];

// Function to calculate average marks
function calculateAverage(marks: number[]): number {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return sum / marks.length;
}

// Loop through students and display their average
for (let student of students) {
  let avg = calculateAverage(student.marks);
  console.log(`${student.name}'s average marks = ${avg.toFixed(2)}`);
}

   
</body>
</html>
</body>

</html>

