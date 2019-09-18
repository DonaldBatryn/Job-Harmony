const express = require('express');
const router = express.Router();
const User = require("../../models/User");
const Like = require("../../models/Like")
const OnePage = require("../../models/OnePage")
const passport = require("passport");
const Resume = require("../../models/Resume")


router.post("/:onePage_id/likes", 
    // so we have the id of the jobseeker that is liking the one page 
    passport.authenticate("jwt", {session: false}),
    (req, res) => {

        // id of the one page that is being liked 
        onePage_id = req.params.onePage_id
        
        // the jobseekers id 
        userId = req.user.id

        OnePage.findById(onePage_id).then((onepage) =>{
            
            Resume.findOne({ user_id: userId}).then((res) => {
                
                onepage.resumes.push(res).save().then((onepage) => {
                    // uses the one pages user-id (/models/OnePage.js line 4) to find the employer that it belongs to
                    User.findById(onePage.user_id).then((employer) => {
                        // pulls out the email from the employer to be used in the .then in the one page component (/frontend/src/components/onePage/onepage.js)
                        const employerEmail = employer.email

                        const payload = {
                            employerEmail
                        };




                        res.json({
                            success: true,
                            payload
                        });
                    })


                }
            )

        } )
});

});

router.get(":onePage_id/likes", (req, res) => {
   // id of the one page that is being used to send back an array of  
   // job seeker
   const onePage_id = req.params.onePage_id

        OnePage.find({
           id: onePage_id
            }).populate( "resumes" )
            .then((onepage => {
                res.json({
                    success: true,
                    onePage
            })
            // .catch(err =>
            //     res.status(404).json({
            //         noResumeFound: "No resume found from that User"
            //     })
            // );
            }));

});


module.exports = router;


// const express = require('express');
// const router = express.Router();
// const User = require("../../models/User");
// const Like = require("../../models/Like")
// const OnePage = require("../../models/OnePage")
// const passport = require("passport");
// const Resume = require("../../models/Resume")


// router.post("/:onePage_id/likes", 
//     // so we have the id of the jobseeker that is liking the one page 
//     passport.authenticate("jwt", {session: false}),
//     (req, res) => {

//         // id of the one page that is being liked 
//         onePage_id = req.params.onePage_id
        
//         // the jobseekers id 
//         userId = req.user.id

//         // creates the new like with the Like model (models/Like.js)
//         // const newLike = new Like( {employeeId:userId, OnepageId:onePage_id})

//         // dose a query to find the onepage that is being liked
        




//         // // uses the one pages user-id (/models/OnePage.js line 4) to find the employer that it belongs to
//         // const employer = User.findById(onePage.user_id)

//         // // pulls out the email from the employer to be used in the .then in the one page component (/frontend/src/components/onePage/onepage.js)
//         // const employerEmail = employer.email

//         // newLike
//         //     .save()
//             // save saves the  emplyee Id (/routes/api/likes.js line 18 ) and the Onepage Id (/routes/api/likes.js line 15)
//             // to the Likes table (/models/Like.js)

//             //| emplyeeId | OnepageId |
//             //|-----------|-----------|
//             //| 1         | 1         |

//             // .then(like => {
//             //     // sets the employer Email to the paylode to be used in the .then in the one page component (/frontend/src/components/onePage/onepage.js)
//             //     const payload = {
//             //         employerEmail
//             //     };




//             //     res.json({
//             //         success: true,
//             //         payload
//             //     });
//             // });
//         OnePage.findById(onePage_id).then((onepage) =>{
            
//             Resume.findOne({ user_id: userId}).then((res) => {

//                 onepage.resumes.push(res).save().then((onepage) => {
//                     // uses the one pages user-id (/models/OnePage.js line 4) to find the employer that it belongs to
//                     User.findById(onePage.user_id).then((employer) => {
//                         // pulls out the email from the employer to be used in the .then in the one page component (/frontend/src/components/onePage/onepage.js)
//                         const employerEmail = employer.email

//                         const payload = {
//                             employerEmail
//                         };




//                         res.json({
//                             success: true,
//                             payload
//                         });
//                     })


//                 }
//             })

//         } )
// });


// router.get(":onePage_id/likes", (req, res) => {
//    // id of the one page that is being used to send back an array of  
//    // job seeker
//    const onePage_id = req.params.onePage_id

// //    const onePageLikes = Like.find({
// //            OnepageId: onePage_id
// //        }) 

//         OnePage.find({
//            OnepageId: onePage_id
//             }).populate( "resumes" ).then((onepage => {
//             res.json({
//                 success: true,
//                 onePage
//             });

//        }));
//     //        OnepageId: onePage_id
//     //    }).map(function (u) {
//     //        const employee_id = u.employeeId
//     //        const res = Resume.find({user_id: employee_Id})
//     //    });


// //    const onePageLikes = OnePage.find({
// //            id: onePage_id
// //        }) 


//     // if (onePageLikes.length){
//     //         res.status(404).json({noLikesFound: "No likes found for that one page"})
//     // }

    
//     // db.users.find().forEach( function(myDoc) { print( "user: " + myDoc.name ); } );
//     // const userRes = onePageLikes.each |like|
//     //        // (/ models / Resume.js)
//     //        const employee_id = like.employeeId
//     //        const res = Resume.find({user_id: like.employeeId})
//     // end


// });




// module.exports = router;