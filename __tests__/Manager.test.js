const Manager = require("../lib/Manager");

describe("Manager class", () => {
    let manager;
    beforeEach(() => {
        manager = new Manager("test manager", 1, "manager@gmail.com", "666");
    });

    it("should generate a manager object with their info", () => {
        expect(manager).toEqual({ name: "test manager", id: 1, email: "manager@gmail.com", officeNumber: "666" });
    });

    describe("getRole", () => {
        it("should return the role of Manager and override the Employee role", () => {
            expect(manager.getRole()).toEqual("Manager");
        });
        it("should not be equal to Employee", () => {
            expect(manager.getRole()).not.toEqual("Employee");
        })
    });

    describe("getName", () => {
        it("is a method of the parent obj Employee, it should still function and return the name of the Manager", () => {
            expect(manager.getName()).toEqual("test manager");
        })
    })

    describe("getEmail", () => {
        it("is a method of the parent obj Employee, it should still function and return the email of the Manager", () => {
            expect(manager.getEmail()).toEqual("manager@gmail.com");
        })
    })

    describe("getId", () => {
        it("is a method of the parent obj Employee, it should still function and return the id of the Manager", () => {
            expect(manager.getId()).toEqual(1);
        })
    })
})
