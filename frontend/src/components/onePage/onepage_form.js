import React from 'react'
import { withRouter } from 'react-router-dom'
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
            <label className="company-name-text">Company Name:</label>
            <textarea className="company-name-input" onChange={this.update('companyName')} value={this.state.company_name} />
          </div>
          <div className="job-title-div">
            <label className="job-title-text">Job Title:</label>
            <textarea className="job-title-input" onChange={this.update('jobTitle')} value={this.state.jobTitle} />
          </div>
          <div className="job-description-div">
            <label className="job-description-text">Description:</label>
            <textarea className="job-description-input" onChange={this.update('description')} value={this.state.description} />
          </div>
          <div className="job-type-div">
            <label className="job-type-text">Type:</label>
            <select className="job-type-input" value={this.state.type} onChange={this.update('type')} >
              <option value="Select type of work" disabled>Select type of work</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>
          <div className="job-remote-div">
            <label className="job-remote-text">Remote?:</label>
            <select className="job-remote-input" value={this.state.remote} onChange={this.update('remote')} >
              <option value="Is this job remote?" disabled>Is this job remote?</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
          </div>
          <div className="job-benefits-div">
            <label className="job-benefits-text">Benefits:</label>
            <textarea className="job-benefits-input" onChange={this.update('benefits')} value={this.state.benefits} />
          </div>
          <div className="starting-pay-div">
            <label className="starting-pay-text">Starting Pay:</label>
            <textarea className="starting-pay-input" onChange={this.update('starting_pay')} value={this.state.starting_pay} />
          </div>
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    )
  }
}
export default withRouter(OnePageForm);