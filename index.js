const inquirer =require("inquirer");
const fs= require("fs");
const Manager= require("./lib/Manager");
const Engineer= require("./lib/Engineer");
const Intern= require("./lib/Intern");
const templateHTML=require('./src/templateHTML');

const teamMember=[];

const managerQuestions = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'enter name:'
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
        }
    ])
    .then((answers)=> {
        return memberGenerator(answers)})
}
const questions = () =>{
    return inquirer.prompt([
        {
            type:'list',
            name:'role',
            message:'select role:',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'enter name:'
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
    ])
    .then((answers)=> {
        return memberGenerator(answers)})
        
}


function memberGenerator(answers){
    let member;
    if(answers.role==='Intern'){
        member= new Intern(answers.name,answers.id,answers.email,answers.otherInfo);
    } else if (answers.role==='Engineer'){
        member= new Engineer(answers.name,answers.id,answers.email,answers.otherInfo);
    } else{
        member= new Manager(answers.name,answers.id,answers.email,answers.otherInfo);
    }
    teamMember.push(member);
    if (answers.addMember==='yes'||member.getRole()==='Manager'){
        return questions();
    } else {
        return teamMember;
    }

}


function generateHTML(teamMember){
    let memberCards=[];
    for(let i=0;i<teamMember.length;i++){
        const member= teamMember[i];
        console.log(member);
        const memberCard= generateCard(member);

        memberCards.push(memberCard);
    }
    console.log(memberCards);
    const membercardsHTML= memberCards.join(' ');
    const pageHTML=templateHTML(membercardsHTML);
    return pageHTML;
}

function generateCard(member){
    const role= member.getRole();
    let otherInfo;
    let getInfo;
    if(role==="Manager"){
        otherInfo="Office Number";
        getInfo= member.getOfficenumber();
    }else if(role==="Engineer"){
        otherInfo="GitHub";
        getInfo= member.getGithub();
    } else{
        otherInfo="School";
        getInfo=member.getSchool();
    }

    return `
    <section class="card">
        <section class="card-header">
            <h3> ${member.getName()}</h3>
            <h3>${member.getRole()}</h3>
        </section>
        <section class="card-body">
            <p>ID: ${member.getId()}</p>
            <p>email: ${member.getEmail()}</p>
            <p>${otherInfo}: ${getInfo}</p>
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

function init(){
    console.log(teamMember.length);
    managerQuestions()
        //.then((answers)=>memberGenerator(answers))
        .then((teamMember)=>generateHTML(teamMember))
        .then((pageHTML)=>writeToFile('./dist/index.html',pageHTML))
        .catch((err)=>console.log(err));
}

//questions()
    //.then((teamMember)=>generateHTML(teamMember))
    //.then((pageHTML)=>writeToFile('index.html',pageHTML))
    //.catch((err)=>console.log(err));
init();