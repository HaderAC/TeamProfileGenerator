const Employee = require("../lib/Employee");

describe("Employee class", () => {
    let test;
    beforeEach(() => {
        test = new Employee("test name", 1, "test@gmail.com");
    })
    it("Stores information of employees", () => {
        expect(test).toEqual({ name: 'test name', id: 1, email: 'test@gmail.com' });
    });

    describe("getName", () => {
        it("should return the name of the employee", () => {
            expect(test.getName()).toEqual("test name");
        })
    });

    describe("getEmail", () => {
        it("should return the email of the employee", () => {
            expect(test.getEmail()).toEqual("test@gmail.com");
        })
    });

    describe("getRole", () => {
        it("should return the role of the emplyee (which is just employee here)", () => {
            expect(test.getRole()).toEqual("Employee");
        })
    })
})