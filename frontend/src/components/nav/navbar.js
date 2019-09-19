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
    let createLink;

    let onePageLink = this.props.onePage ? (
      <Link to={`/onePages/${this.props.onePage._id}`}>Your One-Page</Link>
    ) : (
      <Link to={`/onePages/new`}>Create a One-Page</Link>
    )
    
    let resumeLink = this.props.resume ? (
      <Link to={`/resumes/${this.props.resume._id}`}>Your Resume</Link>
      ) : (
        <Link to={'/resumes/new'}>Create A Resume</Link>
        )

    if (this.props.user && this.props.user.role === "Employer"){
      createLink = onePageLink;
    } else {
      createLink = resumeLink;
    }
    if (this.props.loggedIn) {
      return (
        <div className="nav-bar-user">
          <button className="button-1">My Profile</button>
          <button className="button-2">My Matches</button>
          <Link to={'/home'}>All Results/Feed</Link>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/preferences'}>Update your preferences</Link>
          <i className="down"></i>
          {/* <Link to={'/resumes/new'}>Create A Resume</Link> */}
          {createLink}
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="nav-bar">
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