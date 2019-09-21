const User = require('../../models/User');
const express = require('express');
const router = express.Router();
const OnePage = require("../../models/OnePage")
const Resume = require("../../models/Resume")


router.post('/newEmployers', (req, res) => {

    const names = ["John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul",
                "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul", 
                "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul", 
                "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul", 
                "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul"];


    const emmployers  = names.map((name, i) => ({
        'email': `employer${i}@employer${i}.com`,
        'password': 'hunter2' ,
        'f_name': name ,
        'l_name': 'employer',
        'zip_code': 61920 ,
        'role': "employer"
        }
    ))


    
          User.insertMany(emmployers).then(new_employers => {
            const onepages = new_employers.map((employer, i) => ({
                'user_id': employer.id,
                'company_name': `company_name${i}`,
                'description': `description${i}`,
                'jobTitle': `jobTitle${i}`,
                'jobField': `jobField${i}`,
                'jobSkills': `jobSkills${i}`,
                'type': 'type',
                'benefits': `benefits${i}`,
                'starting_pay': i
            }))
            OnePage.insertMany(onepages).then(allOnepages => {
                res.json(allOnepages)
            }).catch()

          }).catch()


    })

router.post('/newEmployees', (req, res) => {

    const names = ["John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul",
                "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul", 
                "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul", 
                "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul", 
                "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul"];



    const emmployes = names.map((name, i) => ({
        'email': `employee${i}@employee${i}.com`,
        'password': 'hunter2' ,
        'f_name': name ,
        'l_name': "employee",
        'zip_code': 61920 ,
        'role': "employee",
        "resume":[]
        }
    ))
    
          User.insertMany(emmployes).then(newEmmployes => {
            const resumes = newEmmployes.map((employee, i) => ({
                'userId': employee.id,
                'job_history': `job_history${i}`,
                'jobField': `jobField${i}`,
                'jobSkills': `jobSkills${i}`,
                'jobTitle': `jobTitle${i}`
                
            }))
            Resume.insertMany(resumes).then(allResumes => {
                res.json(allResumes)
            }).catch()

          }).catch()


})


module.exports = router;


