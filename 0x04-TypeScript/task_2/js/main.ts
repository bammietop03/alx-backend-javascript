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
console.log(student.workOnHomework());
console.log(student.displayName());
  
// Task 7  
// Define type guards
interface DirectorInterface {
    workDirectorTasks(): string;
}
  
interface TeacherInterface {
    workTeacherTasks(): string;
}
  
class Director implements DirectorInterface {
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
}
  
class Teacher implements TeacherInterface {
    workTeacherTasks(): string {
      return "Getting to work";
    }
}
  
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
}
  
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}
  
function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    } else {
      return employee.workTeacherTasks();
    }
}
  
  // Test the functions
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

// Task 8
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    throw new Error('Invalid subject');
  }
}

// Test the function
console.log(teachClass('Math'));
console.log(teachClass('History'));
  