import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class ResumeShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let resumeId = this.props.match.params.resumeId;
        this.props.fetchResume(resumeId);
   
    }


    render(){
        if (!this.props.resume){
            return <div>Loading...</div>
        }

        let { resume, currentUser } = this.props;
        return (
        <div>
            <h2>{currentUser.f_name}{currentUser.l_name}</h2>
            <h3>{resume.job_field}</h3>
            <h3>{resume.job_history}</h3>
            <h3>{resume.job_skills}</h3>
            <Link to={`/resumes/${resume._id}/edit`}>Edit Resume</Link>
        </div>
        )
    }
}

export default withRouter(ResumeShow);