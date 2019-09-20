import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
class ResumeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.resume;
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let that = this;
    this.props.action(this.state)
      .then((payload) => {

        that.props.history.push(`/resumes/${payload.resume._id}`)
      })
      .catch(err => console.log(err))

  }
  render() {
    let { user } = this.props
    let userName = this.props.formType === 'Create Resume' ? `,  ${user.f_name}` : ""
    return (
      <div className="resume-form-container">
        <form className="resume-form" onSubmit={this.handleSubmit}>
          <div className="resume-form-text">
            <h2 >Get Yourself Out There{userName}</h2>
            <h4>Employers only see what really matters. Your experience.</h4>
          </div>
          <div className="job-field-div">
            <label className="job-field-txt">Field</label>
            <textarea className="job-field-input" onChange={this.update('job_field')} value={this.state.job_field} />
          </div>
          <div className="job-history-div">
            <label className="job-history-txt">Job History</label>
            <textarea className="job-history-input" onChange={this.update('job_history')} value={this.state.job_history} />
          </div>
          <div className="job-skills-div">
            <label className="job-skills-txt">Skills</label>
            <textarea className="job-skills-input" onChange={this.update('job_skills')} value={this.state.job_skills} />
          </div>
          <input className="resume-submit-button" type="submit" value={this.props.formType} />
        </form>
      </div>
    )
  }
}
export default withRouter(ResumeForm);