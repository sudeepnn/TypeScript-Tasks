import { empinterface } from "./employeInterface";

class employee implements empinterface{
    constructor(public id: number,public name: string,public age: number,public department: string,public salary: number,public healthy: boolean){

    }

    get employee(){
        return {
            id: this.id,
            name: this.name,
            age: this.age,
            department: this.department,
            salary: this.salary,
            healthy: this.healthy
        }
    }


    setemployee(emp: empinterface) {
        this.id = emp.id;
        this.name = emp.name;
        this.age = emp.age;
        this.department = emp.department;
        this.salary = emp.salary;
        this.healthy = emp.healthy;
    }

}

let e1=new employee(1,"sudeep",21,"Artifical interpretation",120000,true);
let e2=new employee(1,"rajesh",24,"Computer SCience",10000,true);
let e3=new employee(1,"suraj",19,"Artifical interpretation",19000,true);
let e4=new employee(1,"mohan",22," interpretation",17000,true);
let e5=new employee(1,"kumar",24,"Artifical interpretation",11000,true);


console.log(e1.employee)
console.log(e2.employee)
console.log(e3.employee)
console.log(e4.employee)
console.log(e5.employee)
