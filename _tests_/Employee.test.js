
const Employee= require('../lib/Employee');

describe("Employee", () => {
    //testing employee as an object
    it("should create an employee object", ()=> {
        const name= "Adeline";
        const id=15;
        const email= "adelineaguspranoto@gmail.com";
        const adeline= new Employee("Adeline",15,"adelineaguspranoto@gmail.com");

        expect(adeline.name).toEqual(name);
        expect(adeline.id).toEqual(id);
        expect(adeline.email).toEqual(email);
    });

    //testing getName function, ensuring name defined is equal to name earned from object
    describe("getName", ()=>{
        it("should get employee's name", () => {
            const name= "Adeline";
            const adeline= new Employee("Adeline",15,"adelineaguspranoto@gmail.com");

            expect(adeline.getName()).toEqual(name);
        })
    });

    //testing getId function, ensuring id defined is equal to id earned from object
    describe("getId", () => {
        it("should get employee's ID", () => {
            const id=15;
            const adeline= new Employee("Adeline",15,"adelineaguspranoto@gmail.com");

            expect(adeline.getId()).toEqual(id);
        })
    });

    //testing getEmail function, ensuring email defined is equal to email earned from object
    describe("getEmail", () => {
        it("should get employee's email", ()=>{
            const email="adelineaguspranoto@gmail.com";
            const adeline= new Employee("Adeline",15,"adelineaguspranoto@gmail.com");

            expect(adeline.getEmail()).toEqual(email);
        })
    });

    //testing getRole function, ensuring role defined is equal to role earned from object
    describe("getRole",() => {
        it("should return employee as a role", () => {
            const role= "Employee";
            const adeline= new Employee("Adeline",15,"adelineaguspranoto@gmail.com");

            expect(adeline.getRole()).toEqual(role);
        })
    })
})