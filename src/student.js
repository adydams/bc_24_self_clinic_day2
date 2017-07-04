import SchoolPersonalData from './oop_project.js';

 /**
  * @class StudentData
  */

        class StudentData extends SchoolPersonalData{
              
               /**
   * @constructor constructor
   * @param {String} firstname
   * @param {String} lastname
   * @param {Number} age
   * @param {String} matricnum
   *  @param {Number} hostelnum
   */

            constructor (firstname, lastname, age, matricnum, hostelnum) {
        super(firstname, lastname, age);
        }

    displayStudentData () {
        super.displaySchoolPersonalData(); 
        console.log(`Firstname: ${this.lastname} + Matricnum: ${this.matricnum}+ Hostel Num: ${this.hostelnum}`);
    }

 }

 const joy = new StudentData('Joy', 'Duru',12,'csc/08/4668');
