const Intern = require("../lib/Intern");

describe("Intern class", () => {
    let intern;
    beforeEach(() => {
        intern = new Intern("test intern", 3, "intern@gmail.com", "UM");
    });

    it("should generate a intern object with their info", () => {
        expect(intern).toEqual({ name: "test intern", id: 3, email: "intern@gmail.com", school: "UM" });
    });

    describe("getRole", () => {
        it("should return the role of Manager and override the Employee role", () => {
            expect(intern.getRole()).toEqual("Intern");
        });
        it("should not be equal to Employee", () => {
            expect(intern.getRole()).not.toEqual("Employee");
        })
    });

    describe("getName", () => {
        it("is a method of the parent obj Employee, it should still function and return the name of the Manager", () => {
            expect(intern.getName()).toEqual("test intern");
        })
    })

    describe("getEmail", () => {
        it("is a method of the parent obj Employee, it should still function and return the email of the Manager", () => {
            expect(intern.getEmail()).toEqual("intern@gmail.com");
        })
    })

    describe("getId", () => {
        it("is a method of the parent obj Employee, it should still function and return the id of the Manager", () => {
            expect(intern.getId()).toEqual(3);
        })
    })
})
