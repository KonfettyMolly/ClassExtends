const User = require('./user');
class Student extends User {
  constructor(name, surname, yearOfAdm) { //yearOfAdm - год поступления в институт
    super(name, surname);
    this.yearOfAdm = yearOfAdm
  }

  getCourse() {
    return new Date().getFullYear() - this.yearOfAdm;
  }
}
