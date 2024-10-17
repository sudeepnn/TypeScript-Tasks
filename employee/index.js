var employee = /** @class */ (function () {
    function employee(id, name, age, department, salary, healthy) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.department = department;
        this.salary = salary;
        this.healthy = healthy;
    }
    Object.defineProperty(employee.prototype, "employee", {
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
var e1 = new employee(1, "sudeep", 21, "Artifical interpretation", 120000, true);
var e2 = new employee(1, "rajesh", 24, "Computer SCience", 10000, true);
var e3 = new employee(1, "suraj", 19, "Artifical interpretation", 19000, true);
var e4 = new employee(1, "mohan", 22, " interpretation", 17000, true);
var e5 = new employee(1, "kumar", 24, "Artifical interpretation", 11000, true);
console.log(e1.employee);
console.log(e2.employee);
console.log(e3.employee);
console.log(e4.employee);
console.log(e5.employee);
