const Intern = require("../lib/Intern");

describe("Intern", () =>{
    it("should set school as a property", () =>{
        const school= "UW";
        const adeline= new Intern("Adeline",15,"adelineaguspranoto@gmail.com","UW");

        expect(adeline.school).toEqual(school);
    })
    describe("getGithub",()=>{
        const school= "UW";
        const adeline= new Intern("Adeline",15,"adelineaguspranoto@gmail.com","UW");
        expect(adeline.getSchool()).toEqual(school);
    })
    describe("getRole", ()=>{
        const role = "Intern";
        const adeline= new Intern("Adeline",15,"adelineaguspranoto@gmail.com","UW");

        expect(adeline.getRole()).toEqual(role);
    })
})