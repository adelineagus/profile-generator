//setting up manager as an extension of employee

const Employee= require('./Employee')
class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber=officeNumber;
    }
    getOfficenumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

module.exports= Manager;