import React from 'react';
import { Link } from 'react-router-dom'
import { Route } from 'react-router';
// import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.state = { dropdown: 'dropdown-hidden' }
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  toggleDropdown() {
    if (this.state.dropdown === 'dropdown-hidden') {
      this.setState({ dropdown: 'dropdown-visible' });
    } else {
      this.setState({ dropdown: 'dropdown-hidden' });
    }
  }
  handleClick(e) {
    if (this.dropdownRef && (this.dropdownRef.contains(e.target) || this.iconRef.contains(e.target))) {
      return
    }
    this.setState({ dropdown: 'dropdown-hidden' })
  }
  handleKeyUp(e) {
    if (e.keyCode === 13) {
      if (this.state.dropdown === 'dropdown-hidden') {
        this.setState({ dropdown: 'dropdown-visible' });
      } else {
        this.setState({ dropdown: 'dropdown-hidden' });
      }
    }
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
          <Link to={`/users/${this.props.user.id}/profile`}>
            <button className="session-btn my-profile-btn">My Profile</button>
          </Link>
          <button className="session-btn my-matches-btn">My Matches</button>
          <i className="down" 
            onClick={this.toggleDropdown} 
            onKeyUp={this.handleKeyUp}></i>
          <ul id='dropdown' className={this.state.dropdown}>
            <span className="dropdown-items">
              <li className="drop-list-item">
                <Link to={'/home'}>All Results/Feed</Link></li>
              <li className="drop-list-item">
                <Link to={'/profile'}>Profile</Link></li>
              <li className="drop-list-item">
                <Link to={'/preferences'}>Update your preferences</Link></li>
              <li className="drop-list-item">
                {createLink}</li>
              <li className="drop-list-item">
                <button className="btn">Empty Button</button></li>
              <li className="drop-list-item">
                <button onClick={this.logoutUser}>Logout</button></li>
            </span>
          </ul>
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