import { Link, withRouter } from 'react-router-dom';
import React from 'react';


class ResumeShow extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    let resumeId = this.props.match.params.resumeId;
    this.props.fetchResume(resumeId);

  }


  render() {
    if (!this.props.resume) {
      return <div>Loading...</div>
    }
 
    let { resume, currentUser } = this.props;
    return (
      <div className="resume-show-container">
        <div className="resume">
          <div className="candidate-show-container">
            <h2 className="candidate-show">Candidate {currentUser.id.slice(4, 10)}</h2>
            <h5>(Your name isn't visible to employers, only your qualifications.)</h5>
          </div>
          <div className="job-field-show">
            <h4>Field:&nbsp;&nbsp;</h4>
            <h3 className="resume-info">{resume.jobField}</h3>
          </div>
          <div className="job-history-show">
            <h4>Work History:&nbsp;&nbsp;</h4>
            <h3 className="resume-info">{resume.jobHistory}</h3>
          </div>
          <div className="job-skills-show">
            <h4>Skills:&nbsp;&nbsp;</h4>
            <h3 className="resume-info">{resume.jobSkills}</h3>
          </div>

          <Link className="edit-button" to={`/resumes/${resume._id}/edit`}><button className="edit-button-show">Edit Resume</button></Link>
        </div>
      </div>
    )
  }
}

export default withRouter(ResumeShow);