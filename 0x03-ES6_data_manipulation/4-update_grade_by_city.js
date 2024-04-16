export default function updateStudentGradeByCity(list, city, newGrades) {
  const qualifiedStudents = list.filter((student) => student.location === city);
  const updatedGrades = qualifiedStudents.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (matchingGrade) {
      return { ...student, grade: matchingGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });

  return updatedGrades;
}
