const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/intern");

let manager;
let engineers = [];
let interns = [];

// Starts the app
const init = async () => {
    const managerInfo = await getManagerInfo();
    manager = new Manager(managerInfo.managerName, managerInfo.managerID, managerInfo.managerEmail, managerInfo.managerOfficeNumber);

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
        case "Add intern":
            addIntern();
            break;
        case "Build Team":
            buildTeam();
            break;
    }
}
// Inquirer props for menu options (add engineer, add intern, build team)
const menuOptions = () => {
    return inquirer.prompt([
        {
            name: "choices",
            type: "rawlist",
            choices: ["Add engineer", "Add intern", "Build Team"]
        }
    ])
}

const addIntern = async () =>{
    const internInfo = await getInternInfo();
    const intern = new Intern(internInfo.internName, internInfo.internID, internInfo.internEmail, internInfo.internSchool);
    interns.push(intern);

    getMenuOptions();
}

const getInternInfo = () =>{
    return inquirer.prompt([
        {
            name: "internName",
            type: "input",
            message: "Enter Intern's name: "
        },
        {
        name: "internID",
        type: "number",
        message: "Enter Intern's ID: "
        },
        {
            name: "internEmail",
            type: "input",
            message: "Enter Intern's Email: "
        },
        {
            name: "internSchool",
            type: "input",
            message: "Enter Intern's School: "
        }

    ])
}


// Function to get engineer info and create engineer object
const addEngineer = async () => {
    const engineerInfo = await getEngineerInfo();
    const engineer = new Engineer(engineerInfo.engineerName, engineerInfo.engineerID, engineerInfo.engineerEmail, engineerInfo.engineerGithub);
    engineers.push(engineer);

    // Recall options so app doesnt quit
    getMenuOptions();
}
// Prompts for getting engineer information
const getEngineerInfo = () => {
    return inquirer.prompt([
        {
            name: "engineerName",
            type: "input",
            message: "Enter Engineer's name: "
        },
        {
            name: "engineerID",
            type: "number",
            message: "Enter Engineer's Employee ID: "
        },
        {
            name: "engineerEmail",
            type: "input",
            message: "Enter Engineer's Email: "
        },
        {
            name: "engineerGithub",
            type: "input",
            message: "Enter Engineer's Github: "
        }

    ])
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
            message: "Enter Manager's Employee ID: "

        },
        {
            name: "managerEmail",
            type: "input",
            message: "Enter Manager's Email:",
        },
        {
            name: "managerOfficeNumber",
            type: "number",
            message: "Enter Manager's office number: ",
        }
    ])
}

const buildTeam = async() =>{
    // Create HTML page content.
    const html = await generateHTML();

    // Create the file, and folder if doesnt exist
    if (!fs.existsSync("./dist")) {
        fs.mkdir("./dist", {recursive: true}, (err => {
            if (err) throw err;
        }))
    }
    
    writeHTML("./dist/index.html", html);
}

const generateHTML = async ()=>{
    const employeeCards = await generateCards();

    const topHalf = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="../style.css">
        </head>
        <body>
            <header>
                <h1>Your Team</h1>
            </header>

            <main class="container custom-flex">
    `

    const bottomHalf = `
            </main>
        </body>
    </html>`

    const page = topHalf + employeeCards + bottomHalf;

    return page;
}

const generateCards = async () => {
    cardsString = "";

    const managerCard = await createCardHTML(manager, "manager");
    cardsString += managerCard;

    for (const engineer of engineers) {
        const HTML = await createCardHTML(engineer, "engineer");
        cardsString += HTML;
    }

    for (const intern of interns) {
        const HTML = await createCardHTML(intern, "intern");
        cardsString += HTML;
    }

    console.log(cardsString);

    return cardsString;
}

const createCardHTML = (employee, role) => {
    let liContent;
    if (role === "manager") {
        liContent = `Office: ${employee.officeNumber}`
    } else if (role === "engineer") {
        liContent = `GitHub: ${employee.GitHub}`
    } else if (role === "intern") {
        liContent = `School: ${employee.school}`
    }

    return `
    <div class="card">
            <div class="card-header">
                <h2 class="card-title">${employee.name}</h2>
                <h3 class="role">${employee.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul>
                    <li>${employee.id}</li>
                    <li>${employee.email}</li>
                    <li>${liContent}</li>
                </ul>
            </div>
        </div>
        `
}

const writeHTML = (path, html) => {
    fs.writeFile(path, html, (err) => {
        if (err) console.log(err);
        console.log("Successfully create page");
    });
}

init();