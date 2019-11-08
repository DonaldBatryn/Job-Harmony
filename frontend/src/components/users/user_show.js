import React from 'react'
import avatar from '../../images/avatar.png'
import { Link, withRouter } from 'react-router-dom'

class UserShow extends React.Component{
    constructor(props){
        super(props);
        this.handleView = this.handleView.bind(this);
    }

    handleView(id){
        this.props.history.push(`/onePages/${id}`)
    }

    render(){
        if (!this.props.likes){
            return <div className="user-show-container">Loading</div>
        }
        let { user, resume } = this.props;
        let resumeLink;
        if (!resume){
            resumeLink = <Link className="user-show-resume-link" to="/resumes/new">Create Your Resume</Link>
        } else {
            resumeLink = <Link className="user-show-resume-link" to={`/resumes/${resume._id}`}>Your Resume</Link>
        }
        debugger
        let allLikes = this.props.likes.map(onePage => {
            debugger
            let randomNum = (onePage.jobTitle.length % 3) + 1;
            return (
                <li key={onePage._id} className="user-show-li">
                    <div className={`icon ${onePage.jobField}-${randomNum}`}/>
                    <h4>{onePage.jobTitle}</h4>
                    <button className="user-show-li-btn" onClick={() => this.handleView(onePage._id)}>View Job</button>
                </li>
            )
        })

        let randomMatches = this.props.likes.map((onePage, i) => {
            let randomNum = (onePage.jobTitle.length % 3) + 1;
            if ((i % 2 === 0) && (i !== 0)){
                return (
                    <li key={onePage._id} className="user-show-li">
                        <div className={`icon ${onePage.jobField}-${randomNum}`} />
                        <h4>{onePage.jobTitle}</h4>
                        <button className="user-show-li-btn" onClick={() => this.handleView(onePage._id)}>View Match</button>
                    </li>
                )
            } else {
                return ""
            }
        })

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
                            {/* <li>
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
                            </li> */}
                            {allLikes}
                        </ul>
                    </div>
                    <div className="user-show-matches">
                        <div className="user-show-subheader">
                         <h2>Your Matches</h2>
                        </div>
                        <ul className="user-show-list">
                            {/* <li>
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
                            </li> */}
                            {randomMatches}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(UserShow);