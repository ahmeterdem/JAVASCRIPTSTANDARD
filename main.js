import {Employee} from "./Employee.js";

let employee=new Employee(1,"Atakan","Kaan",23);
console.log(employee);

employee.increaseSalary();
console.log(employee.salary);
