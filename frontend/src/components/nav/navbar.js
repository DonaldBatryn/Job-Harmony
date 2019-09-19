import React from 'react';
import { Link } from 'react-router-dom'
import { Route } from 'react-router';
// import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    let resumeLink = this.props.resume ? (
      <Link to={`/resumes/${this.props.resume._id}`}>Your Resume</Link>
    ) : (
        <Link to={'/resumes/new'}>Create A Resume</Link>
      )
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={'/home'}>All Results/Feed</Link>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/preferences'}>Update your preferences</Link>
          {/* <Link to={'/resumes/new'}>Create A Resume</Link> */}
          {resumeLink}
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Job Harmony</h1>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;