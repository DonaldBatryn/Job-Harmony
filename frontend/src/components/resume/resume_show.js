import React from 'react';
<<<<<<< HEAD
import {Link} from 'react-router-dom';
class ResumeShow extends React.Component {
  constructor(props) {
    super(props);}
  componentDidMount(){
    let resumeId = this.props.match.params.resumeId;
    this.props.fetchResume(resumeId);
  }
  render() {
    if (!this.props.resume) {
      return <div> Loading... </div>
    }
    let {
      resume,
      currentUser
    } = this.props;
    return ( <div>
      <h2> {currentUser.f_name} {currentUser.l_name}</h2> 
      <h3> {resume.job_field} </h3> 
      <h3> {resume.job_history} </h3> 
      <h3> {resume.job_skills} </h3> 
      <Link to = {`/resumes/${resume._id}/edit`}> Edit Resume </Link> 
      </div>
    )
  }
}

export default ResumeShow;
=======
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
        <div className="resume-show-container">
            <div className="resume">
            <h2 className="candidate-show">Candidate {currentUser.id.slice(4,10)}</h2>
                    <h3 className="job-field-show">Field:&nbsp;&nbsp;{resume.job_field}</h3>
                    <h3 className="job-history-show">Work History:&nbsp;&nbsp;{resume.job_history}</h3>
                    <h3 className="job-skills-show">Skills:&nbsp;&nbsp;{resume.job_skills}</h3>
            <Link classname="edit-button" to={`/resumes/${resume._id}/edit`}><button className="edit-button-show">Edit Resume</button></Link>
            </div>
        </div>
        )
    }
}

export default withRouter(ResumeShow);
>>>>>>> 1cd8bbe25c02b60f1bab623db050b02b2fedd7dd
