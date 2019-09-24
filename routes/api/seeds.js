const User = require('../../models/User');
const express = require('express');
const router = express.Router();
const OnePage = require("../../models/OnePage")
const Resume = require("../../models/Resume")
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');
const db = require('../../config/keys').mongoURI;
const faker = require('faker');

const randomFirstName = faker.name.firstName; // Rowan
const  randomLastName = faker.name.lastName; // Nikolaus
const  randomEmail = faker.internet.email; 
const randomZipCode = faker.address.zipCode;
const randomParagraph = faker.lorem.paragraph;
const randomCompanyLogo = faker.image.business;
const randomCompanyCatchPhrase = faker.company.catchPhrase;
const randomCompanyName = faker.company.companyName;
const randomEmployerImage = faker.image.avatar;
const randomEmployerJobTitle = faker.name.jobTitle;
const randomEmployerJobDescriptor = faker.name.jobDescriptor;
const randomEmployerJobPay = faker.random.number;




    const types = ['part time', 'full time', 'freelance']
    const jobFields = [
        "Finance",
        "SoftwareEngineering",
        "Healthcare", "Marketing",
        "Transportation",
        "Culinary",
        "Business",
        "Insurance"
    ]

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
        Healthcare: [
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
        ],
        Marketing: [
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
        ],
        Transportation: [
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
        ],
        Culinary: [
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
        ],
        Business: [
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
        ],
        Insurance: [
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
        ]
    }

router.post('/newEmployees', (req, res) => {
    const allFirstNames = [];
    const allLastNames = [];
    const allEmails= [];
    const allZipCodes= [];

    for (let index = 0; index < 100; index++) {
        const firstName = randomFirstName();
        const lastName = randomLastName();
        const email = randomEmail();
        const zipcode = randomZipCode();
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
        const resume = signupEmployees(employe, i)
        resume

    })
    res.json({
        "send": send
    })


})


const signupEmployees = (emmploye, num) => {
    const newUser = new User(emmploye);
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                const jobField = jobFields[num % jobFields.length]
                const resume = {
                    'userId': newUser.id,
                    'jobHistory': `${randomParagraph()}`,
                    'jobField': `${jobField}`,
                    'jobSkills': `${jobSkills[jobField]}`

                }
                const newResume = new Resume(resume)
                newResume.save()
                    .then((resume) => {
                        const proximity = Math.floor(Math.random() * 101);
                        const salaryRangeLow = Math.floor(Math.random() * 100000)+ 10000;
                        const salaryRangeHigh = Math.floor(Math.random() * 500000) + salaryRangeLow;
                        const preference = {
                            'userId': newUser.id,
                            'jobField': `${jobField}`,
                            'proximity': proximity,
                            'type': `${types[num % 3]}`,
                            'salaryRangeHigh': salaryRangeHigh,
                            'salaryRangeLow': salaryRangeLow
                        }
                        const newPreference = new Preference(preference)
                        newPreference.save()
                        return newPreference
                    }).catch(err => console.log(err))
            }).catch(err => console.log(err))
        })
    })
}



router.post('/newEmployers', (req, res) => {
    const allFirstNames = [];
    const allLastNames = [];
    const allEmails = [];
    const allZipCodes = [];

    for (let index = 0; index < 100; index++) {
        const firstName = randomFirstName();
        const lastName = randomLastName();
        const email = randomEmail();
        const zipcode = randomZipCode();
        allFirstNames.push(firstName);
        allLastNames.push(lastName);
        allEmails.push(email);
        allZipCodes.push(zipcode);
    }
    const employers = [];
    for (let index = 0; index < 100; index++) {
        employers.push({
            'email': `${allEmails[index]}`,
            'password': 'hunter2',
            'fName': `${allFirstNames[index]}`,
            'lName': `${allLastNames[index]}`,
            'zipCode': `${allZipCodes}`,
            'role': "employer",
            "resume": []
        })
    }

        const send = employers.map((employer,i) => {
            signupEmployers(employer,i)
        })




    res.json({
        "send": send
    })


})

const signupEmployers = (emmployer,num) => {

    const newUser = new User(emmployer);
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
            .then(user => {
                const jobField = jobFields[num % jobFields.length]
                const onepage = {
                    'userId': newUser.id,
                    'companyName': randomCompanyName(),
                    'description': `${randomEmployerJobDescriptor()}`,
                    'jobTitle': randomEmployerJobTitle(),
                    'jobField': `${jobField}`,
                    'jobSkills': `${jobSkills[jobField]}`,
                    'type': `${types[num % 3]}`,
                    'benefits': randomParagraph(),
                    'startingPay': randomEmployerJobPay(),
                    'image': randomCompanyLogo(),
                    'catchPhrase': randomCompanyCatchPhrase()
                }
                const newonepage = new OnePage(onepage)
                newonepage.save()
                console.log(newonepage.description)
                return newonepage
            })
            .catch(err => console.log(err))
        })
    })
}




//Used to signup the demo user the will be used on the modle
router.post('/newDemoUser', (req, res) => {

    const demoUser = {
        'email': `demo@demo.demo`,
        'password': '123456',
        'fName': 'guest',
        'lName': 'demo',
        'zipCode': 61920,
        'role': 'Job-Seeker'
    }

    const send = signupDemoUser(demoUser, 1)

    res.json({
        "send": send
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
                const jobField = jobFields[num % jobFields.length]
                const resume = {
                    'userId': newUser.id,
                    'jobHistory': `${randomParagraph()}`,
                    'jobField': `${jobField}`,
                    'jobSkills': `${jobSkills[jobField]}`
                }
                const newResume = new Resume(resume)
                newResume.save()
                .then((resume) => {
                    const proximity =  Math.floor(Math.random() * 101);
                    const preference = {
                        'userId': newUser.id,
                        'jobField': `${jobField}`,
                        'proximity': proximity,
                        'type': `${types[num % 3]}`,
                        'salaryRangeHigh': 1000000,
                        'salaryRangeLow': 0
                    }
                        const newPreference = new Preference(preference)
                        newPreference.save()
                        console.log(newUser)
                        console.log(newResume)
                        console.log(newPreference)
                        return newPreference
                }).catch(err => console.log(err))
            }).catch(err => console.log(err))
        })
    })
}

module.exports = router;