import SchoolPersonalData from './oop_project.js';

 /**
  * @class StaffData
  */

        class StaffData extends SchoolPersonalData{
               /**
   * @constructor constructor
   * @param {String} firstname
   * @param {String} lastname
   * @param {Number} age
   * * @param {String} promotionallevel
   */

            constructor (firstname, lastname, age, promotionallevel ) {
        super(firstname, lastname, age);
    }

        displayStaffdata () {
         super.displaySchoolPersonalData(); 
            console.log(`Firstname: ${this.lastname} + Promotional level: ${this.promotionallevel}`);
        }

 }

 const Bill = new StaffData('Bill', 'Joe',12,'level 5');

