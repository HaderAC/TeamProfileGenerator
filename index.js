const inquirer = require("inquirer");

const init = async () => {
    const managerInfo = await getManagerInfo();
    console.log(managerInfo.managerName);
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
            name: "ManagerEmail",
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