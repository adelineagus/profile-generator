
const Engineer = require("../lib/Engineer");

describe("Engineer", () =>{
    it("should create engineer object and set gitHub as a property", () =>{
        const gitHub= "adelineagus";
        const adeline= new Engineer("Adeline",15,"adelineaguspranoto@gmail.com","adelineagus");

        expect(adeline.gitHub).toEqual(gitHub);
    })
    describe("getGithub",()=>{
        const gitHub= "adelineagus";
        const adeline= new Engineer("Adeline",15,"adelineaguspranoto@gmail.com","adelineagus");
        expect(adeline.getGithub()).toEqual(gitHub);
    })
    describe("getRole", ()=>{
        const role = "Engineer";
        const adeline= new Engineer("Adeline",15,"adelineaguspranoto@gmail.com","adelineagus");

        expect(adeline.getRole()).toEqual(role);
    })
})