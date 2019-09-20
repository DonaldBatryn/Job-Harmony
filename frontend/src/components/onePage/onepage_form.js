import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
class OnePageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.onePage;
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
        that.props.history.push(`/onePages/${payload.onePage._id}`)
      })
      .catch(err => console.log(err))

  }
  render() {
    return (
      <div className="onepage-form-container">
        <form className="onepage-form" onSubmit={this.handleSubmit}>
          <div>
            <h2>Create Your Job Listing</h2>
            <h4>Tell potential candidates about your open position</h4>
          </div>
          <div className="company-name-div">
            <label>Company Name:</label>
            <textarea onChange={this.update('company_name')} value={this.state.company_name} />
          </div>
          <div className="job-title-div">
            <label>Job Title:</label>
            <textarea onChange={this.update('job_title')} value={this.state.job_title} />
          </div>
          <div className="job-description-div">
            <label>Description:</label>
            <textarea onChange={this.update('description')} value={this.state.description} />
          </div>
          <div className="job-type-div">
            <label>Type:</label>
            <select value={this.state.type} onChange={this.update('type')} >
              <option value="Select type of work" disabled>Select type of work</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>
          <div className="job-remote-div">
            <label>Remote?:</label>
            <select value={this.state.remote} onChange={this.update('remote')} >
              <option value="Is this job remote?" disabled>Is this job remote?</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
          </div>
          <div className="job-benefits-div">
            <label>Benefits:</label>
            <textarea onChange={this.update('benefits')} value={this.state.benefits} />
          </div>
          <div className="starting-pay-div">
            <label>Starting Pay:</label>
            <textarea onChange={this.update('starting_pay')} value={this.state.starting_pay} />
          </div>
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    )
  }
}
export default withRouter(OnePageForm);