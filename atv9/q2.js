let studentDictionary = {};

function addStudent(id, name, grade) {
    studentDictionary[id] = {
        name: name,
        grade: grade
    };
}

function findStudentById(id) {
    return studentDictionary[id];
}

function calculateAverageGrade() {
    const studentIds = Object.keys(studentDictionary);
    if (studentIds.length === 0) {
        return 0;
    }
    const totalGrades = studentIds.reduce((total, id) => total + studentDictionary[id].grade, 0);
    return totalGrades / studentIds.length;
}

// Exemplo:
addStudent(1, "Amanda", 7.5);
addStudent(2, "Fernando", 8.0);
addStudent(3, "Antonio", 6.5);

console.log(studentDictionary);
console.log(findStudentById(2));
console.log(calculateAverageGrade());
