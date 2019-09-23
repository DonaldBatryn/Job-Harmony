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
    debugger
    let { resume, currentUser } = this.props;
    return (
      <div className="resume-show-container">
        <div className="resume">
          <h2 className="candidate-show">Candidate {currentUser.id.slice(4, 10)}</h2>

          <h3 className="job-field-show">Field:&nbsp;&nbsp;{resume.jobField}</h3>
          <h3 className="job-history-show">Work History:&nbsp;&nbsp;{resume.jobHistory}</h3>
          <h3 className="job-skills-show">Skills:&nbsp;&nbsp;{resume.jobSkills}</h3>

          <Link className="edit-button" to={`/resumes/${resume._id}/edit`}><button className="edit-button-show">Edit Resume</button></Link>
        </div>
      </div>
    )
  }
}

export default withRouter(ResumeShow);