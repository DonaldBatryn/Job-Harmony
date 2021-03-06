import React from 'react'
import { withRouter } from 'react-router-dom'

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
    let userName = this.props.formType === 'Create Resume' ? `,  ${user.fName}` : ""
    return (
      <div className="resume-form-container">

        <form className="resume-form" onSubmit={this.handleSubmit}>
          <div className="resume-form-text">
            <h2 >Get Yourself Out There{userName}</h2>
            <h4>Employers only see what really matters. Your experience.</h4>
          </div>

          <div className="job-field-div">
            <label className="job-field-txt">Industry</label>
            <input className="job-field-input" onChange={this.update('jobField')} value={this.state.jobField} />
          </div>

          <div className="job-history-div">
            <label className="job-history-txt">Job History</label>
            <textarea className="job-history-input" onChange={this.update('jobHistory')} value={this.state.jobHistory} />
          </div>

          <div className="job-skills-div">
            <label className="job-skills-txt">Skills</label>
            <textarea className="job-skills-input" onChange={this.update('jobSkills')} value={this.state.jobSkills} />
          </div>
          <input className="resume-submit-button" type="submit" value={this.props.formType} />
        </form>
        
      </div>
    )
  }
}
export default withRouter(ResumeForm);