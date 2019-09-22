const User = require('../../models/User');
const express = require('express');
const router = express.Router();
const OnePage = require("../../models/OnePage")
const Resume = require("../../models/Resume")


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
        'zip_code': 61920,
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
        'f_name': name,
        'l_name': 'employer',
        'zip_code': 61920,
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
                const newResume = new Resume(resume)
                console.log(newResume)

                return (newResume)
            })
            .catch(err => console.log(err))
    })
    })
}


module.exports = router;


