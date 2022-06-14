const Employee= require('../lib/Employee');

describe("Employee", () => {
    it("should create an employee object", ()=> {
        const name= "Adeline";
        const id=15;
        const email= "adelineaguspranoto@gmail.com";
        const adeline= new Employee("Adeline",15,"adelineaguspranoto@gmail.com");

        expect(typeof(adeline).toBe("object"));
        expect(adeline.name).toEqual(name);
        expect(adeline.id).toEqual(id);
        expect(adeline.email).toEqual(email);
    });
    describe("getName", ()=>{
        it("should get employee's name", () => {
            const name= "Adeline";
            const adeline= new Employee("Adeline",15,"adelineaguspranoto@gmail.com");

            expect(adeline.getName()).toEqual(name);
        })
    });
    describe("getId", () => {
        it("should get employee's ID", () => {
            const id=15;
            const adeline= new Employee("Adeline",15,"adelineaguspranoto@gmail.com");

            expect(adeline.getId()).toEqual(id);
        })
    });
    describe("getEmail", () => {
        it("should get employee's email", ()=>{
            const email="adelineaguspranoto@gmail.com";
            const adeline= new Employee("Adeline",15,"adelineaguspranoto@gmail.com");

            expect(adeline.getEmail()).toEqual(email);
        })
    });
    describe("getRole",() => {
        it("should return employee as a role", () => {
            const role= "Employee";
            const adeline= new Employee("Adeline",15,"adelineaguspranoto@gmail.com");

            expect(adeline.getRole()).toEqual(role);
        })
    })
})