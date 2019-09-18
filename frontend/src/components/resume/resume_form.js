import React from 'react'

class ResumeForm extends React.Component{
    constructor(props){
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
      let resume = {
        user_id: this.state.user_id,
        job_history: this.state.job_history,
        job_field: this.state.job_field,
        job_skills: this.state.job_skills
      }
      this.props.action(resume)
        .then((payload) => {
          debugger
          this.props.history.push(`/resumes/${payload.resume._id}`)}
          );
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Field:</label>
                    <textarea onChange={this.update('job_field')} value={this.state.job_field}/>
                    <label>Job History:</label>
                    <textarea onChange={this.update('job_history')} value={this.state.job_history}/>
                    <label>Skills:</label>
                    <textarea onChange={this.update('job_skills')} value={this.state.job_skills}/>
                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>    
        )
    }
}

export default ResumeForm;