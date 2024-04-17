let studentsList = [];

function addStudent(id, name, grade) {
    const student = {
        id: id,
        name: name,
        grade: grade
    };
    studentsList.push(student);
}

function findStudentById(id) {
    return studentsList.find(student => student.id === id);
}

function calculateAverageGrade() {
    if (studentsList.length === 0) {
        return 0;
    }
    const sumGrades = studentsList.reduce((total, student) => total + student.grade, 0);
    return sumGrades / studentsList.length;
}

addStudent(1, "Alice", 7.5);
addStudent(2, "Bob", 8.0);
addStudent(3, "Charlie", 6.5);

console.log(studentsList);
console.log(findStudentById(2));
console.log(calculateAverageGrade());
