import React from 'react'
import avatar from '../../images/avatar.png'
import { Link } from 'react-router-dom'

class UserShow extends React.Component{


    render(){
        let { user, resume } = this.props;
        let resumeLink;
        if (!resume){
            resumeLink = <Link className="user-show-resume-link" to="/resumes/new">Create Your Resume</Link>
        } else {
            resumeLink = <Link className="user-show-resume-link" to={`/resumes/${resume._id}`}>Your Resume</Link>
        }
        return (
            <div className="user-show-container">
                <div className="user-show-top">
                    <div className="user-avatar">
                        <img className="user-avatar-img" src={avatar} alt=""/>
                        <h4>{user.fName}&nbsp;{user.lName}</h4>
                    </div>
                    <div className="user-show-links">
                        <h2>{resumeLink}</h2>

                    </div>
                </div>
                <div className="user-show-bottom">
                    <div className="user-show-liked-pages">
                        <div className="user-show-subheader">
                         <h2 >Jobs You've Liked</h2>
                        </div>
                        <ul className="user-show-list">
                            <li>
                                <h4>Liked onePage Show Link</h4>
                                <button className="user-show-li-btn">View Listing</button>
                            </li>
                            <li>
                                <h4>Liked onePage Show Link</h4>
                                <button className="user-show-li-btn">View Listing</button>
                            </li>
                            <li>
                                <h4>Liked onePage Show Link</h4>
                                <button className="user-show-li-btn">View Listing</button>
                            </li>
                            <li>
                                <h4>Liked onePage Show Link</h4>
                                <button className="user-show-li-btn">View Listing</button>
                            </li>
                        </ul>
                    </div>
                    <div className="user-show-matches">
                        <div className="user-show-subheader">
                         <h2>Your Matches</h2>
                        </div>
                        <ul className="user-show-list">
                            <li>
                                <h4>Matched onePage Show Link</h4>
                                <button className="user-show-li-btn">View Match</button>
                            </li>
                            <li>
                                <h4>Matched onePage Show Link</h4>
                                <button className="user-show-li-btn">View Match</button>
                            </li>
                            <li>
                                <h4>Matched onePage Show Link</h4>
                                <button className="user-show-li-btn">View Match</button>
                            </li>
                            <li>
                                <h4>Matched onePage Show Link</h4>
                                <button className="user-show-li-btn">View Match</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserShow;