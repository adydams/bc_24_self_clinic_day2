import assert from 'assert';
import SchoolPersonalData from '../oop_project.js'


studentObject = new SchoolPersonalData();

describe('handles valid input', ()=>{

    it("should return a string for input jane,joe,15"), ()=>{
        assert.typeOf(studentObject.displaySchoolPersonaldata('jane', 'joe', 15), 'string')
    }
})
describe('handles valid input', ()=>{

    it("should return -1 if input is"), ()=>{
        assert.typeOf(studentObject.displaySchoolPersonaldata('Dami', 'Adigun', 15), 'string')
    }
})