const inquirer = require("inquirer");
const Manager = require("./lib/Manager");

let manager;
let engineers = [];

// Starts the app
const init = async () => {
    const managerInfo = await getManagerInfo();
    manager = new Manager(managerInfo.managerName, managerInfo.managerID, managerInfo.managerEmail, managerInfo.managerOfficeNumber );
    
    // After manager call function for choices (add engineer, add intern, build team html)
    getMenuOptions();
}

// Get options from menu and call functions depending on choice
const getMenuOptions = async () => {
    const options = await menuOptions();

    switch (options.choices) {
        case "Add engineer":
            addEngineer();
            break;
    }
}

// Function to get engineer info and create engineer object
const addEngineer = async () => {
    const engineerInfo = await getEngineerInfo();
    const engineer = new engineer();
    engineers.push(engineer);

    // Recall options so app doesnt quit
    getMenuOptions();
}

// Inquirer props for menu options (add engineer, add intern, build team)
const menuOptions = () => {
    return
}

// Get all the manager's information
const getManagerInfo = () => {
    return inquirer.prompt([
        {
            name: "managerName",
            type: "input",
            message: "Enter Manager's name: "
        },
        {
            name: "managerID",
            type: "number",
            message: "Enter Managers Employee ID: "

        },
        {
            name: "managerEmail",
            message: "Enter Managers Email:",
        },
        {
            name: "managerOfficeNumber",
            type: "number",
            message: "Enter managers office number: ",
        }
    ])
}
init();