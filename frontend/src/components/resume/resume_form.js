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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Field:</label>
          <textarea onChange={this.update('job_field')} value={this.state.job_field} />
          <label>Job History:</label>
          <textarea onChange={this.update('job_history')} value={this.state.job_history} />
          <label>Skills:</label>
          <textarea onChange={this.update('job_skills')} value={this.state.job_skills} />
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    )
  }
}
export default withRouter(ResumeForm);