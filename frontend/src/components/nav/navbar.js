import React from 'react';
import { Link, withRouter } from 'react-router-dom'
// import { Route } from 'react-router';
import logo from '../../images/jobHarmonyLogo.png'
// import { Route } from 'react-router';
// import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.state = { dropdown: 'dropdown-hidden' }
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.openModalFor = this.openModalFor.bind(this);
  }
  toggleDropdown() {
    if (this.state.dropdown === 'dropdown-hidden') {
      this.setState({ dropdown: 'dropdown-visible' });
    } else {
      this.setState({ dropdown: 'dropdown-hidden' });
    }
  }
  openModalFor(form) {
    return e => {
      this.props.openModal(form)
    }
  }
  logoutUser(e) {
    e.preventDefault();
    this.props.logout()
    this.props.history.push("/")
    
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
          <Link className="nav-image" to="/home"><img className="nav-image" src={logo} alt=""/></Link>
          <Link to={`/users/${this.props.user.id}/profile`}>
            <button className="session-btn my-profile-btn">My Profile</button>
          </Link>
          <button className="session-btn my-matches-btn">My Matches</button>
          <div className="user-name-bar" 
            onClick={this.toggleDropdown}>
            <span>{this.props.user.fName}</span>
            <i className="down"></i>
          </div>
          <ul id='dropdown' className={this.state.dropdown}>
            <span onClick={this.toggleDropdown} className="dropdown-items">
              <li className="drop-list-item">
                <button className="logout-btn"><Link to={'/home'}>Browse Jobs</Link></button></li>
              <li className="drop-list-item">
                <button className="logout-btn"><Link to={'/profile'}>Profile</Link></button></li>
              <li className="drop-list-item">
                <button className="logout-btn"><Link to={'/preferences'}>Preferences</Link></button></li>
              <li className="drop-list-item">
                <button className="logout-btn">{createLink}</button></li>
              <li className="drop-list-item">
                <button className="logout-btn" onClick={this.logoutUser}>Logout</button></li>
            </span>
          </ul>

        </div>
      );
    } else {
      return (
        <div className="nav-bar-user">
          <Link className="nav-image" to="/home"><img className="nav-image" src={logo} alt=""/></Link>
          <button className="session-btn" onClick={this.openModalFor('signup')}>
            <Link className="my-profile-btn" to={'/signup'}>Signup</Link>
          </button>
          <button className="session-btn" onClick={this.openModalFor('login')}>
            <Link className="my-profile-btn" to={'/login'}>Login</Link>
          </button>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.getLinks()}
      </div>
    );
  }
}

export default withRouter(NavBar);