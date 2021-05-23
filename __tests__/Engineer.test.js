const Engineer = require("../lib/Engineer");

describe("engineer class", () => {
    let engineer;
    beforeEach(() => {
        engineer = new Engineer("test engineer", 2, "engineer@gmail.com", "username");
    });

    it("should generate a engineer object with their info", () => {
        expect(engineer).toEqual({ name: "test engineer", id: 2, email: "engineer@gmail.com", GitHub: "username" });
    });

    describe("getRole", () => {
        it("should return the role of engineer and override the Employee role", () => {
            expect(engineer.getRole()).toEqual("Engineer");
        });
        it("should not be equal to Employee", () => {
            expect(engineer.getRole()).not.toEqual("Employee");
        })
    });

    describe("getName", () => {
        it("is a method of the parent obj Employee, it should still function and return the name of the engineer", () => {
            expect(engineer.getName()).toEqual("test engineer");
        })
    })

    describe("getEmail", () => {
        it("is a method of the parent obj Employee, it should still function and return the email of the engineer", () => {
            expect(engineer.getEmail()).toEqual("engineer@gmail.com");
        })
    })

    describe("getId", () => {
        it("is a method of the parent obj Employee, it should still function and return the id of the engineer", () => {
            expect(engineer.getId()).toEqual(2);
        })
    })
})