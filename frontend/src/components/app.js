import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container.js';
import CreateResumeFormContainer from './resume/create_resume_form_container'
import ResumeShowContainer from './resume/resume_show_container';
import EditResumeFormContainer from './resume/edit_resume_form_container'



const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    <Switch>
      <ProtectedRoute exact path="/resumes/new" component={CreateResumeFormContainer}/>
      <ProtectedRoute exact path="/resumes/:resumeId" component={ResumeShowContainer}/>
      <ProtectedRoute exact path="/resumes/:resumeId/edit" component={EditResumeFormContainer}/>
    </Switch>
  </div>
);

export default App;


//  /navbar
//  - Link to Matches
//  - Browse
//  - Link to Preferences
//  - Logout button


// /preferences
//   - preferences form container
//   - preferences form

// /matches  
//   - matches container
//   - matches_index
//   - match show

//  /browse
//    - browse window container
//    - browse window

//  /pending matches (sidebar)
      // -pending matches index

// /buttons container
      // -buttons.js
      // if in Browser, two buttons 'Interested' + 'Not Interested'
      // if in matchView, two buttons 'Contact' + 'Decline'