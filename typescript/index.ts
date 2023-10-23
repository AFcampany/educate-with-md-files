class User {
    name: string
    salary: number
    constructor(username, salary) {
      this.name = username
      this.salary = salary
      this.message = function () {
        return `Hello ${this.name} Your salary is ${this.salary}`
      }
    }
    sayMsg(){
      return `Hello ${this.name} Your salary is ${this.salary}`
    }
  }