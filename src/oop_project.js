 /**
  * @class SchoolPersonalData
  */
   
    class SchoolPersonalData{
        
         /**
   * @constructor constructor
   * @param {String} firstname
   * @param {String} lastname
   * @param {Number} age
   */

        constructor(firstname, lastname, age){
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
        
    }  

    personalDataToString(){
        //checking valid input
        if(typeof(this.firstname) != 'string'){
            
            return false;
        }
         if(typeof(this.lastname) != 'string'){
            
            return false;
        }
         if(typeof(this.age) != 'number'){
            
            return false;
        }
        return `first name: +${this.firstname}+ Lastname: +${this.lastname}+ Age: +${this.age} `   
    } 
    
    displaySchoolPersonalData(){
        console.log(personaldatatostring());
    }
}
export default SchoolPersonalData;
   



    
//creating object Dami
        const Dami= new displaySchoolPersonalData('Dami', 'Adigun', 15);

        

 

 

      
      