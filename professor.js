const User = require('./user');
class Professor extends User {
  constructor(name, surname, yearOfAdm) {
    super(name, surname);
    this.yearOfAdm = yearOfAdm
  }

  getWorkerYears() {
    return new Date().getFullYear() - this.yearOfAdm;
  }
}
