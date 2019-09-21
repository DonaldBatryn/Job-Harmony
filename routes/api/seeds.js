const User = require('../../models/User');
const express = require('express');
const router = express.Router();
const OnePage = require("../../models/OnePage")
const Resume = require("../../models/Resume")
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const db = require('../../config/keys').mongoURI;

router.post('/dropall', (req, res) => {
    db.onePages.drop()
    res.json({"fdgdefr":"dhgtgf"})
})
router.post('/newEmployers', (req, res) => {

    const names = ["John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul",
                "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul", 
                "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul", 
                "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul", 
                "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul"];


    const emmployers  = names.map((name, i) => ({
        'email': `employer${i}@employer${i}.com`,
        'password': '$2a$10$rblxBXsOBY7/5i8DSVX9n.Qd14WyLHWy3BlVijm.v68OrfGp.6WCe',
        'f_name': name ,
        'l_name': 'employer',
        'zip_code': 61920 ,
        'role': "employer"
        }
    ))


    
          User.insertMany(emmployers).then(new_employers => {
            const onepages = new_employers.map((employer, i) => ({
                'userId': employer.id,
                'companyName': `companyName${i}`,
                'description': `description${i}`,
                'jobTitle': `jobTitle${i}`,
                'jobField': `jobField${i}`,
                'jobSkills': `jobSkills${i}`,
                'type': 'type',
                'benefits': `benefits${i}`,
                'startingPay': i
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
        'password': '$2a$10$rblxBXsOBY7/5i8DSVX9n.Qd14WyLHWy3BlVijm.v68OrfGp.6WCe',
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
                'jobHistory': `jobHistory${i}`,
                'jobField': `jobField${i}`,
                'jobSkills': `jobSkills${i}`,
                'jobTitle': `jobTitle${i}`
                
            }))
            Resume.insertMany(resumes).then(allResumes => {
                res.json(allResumes)
            }).catch()

          }).catch()

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
        'f_name': name ,
        'l_name': "employee",
        'zip_code': 61920 ,
        'role': "employee",
        "resume":[]
        }
    ))
    
        const send = emmployes.map((emmploye, i)=> {
            seed(emmploye, i * 15625)

        })
        res.json({"send": send})


})
const seed = (emmploye , num) => {


    // const emmploye ={
    //     'email': `employee${1000000}@employee${1000000}.com`,
    //     'password': 'hunter2' ,
    //     'f_name': "John",
    //     'l_name': "employee",
    //     'zip_code': 61920 ,
    //     'role': "employee",
    //     "resume":[]
    //     }

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
                        'jobSkills': `jobSkills${num}`,
                        'jobTitle': `jobTitle${num}`

                    }
                    const newResume = new Resume(resume)
                    console.log(newResume)
                    // console.log(newUser)
                    const iddd = newResume.id
                    return iddd
                })
                .catch(err => console.log(err))
        })
    })

    

}

module.exports = router;