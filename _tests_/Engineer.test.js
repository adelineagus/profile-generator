//testing engineer
const Engineer = require("../lib/Engineer");

describe("Engineer", () =>{
    //testing engineer as an object and its gitHub property to match defined gitHub
    it("should create engineer object and set gitHub as a property", () =>{
        const gitHub= "adelineagus";
        const adeline= new Engineer("Adeline",15,"adelineaguspranoto@gmail.com","adelineagus");

        expect(adeline.gitHub).toEqual(gitHub);
    })

    //testing getGithub function, ensuring defined github to equal github info earned from object
    describe("getGithub",()=>{
        const gitHub= "adelineagus";
        const adeline= new Engineer("Adeline",15,"adelineaguspranoto@gmail.com","adelineagus");
        expect(adeline.getGithub()).toEqual(gitHub);
    })

    //testing getRole function, ensuring defined role to equal role info earned from object
    describe("getRole", ()=>{
        const role = "Engineer";
        const adeline= new Engineer("Adeline",15,"adelineaguspranoto@gmail.com","adelineagus");

        expect(adeline.getRole()).toEqual(role);
    })
})