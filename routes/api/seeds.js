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
                'user_id': employee.id,
                'company_name': `company_name${i}`,
                'description': `description${i}`,
                'jobTitle': `jobTitle${i}`,
                'jobField': `jobField${i}`,
                'type': 'type',
                'benefits': `benefits${i}`,
                'starting_pay': i
            }))
            Resume.insertMany(resumes).then(allOnepages => {
                res.json(allOnepages)
            }).catch()

          }).catch()


    })
//     const onepages = user_id.map((user_id, i) => ({
//         'user_id': user_id,
//         'company_name': `company_name${i}` ,
//         'description': `description${i}` ,
//         'jobTitle': ,
//         'jobField':,
//         'type': 'type',
//         'benefits': `benefits${i}`,
//         'starting_pay': i 
//         }
//     ))
    
//         new OnePage({

//         });
//         newOnePage.save()
//             .then(OnePage => res.json(OnePage))
//             .catch(err => res.json(err));

// });


module.exports = router;


//   user_id: {
//           type: String,
//           required: true
//       },
//       company_name: {
//           type: String,
//           required: true
//       },
//       jobTitle: {
//           type: String,
//           required: true
//       },
//       description: {
//           type: String,
//           required: true
//       },
//       // job type parttime 
//       type: {
//           type: String,
//           required: true
//       },
//       remote: {
//           type: Boolean,
//           default: "false"
//       },
//       benefits: {
//           type: String,
//           required: true
//       },
//       starting_pay: {
//           type: Number,
//           required: true
//       },
//       jobField: {
//           type: String,
//           required: true
//       },