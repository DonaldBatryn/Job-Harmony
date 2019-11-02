import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import ModalContainer from './modal/modal_container';
import MatchesContainer from './matches/match_index_container';
import MainPage from './main/main_page';
import UserShowContainer from './users/user_show_container';
import CreateResumeFormContainer from './resume/create_resume_form_container'
import EditResumeFormContainer from './resume/edit_resume_form_container';
import ResumeShowContainer from './resume/resume_show_container';
import CreateOnePageFormContainer from './onePage/create_onepage_form_container';
import EditOnePageFormContainer from './onePage/edit_onepage_form_container';
import OnePageShowContainer from './onePage/onepage_show_container';
import SplashContainer from './splash/splash_container'
import PreferencesFormContainer from './preferences/preferences_form_container';

const App = () => (
  <div>
    <NavBarContainer />
    <ModalContainer />
    <AuthRoute path="/" component={SplashContainer} />
    
    <Switch>
      <ProtectedRoute exact path="/matches" component={MatchesContainer}/>
      <ProtectedRoute exact path="/preferences" component={PreferencesFormContainer}/>
      <ProtectedRoute path="/users/:userId/profile" component={UserShowContainer}/>
      <ProtectedRoute exact path="/home" component={MainPage}/>
      <ProtectedRoute exact path="/resumes/new" component={CreateResumeFormContainer}/>
      <ProtectedRoute exact path="/resumes/:resumeId" component={ResumeShowContainer}/>
      <ProtectedRoute exact path="/resumes/:resumeId/edit" component={EditResumeFormContainer}/>
    </Switch>
    <Switch>
      <ProtectedRoute exact path="/onePages/new" component={CreateOnePageFormContainer} />
      <ProtectedRoute exact path="/onePages/:onePageId" component={OnePageShowContainer} />
      <ProtectedRoute exact path="/onePages/:onePageId/edit" component={EditOnePageFormContainer} />
    </Switch>
  </div>
);

export default App;
