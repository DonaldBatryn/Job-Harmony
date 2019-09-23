const User = require('../../models/User');
const express = require('express');
const router = express.Router();
const OnePage = require("../../models/OnePage")
const Resume = require("../../models/Resume")
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');
const db = require('../../config/keys').mongoURI;


router.post('/newEmployees', (req, res) => {

    const names = ["John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul",
        "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul",
        "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul",
        "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul",
        "John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul"
    ];

    const emmployes = names.map((name, i) => ({
        'email': `employee${i *156205 }@employee${i * 156205 }.com`,
        'password': '$2a$10$rblxBXsOBY7/5i8DSVX9n.Qd14WyLHWy3BlVijm.v68OrfGp.6WCe',
        'fName': name,
        'lName': "employee",
        'zipCode': 61920,
        'role': "employee",
        "resume": []
    }))

    const send = emmployes.map((emmploye, i) => {
        signupEmployees(emmploye, i * 156205)

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
            }).catch(err => console.log(err))
        })
    })
}



router.post('/newEmployers', (req, res) => {

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

    const send = emmployers.map((emmploye, i) => {
        signupEmployers(emmploye, i * 156205)

    })

    res.json({
        "send": send
    })


})

const signupEmployers = (emmployer, num) => {

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
                    'jobField': `jobField${num}`,
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
                    'jobSkills': `jobSkills${num}`,
                    'jobTitle': `jobTitle${num}`

                }
                const newResume = new Resume(resume)
                return (newResume)
            })
            .catch(err => console.log(err))
        })
    })
}




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