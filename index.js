const inquirer =require("inquirer");
const fs= require("fs");
const Manager= require("./lib/Manager");
const Engineer= require("./lib/Engineer");
const Intern= require("./lib/Intern");
const templateHTML=require('./src/templateHTML')

const teamMember=[];

const questions = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'enter name:'
        },
        {
            type:'list',
            name:'role',
            message:'select role:',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type:'input',
            name:'id',
            message:"enter member's id:"
        },
        {
            type:'input',
            name:'email',
            message: "enter member's e-mail:",
        },
        
        {
            type:'input',
            name:'otherInfo',
            message:"enter manager's office number:",
            when: (input)=>input.role==='Manager'
        },

        {
            type:'input',
            name:'otherInfo',
            message:"enter engineer's github username:",
            when: (input)=>input.role==='Engineer'
        },
        {
            type:'input',
            name:'otherInfo',
            message:"enter intern's school:",
            when: (input)=>input.role==='Intern'
        },

        {
            type: 'list',
            name: 'addMember',
            message: 'add more members?',
            choices: ['yes','no']
        }
    ]);
};


function memberGenerator(answers){
    let member;
    if(answers.role==='Manager'){
        member= new Manager(answers.name,answers.id,answers.email,answers.otherInfo);
    } else if (answers.role==='Engineer'){
        member= new Engineer(answers.name,answers.id,answers.email,answers.otherInfo);
    } else{
        member= new Intern(answers.name,answers.id,answers.email,answers.otherInfo);
    }

    teamMember.push(member);
    if (answers.addMember==="yes"){
        start();
    } else {
        return teamMember;
    }
}


function generateHTML(teamMember){
    let memberCards=[];
    for(let i=0;i<teamMember.length;i++){
        const member= teamMember[i];
        const role= member.role;

        const memberCard= generateCard(member,role);

        memberCards.push(memberCard);
    }

    const membercardsHTML= memberCards.join(' ');
    const pageHTML=templateHTML(membercardsHTML);
    console.log(pageHTML);
    return pageHTML;
}

function generateCard(member,role){
    return `
    <section class="card">
        <section class="card-header">
            <h3> ${member.name}</h3>
            <h3>${member.role}</h3>
        </section>
        <section class="card-body">
            <p>ID: ${member.id}</p>
            <p>email: ${member.email}</p>
            <p>${role}: ${member.otherInfo}</p>
        </section>
    </section>
    `
}

function writeToFile(fileName,data){
    fs.writeFileSync(fileName,data,err=>{
        if(err){
            console.log(err);
        }else{
            console.log("Success!");
        }
    })
}

function start(){
    questions()
    .then((answers)=>memberGenerator(answers))
    .then((teamMember)=>generateHTML(teamMember))
    
    .then((pageHTML)=>writeToFile('index.html',pageHTML))
    .catch((err)=>console.log(err));
}

start();