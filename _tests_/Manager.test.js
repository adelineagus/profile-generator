
const Manager= require("../lib/Manager");

describe("Manager", () =>{

     //testing manager as an object and its officenumber property to match defined officenumber
    it("should create manager object and set officeNumber as a property", () =>{
        const officeNumber= 123456789;
        const adeline= new Manager("Adeline",15,"adelineaguspranoto@gmail.com",123456789);

        expect(adeline.officeNumber).toEqual(officeNumber);
    })

    //testing getOfficenumber function, ensuring defined office number to equal officenumber info earned from object
    describe("getOfficenumber",()=>{
        const officeNumber=123456789;
        const adeline= new Manager("Adeline",15,"adelineaguspranoto@gmail.com",123456789);

        expect(adeline.getOfficenumber()).toEqual(officeNumber);
    })
    
    //testing getRole function, ensuring defined role to equal role info earned from object
    describe("getRole", ()=>{
        const role = "Manager";
        const adeline= new Manager("Adeline",15,"adelineaguspranoto@gmail.com",123456789);

        expect(adeline.getRole()).toEqual(role);
    })
})