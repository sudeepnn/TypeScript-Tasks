var employee = /** @class */ (function () {
    function employee(id, name, age, department, salary, healthy) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.department = department;
        this.salary = salary;
        this.healthy = healthy;
    }
    Object.defineProperty(employee.prototype, "printemployee", {
        get: function () {
            return {
                id: this.id,
                name: this.name,
                age: this.age,
                department: this.department,
                salary: this.salary,
                healthy: this.healthy
            };
        },
        enumerable: false,
        configurable: true
    });
    employee.prototype.setemployee = function (emp) {
        this.id = emp.id;
        this.name = emp.name;
        this.age = emp.age;
        this.department = emp.department;
        this.salary = emp.salary;
        this.healthy = emp.healthy;
    };
    return employee;
}());
function employesinDept(emp, department) {
    var filteredemp = emp.filter(function (e) { return e.department === department; });
    var totalsal = filteredemp.reduce(function (sum, e) { return sum + e.salary; }, 0);
    return { filteredemp: filteredemp, totalsal: totalsal };
}
var e1 = new employee(1, "sudeep", 21, "IT", 120000, true);
var e2 = new employee(1, "rajesh", 24, "IT", 10000, true);
var e3 = new employee(1, "suraj", 19, "IT", 19000, true);
var e4 = new employee(1, "mohan", 22, "management", 17000, true);
var e5 = new employee(1, "kumar", 24, "management", 11000, true);
var employeslist = [];
employeslist.push(e1);
employeslist.push(e2);
employeslist.push(e3);
employeslist.push(e4);
employeslist.push(e5);
// console.log("All employees");
// for (let employee of employeslist) {
//     console.log(employee.printemployee);
// }
console.log(employesinDept(employeslist, "IT"));
console.log(employesinDept(employeslist, "management"));
