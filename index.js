//import files needed
const inquirer =require("inquirer");
const fs= require("fs");
const Manager= require("./lib/Manager");
const Engineer= require("./lib/Engineer");
const Intern= require("./lib/Intern");
const templateHTML=require('./src/templateHTML');

const teamMember=[];

//create initial prompts for manager's information
const initQuestions = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "enter manager's name:"
        },
        {
            type:'input',
            name:'id',
            message:"enter manager's id:"
        },
        {
            type:'input',
            name:'email',
            message: "enter manager's e-mail:",
        },
        
        {
            type:'input',
            name:'otherInfo',
            message:"enter manager's office number:",
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'add members?',
            choices: ['yes','no']
        }
    ])
    .then((answers)=> {
        return memberGenerator(answers)})
}

//create prompts for additional members (engineer/interns)
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

//create members with different attributes/properties based on the roles selected
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
    if (answers.addMember==='yes'){
        console.log("adding member");
        //ask more prompts
        return questions();
    } else {
        return teamMember;
    }
}

//create page using template imported
function generateHTML(teamMember){
    let memberCards=[];
    for(let i=0;i<teamMember.length;i++){
        const member= teamMember[i];

        //calling generateCard function to generate cards
        const memberCard= generateCard(member);

        memberCards.push(memberCard);
    }
    const membercardsHTML= memberCards.join(' ');
    const pageHTML=templateHTML(membercardsHTML);
    return pageHTML;
}

//create cards for page contents
function generateCard(member){
    const role= member.getRole();
    let otherInfo;
    let getInfo;
    if(role==="Manager"){
        otherInfo="Office Number";
        getInfo= member.getOfficenumber();
    }else if(role==="Engineer"){
        otherInfo="GitHub";
        getInfo= '<a href= https://github.com/'+member.getGithub()+' target="_blank">'+member.getGithub()+'</a>';
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
                        <p>email: <a href = "mailto:${member.getEmail()}">${member.getEmail()}</a></p>
                        <p>${otherInfo}: ${getInfo}</p>
                    </section>
                </section>
            `
}

//write pageData into a file 
function writeToFile(fileName,data){
    fs.writeFileSync(fileName,data,err=>{
        if(err){
            console.log(err);
        }else{
            console.log("Success!");
        }
    })
}

//function to run the app
function init(){
    //start with questions
    initQuestions()
        //once teamMember data is collected, generate page to display data
        .then((teamMember)=>generateHTML(teamMember))
        //write pageData into specified file
        .then((pageHTML)=>writeToFile('./dist/index.html',pageHTML))
        .catch((err)=>console.log(err));
}

//call function to start
init();