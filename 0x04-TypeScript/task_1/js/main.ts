interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}
  
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
  
console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
  
// Define the function printTeacher using the interface
const printTeacher: printTeacherFunction = function(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}
  
  // Testing the function
const result: string = printTeacher("John", "Doe");
console.log(result);


  // Define interface for the constructor
interface StudentConstructor {
    firstName: string;
    lastName: string;
  }
  
  // Define interface for the class
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}
  
  // Implement the StudentClass
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor({ firstName, lastName }: StudentConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Test the StudentClass
  const student = new StudentClass({ firstName: "John", lastName: "Doe" });
  console.log(student.workOnHomework()); // Output: Currently working
  console.log(student.displayName()); // Output: John
  
