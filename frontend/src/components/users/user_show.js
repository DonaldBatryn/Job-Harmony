import React from 'react'
import avatar from '../../images/avatar.png'
import { Link } from 'react-router-dom'

class UserShow extends React.Component{


    render(){
        let { user, resume } = this.props;
        return (
            <div className="user-show-container">
                <div className="user-show-top">
                    <div className="user-avatar">
                        <img className="user-avatar-img" src={avatar} alt=""/>
                        <h4>{user.fName}&nbsp;{user.lName}</h4>
                    </div>
                    <div className="user-show-links">
                        <h2><Link to={`/resumes/${resume._id}`}>Your Resume</Link></h2>

                    </div>
                </div>
                <div className="user-show-bottom">

                </div>
            </div>
        )
    }
}

export default UserShow;