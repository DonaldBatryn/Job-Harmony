import React from 'react';
import { withRouter } from 'react-router-dom'

class Buttons extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // this.props.fetchUsers();
        // let userId = this.props.match.params.userId
        // debugger
        // this.props.fetchUser(userId);
    }


    render(){
        if (!this.props.user){
            return <div className="buttons-container">Loading...</div>
        }

        let button1;
        let button2;
        if (this.props.user.role === 'Employer'){
            button1 = <button>Decline</button>
            button2 = <button>Contact</button>
        } else {
            button1 = <button>Not Interested</button>
            button2 = <button>Interested</button>
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