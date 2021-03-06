import React from 'react';
import { withRouter } from 'react-router-dom'


class Buttons extends React.Component{
    constructor(props){
        super(props);
       
    }

    render(){
        if (!this.props.user){
            return <div className="buttons-container">Loading...</div>
        }

        let button1;
        let button2;
        if (this.props.user.role === 'Employer'){
            button1 = <button onClick={this.handleNext}>Decline</button>
            button2 = <button onClick={this.handleNext}>Contact</button>
        } else {
            button1 = <button onClick={this.handleNext}>Not Interested</button>
            button2 = <button onClick={this.handleNext}>Interested</button>
        }

        return (
            <div className="buttons-container">
                <div className="button-1">
                    {button1}
                </div>
                <div className="button-2">
                    {button2}
                </div>
            </div>
        )
    }
}

export default withRouter(Buttons);