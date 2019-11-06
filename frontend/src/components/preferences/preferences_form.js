import React from 'react';
import { withRouter } from 'react-router-dom';

class PreferencesForm extends React.Component{
    constructor(props){
        super(props);
        this.renderErrors = this.renderErrors.bind(this)
        console.log(this.props, "PROOOOOOPS");
        if (this.props.preference === "no preference") {
            this.state = {
                "userId": this.props.user.id,
                "jobField": "Select a field of work",
                "proximity": "Select proximity",
                "type": "Select employment type",
                "salaryRange": "Select a salary range",
                "salaryRangeHigh": "",
                "salaryRangeLow": "",
            }
        } else {
            this.state = this.props.preference;
        }
        console.log(this.state);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field){
        return (e) => {
            if(field === "salaryRange") {
                let salaryRanges = e.target.value.split("-")
                let lowRange = salaryRanges[0], highRange = salaryRanges[1]
                this.setState({ "salaryRangeHigh": highRange, "salaryRangeLow": lowRange })
            } 
            this.setState({[field]: e.target.value})
            
        }
    }

    componentDidMount(){
        if (!Object.keys(this.props.preference).length === 0) {
            return 
            debugger
        }
        this.props.fetchPreference(this.props.user.id)
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.props.preference === "no preference"){
            console.log("CREATE PREFERENCESSSSSS")
            this.props.createPreference(this.state).then(this.props.fetchRelevantOnePages()).then(
                this.props.history.push('home'))
        }else {
            console.log("UPDATE PREFERENCESSSSSS")
            this.props.updatePreference(this.state).then(this.props.fetchRelevantOnePages()).then(
                this.props.history.push('home')
            )}
    }
    
        renderErrors() {
        return ( <ul> {Object.keys(this.props.errors).map((error, i) => {
            return <li 
                    key={`error-${i}`}> 
                    {this.props.errors[error]} 
                   </li>})} 
                </ul>
            );
        } 

    render(){
        // if (this.state.userId === undefined) {
        //     this.state = this.props.preference
        // }
        console.log(this.props, "props for pref form");
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
                        <option value="SoftwareEngineering">Software Engineering</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Culinary">Culinary</option>
                        <option value="Business">Business</option>
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
                        {/* <option value="Remote">Remote</option> */}
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
                    {this.renderErrors()}
                    <input className="prefs-submit" type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }
}

export default withRouter(PreferencesForm);