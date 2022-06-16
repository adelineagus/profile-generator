
const Manager= require("../lib/Manager");

describe("Manager", () =>{
    it("should create manager object and set officeNumber as a property", () =>{
        const officeNumber= 123456789;
        const adeline= new Manager("Adeline",15,"adelineaguspranoto@gmail.com",123456789);

        expect(adeline.officeNumber).toEqual(officeNumber);
    })
    describe("getOfficenumber",()=>{
        const officeNumber=123456789;
        const adeline= new Manager("Adeline",15,"adelineaguspranoto@gmail.com",123456789);

        expect(adeline.getOfficenumber()).toEqual(officeNumber);
    })
    describe("getRole", ()=>{
        const role = "Manager";
        const adeline= new Manager("Adeline",15,"adelineaguspranoto@gmail.com",123456789);

        expect(adeline.getRole()).toEqual(role);
    })
})