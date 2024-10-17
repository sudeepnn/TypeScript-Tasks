import { empinterface } from "./empInterface";

class employee implements empinterface{
    constructor(public id: number,public name: string,public age: number,public department: string,public salary: number,public healthy: boolean){

    }

    get printemployee(){
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

function employesinDept(emp: employee[], department: string):{filteredemp: employee[],totalsal: number} {
   const filteredemp=emp.filter(e =>e.department===department)
   const totalsal=filteredemp.reduce((sum,e)=>sum+e.salary,0)
    return {filteredemp,totalsal };
}

let e1=new employee(1,"sudeep",21,"IT",120000,true);
let e2=new employee(1,"rajesh",24,"IT",10000,true);
let e3=new employee(1,"suraj",19,"IT",19000,true);
let e4=new employee(1,"mohan",22,"management",17000,true);
let e5=new employee(1,"kumar",24,"management",11000,true);

let employeslist:employee[]=[]
employeslist.push(e1);
employeslist.push(e2);
employeslist.push(e3);
employeslist.push(e4);
employeslist.push(e5);

// console.log("All employees");
// for (let employee of employeslist) {
//     console.log(employee.printemployee);
// }

console.log(employesinDept(employeslist,"IT"))
console.log(employesinDept(employeslist,"management"))


