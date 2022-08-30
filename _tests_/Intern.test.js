//testing intern
const Intern = require("../lib/Intern");

describe("Intern", () =>{
       
    //testing intern as an object and its school property to match defined school
    it("should create intern object and set school as a property", () =>{
        const school= "UW";
        const adeline= new Intern("Adeline",15,"adelineaguspranoto@gmail.com","UW");

        expect(adeline.school).toEqual(school);
    })

    //testing getSchool function, ensuring defined school to equal school info earned from object
    describe("getSchool",()=>{
        const school= "UW";
        const adeline= new Intern("Adeline",15,"adelineaguspranoto@gmail.com","UW");
        expect(adeline.getSchool()).toEqual(school);
    })

    //testing getRole function, ensuring defined role to equal role info earned from object
    describe("getRole", ()=>{
        const role = "Intern";
        const adeline= new Intern("Adeline",15,"adelineaguspranoto@gmail.com","UW");

        expect(adeline.getRole()).toEqual(role);
    })
})