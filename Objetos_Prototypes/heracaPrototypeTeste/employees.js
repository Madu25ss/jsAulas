function Employee(name, position, salary, isActive = true) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.isActive = isActive;
}

Employee.prototype.giveRaise = function(amount) {
    this.salary += amount;
}

Employee.prototype.terminate = function() {
    this.isActive = false;
}

function Manager(name, position, salary, isActive, team = []) {
    Employee.call(this, name, position, salary, isActive);
    this.team = team;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.addTeamMember = function(employeeName) {
    if(!this.team.includes(employeeName)) {
        this.team.push(employeeName);
    }else {
        console.log(`${employeeName} is already in the team.`);
    }
}

const employee1 = new Employee('name1', 'Developer', 3000);
const employee2 = new Employee('name2', 'Developer', 1500);
const manager1 = new Manager('manager1', 'Manager', 5000);

employee1.giveRaise(1500);
employee2.giveRaise(500);
employee2.terminate();
console.log(employee1);
console.log(employee2);

manager1.addTeamMember('member1');
manager1.addTeamMember('member2');
manager1.addTeamMember('member3');
manager1.addTeamMember('member4');
console.log(manager1);