const User = require('../../models/User');
const express = require('express');
const router = express.Router();
const OnePage = require("../../models/OnePage")
const Resume = require("../../models/Resume")
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');
const db = require('../../config/keys').mongoURI;
const faker = require('faker');

const randomFirstName = faker.name.firstName(); // Rowan
const  randomLastName = faker.name.lastName(); // Nikolaus
const  randomEmail = faker.internet.email(); 
const randomZipCode = faker.address.zipCode();
const randomCompanyLogo = faker.image.image(); 
const randomEmployerImage = faker.image.avatar();


router.post('/newEmployees', (req, res) => {
    const allFirstNames = [];
    const allLastNames = [];
    const allEmails= [];
    const allZipCodes= [];

    for (let index = 0; index < 100; index++) {
        const firstName = randomFirstName;
        const lastName = randomLastName;
        const email = randomEmail;
        const zipcode = randomZipCode;
        allFirstNames.push(firstName);
        allLastNames.push(lastName);
        allEmails.push(email);
        allZipCodes.push(zipcode);
    }



    const employes = [];
    for (let index = 0; index < 100; index++) {
        employes.push({
        'email': `${allEmails[index]}`,
        'password': 'hunter2',
        'fName': `${allFirstNames[index]}`,
        'lName': `${allLastNames[index]}`,
        'zipCode': `${allZipCodes}`,
        'role': "employee",
        "resume": []
        })

        
    }
    const send = employes.map((employe, i) => {
        signupEmployees(employe, i )

    })
    res.json({
        "send": send
    })


})


const signupEmployees = (emmploye, num) => {
    const jobFields = [
        "Finance",
        "SoftwareEngineering", 
        "Healthcare", "Marketing", 
        "Transportation", 
        "Culinary", 
        "Business", 
        "Insurance"]

    const jobSkills = {
            Finance: [
                "A formal accounting qualification", 
                "Interpersonal skills", 
                "Ability to communicate", 
                "Financial reporting", 
                "Analytical ability", 
                "Problem-solving skills", 
                "Knowledge of IT software", 
                "Management experience", 
                "Commercial acumen", 
                "Capacity for innovation"
            ],
            SoftwareEngineering: [
                "Computer Science",
                "Software Development",
                "Java",
                "SQL",
                "JavaScript",
                "Communication Skills",
                "Linux",
                "Python",
                "Design Development",
                "HTML"
            ],
            Healthcare:[
                "Communication skills (verbal & written)",
                "Strong work ethic",
                "Teamwork skills",
                "Initiative",
                "Interpersonal skills",
                "Problem-solving skills",
                "Analytical skills",
                "Flexibility/adaptability",
                "Computer skills",
                "Technical skills"
            ] , 
            Marketing:[
                "Exceptional communication skills",
                "Creativity and imagination.",
                "Interpersonal skills",
                "Influencer abilities",
                "Business savvy",
                "Analytic skills and numerac",
                "Trend-savvy marketing skill",
                "Niche marketing skills ",
                "Collaborating with designers to create logos",
                "Selecting and training brand ambassadors"
            ] ,
            Transportation:[
                "Focus on Safety",
                " Dedication",
                "Integration Skills",
                "Flexibility",
                "Attention to Detail",
                "Problem-Solving Skills",
                "Clarity",
                "Forward Thinking",
                "Has a Servant’s Heart",
                "Eye for Talent"
            ] ,
            Culinary:[
                "Baking",
                "Baking Techniques",
                "Consistency",
                "Cooking",
                "Culinary Expertise",
                "Food Preparation",
                "Grilling",
                "Ingredient Selection",
                "Supervising",
                "Quality of Food"
            ] ,
            Business:[
                "Information and Communications Technology(ICT)",
                "LinkedIn Skills",
                "Marketing",
                "Microsoft Office",
                "Nonverbal Communication",
                "Presentation",
                "Public Speaking",
                "Social Media",
                "Technical Support",
                "Verbal Communication"
            ] ,
            Insurance:[
                "Agency Management",
                "Insurance Sales Expert",
                "Insurance Analyst",
                "Developing Insurance Reporting",
                "Team Management",
                "Risk Analysis",
                "Communication",
                "Customer service",
                "Teamwork",
                "Professionalism"
            ] }



    const newUser = new User(emmploye);
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                const resume = {
                    'userId': newUser.id,
                    'jobHistory': `jobHistory${num}`,
                    'jobField': `${jobFields[num % jobFields.length]}`,
                    'jobSkills': `jobSkills${num}`

                }
                const newResume = new Resume(resume)
                console.log(newResume)
                // console.log(newUser)
                const iddd = newResume.id
                return iddd
            }).catch(err => console.log(err))
        })
    })
}



router.post('/newEmployers', (req, res) => {
    const jobFields = [ "Finance", "Software Engineering", "Healthcare", "Marketing", "Transportation", "Culinary", "Business", "Insurance"]

    const names = ["John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul",
        "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul",
        "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul",
        "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul",
        "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul"
    ];


    const emmployers = names.map((name, i) => ({
        'email': `employer${i * 156205}@employer${i * 156205}.com`,
        'password': 'hunter2',
        'fName': name,
        'lName': 'employer',
        'zipCode': 61920,
        'role': "employer"
    }))

    const send = jobFields.map((jobField) => {
        emmployers.map((emmploye) => {
            signupEmployers(emmploye, jobField)

        })

    })


    res.json({
        "send": send
    })


})

const signupEmployers = (emmployer, jobField) => {

    const newUser = new User(emmployer);
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
            .then(user => {
                const onepage = {
                    'userId': newUser.id,
                    'companyName': `companyName${num}`,
                    'description': `description${num}`,
                    'jobTitle': `jobTitle${num}`,
                    'jobField': jobField,
                    'jobSkills': `jobSkills${num}`,
                    'type': 'type',
                    'benefits': `benefits${num}`,
                    'startingPay': num
                }
                const newonepage = new OnePage(onepage)
                console.log(newonepage)

                return (newonepage)
            })
            .catch(err => console.log(err))
        })
    })
}




//Used to signup the demo user the will be used on the modle
router.post('/newDemoUser', (req, res) => {

    const demoUser = {
        'email': `donnie@donnie.donnie`,
        'password': '123456',
        'fName': 'demo',
        'lName': 'demo',
        'zipCode': 61920,
        'role': 'demo'
    }

    const send = signupDemoUser(demoUser, i * 156205)

    res.json({
        "send": send
    })

})

router.post('/newEmployeesDemo', (req, res) => {

    const names = ["John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul",
                "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul", 
                "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul", 
                "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul", 
                "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul"];

    const emmployes = names.map((name, i) => ({
        'email': `employee${i *15625 }@employee${i * 15625 }.com`,
        'password': '$2a$10$rblxBXsOBY7/5i8DSVX9n.Qd14WyLHWy3BlVijm.v68OrfGp.6WCe',
        'fName': name ,
        'lName': "employee",
        'zip_code': 61920 ,
        'role': "employee",
        "resume":[]
    }))
    
    const send = emmployes.map((emmploye, i)=> {
        seed(emmploye, i * 15625)
    })
})

const signupDemoUser = (demo, num) => {

    const newUser = new User(demo);
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
            .then(user => {
                const resume = {
                    'userId': newUser.id,
                    'jobHistory': `jobHistory${num}`,
                    'jobField': `jobField${num}`,
                    'jobSkills': `jobSkills${num}`

                }
                const newResume = new Resume(resume)
                return (newResume)
            })
            .catch(err => console.log(err))
        })
    })
}




const seed = (emmploye , num) => {
    const newUser = new User(emmploye);
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
                .save()
                .then(user => {
                    const resume = {
                        'userId': newUser.id,
                        'jobHistory': `jobHistory${num}`,
                        'jobField': `jobField${num}`,
                        'jobSkills': `jobSkills${num}`

                    }
                    const newResume = new Resume(resume)
                    console.log(newResume)
                    const iddd = newResume.id
                    return iddd
                })
                .catch(err => console.log(err))
        })
    })

    

}

module.exports = router;