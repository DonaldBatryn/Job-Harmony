
# `Background/Overview`

"An application resembling Tinder or Bumble that aims to connect people with potential employers based purely on qualifications.
No picture, no name (initially), just a resume and a proximity to the job in question. Both parties can 'swipe' left or right on each other,
marking their interest and opening up a dialogue in an instant"

# `Functionality and MVP`
- Login and Signup functionality for both Employers and Job-Seekers
    + can sign-up with linkdin or google
    + enter resume/ position one-page

## Search Functionality
- Job Seekers set up Preferences
    + desired pay
    + location
    + Field of work

- Employees make their one-page
    + what the job pays
    + location
    + hours
    + benefits
    + requirements (work experience and education)

- Once preferences set, Users are shown a feed of matched employers/employees which they can mark 'Interested' or 'Not Interested' 
+ pending section
 

## Alerts/Notification Center for matches 
+ once matched, job-seeker gets information regarding a phone interview if desired

## User/Employer Ratings and review
  + previous emplopyees can review jobs, which become public to others considering
  + Employers can give employees 'compliment' icons

# `Technologies and Technical Challenges`
 + Glassdoor API for ratings
 + Google Maps/GPS API for location service/ Signup/Login
 + Apple Pay/Paypal API for employers' fees (Bonus)


# `Group Members`
    + Chas

    + Luke

    + Donnie

    + Daniel 



# `Schema`
    + User
        - email: String
        - password: String
        - fName: String
        - lName: String
        - zipCode: Int
        - role: String

    + matches
        - employerId: Int
        - resumeId: Int 
        

    + jobSeekerLikes 
        - emplyeeId: int
        - OnepageId: Int 

    | emplyeeId | OnepageId |
    |-----------|-----------|
    | 1         | 1         |
    | 1         | 5         |
    | 6         | 1         |



    + Resume 
        -employeeId: Int
        -jobHistory: textarea
        -jobField: string
        -jobSkills: textarea
        

    +OnePage
        -employeeId: Int
        -companyName: String
        -description: Text
        -type: inclusion in: [full-time, part-time, freelance]
        -remote?: Boolean
        -benefits: Text
        -startingPay: Int

    + Matches
        -employeeId: Int
        -employerId: Int
        -date: Date


# `State Shape`
    + entities
        -users
        -employers
        -matches
        -resumes
        -onePages
        
    + session
        -currentUser

    + ui
        -loading
        -ad
        -modal
        -currentlyViewing
        
    + errors
        -session
    
# `Frontend Routes`
TBD


# `Backend Routes`

`Employee`: 

    - POST "/signup"
  
    - POST "/login"
 
    - POST "/resumes" - add your resume for consideration

    - DELETE "/login" (delete session)

`Employer`: 

    - POST "/signup"
  
    - POST "/login"
  
    - POST "/pages" - add your resume for consideration
  
    - DELETE "/login" (delete session)

`Resume`:

    - GET "/" - get all
  
    - GET "/query?" -get all results within your preferences
 
`OnePage`:

    - GET "/" - get all
   
    - GET "/query?" -get all results within your preferences
    
`Match`:

    - POST "/match"

    - DELETE "/match/:id"

