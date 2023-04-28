export class Employee {
    constructor(id,name,surname,age){
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.salary=0;
    }
    increaseSalary() {
        this.salary += 100;
    }
}

