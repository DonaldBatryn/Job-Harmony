import React from 'react';
import { withRouter } from 'react-router-dom';

class PreferencesForm extends React.Component{
    constructor(props){
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.user = this.props.user
        this.state = this.props.preferences;
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.fetchpreference(this.user)
        this.createPreference()
        this.updatePreference()
    }

    update(field){
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        // if this.
        this.props.action(this.state).then(
            this.props.history.push('home')
        )
    }

    render(){
        return (
            <div className="preference-form-container">
                <div className="prefs-header-box">
                    <h3>Filter your results and see only whats relevant to you.</h3>
                    <h5>Update at any time for custom results!</h5>
                </div>
                <form className="prefs-form" onSubmit={this.handleSubmit}>
                    <label>Search for jobs in&nbsp;</label>
                    <select className="prefs-input" value={this.state.jobField} onChange={this.update('jobField')}>
                        <option value="Select a field of work" disabled>Select a field of work</option>
                        <option value="Finance">Finance</option>
                        <option value="Software Engineering">Software Engineering</option>
                        <option value="Healthcare/Medical">Healthcare</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Culinary Arts">Culinary</option>
                        <option value="Business/Accounting">Accounting</option>
                        <option value="Insurance">Insurance</option>
                    </select><br/>
                    <label>Proximity:&nbsp;all jobs&nbsp;</label>
                    <select className="prefs-input" value={this.state.proximity} onChange={this.update('proximity')}>
                        <option value="Select proximity" disabled>Select proximity</option>
                        <option value="5">less than 5 miles</option>
                        <option value="10">between 5 and 10 miles</option>
                        <option value="25">between 10 and 25 miles</option>
                        <option value="50">between 25 and 50 miles</option>
                        <option value="1000">over 50 miles</option>
                    </select><br/>
                    <label>Type of employment:&nbsp;</label>
                    <select className="prefs-input" value={this.state.type} onChange={this.update('type')}>
                        <option value="Select employment type" disabled>Select employment type</option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Remote">Remote</option>
                    </select><br/>
                    <label>with a yearly salary&nbsp;</label>
                    <select className="prefs-input" value={this.state.salaryRange} onChange={this.update('salaryRange')}>
                        <option value="Select a salary range" disabled>Select a salary range</option>
                        <option value="40000-60000">between $40,000 to $60,000</option>
                        <option value="60000-80000">between $60,000 to $80,000</option>
                        <option value="80000-100000">between $80,000 to $100,000</option>
                        <option value="100000-120000">between $100,000 to $120,000</option>
                        <option value="120000-140000">between $120,000 to $140,000</option>
                        <option value="140000-500000">over $140,000</option>
                    </select>
                    <input className="prefs-submit" type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }
}

export default withRouter(PreferencesForm);