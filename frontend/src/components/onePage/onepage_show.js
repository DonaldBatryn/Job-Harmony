import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class OnePageShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let onePageId = this.props.match.params.onePageId;
        this.props.fetchOnePage(onePageId);

    }

    render() {
        if (!this.props.onePage) {
            return <div>Loading...</div>
        }
        
        let { onePage, currentUser } = this.props;
        let roleValue;
        if (onePage.role === true){
            roleValue = 'Yes'
        } else {
            roleValue = 'No'
        }
        return (
            <div>
                {/* <h2>{currentUser.f_name}{currentUser.l_name}</h2> */}
                <h3>Job Title:&nbsp;{onePage.job_title}</h3>
                <h3>Company:&nbsp;{onePage.company_name}</h3>
                <h3>Description:&nbsp;{onePage.description}</h3>
                <h3>Position is:&nbsp;{onePage.type}</h3>
                <h3>Remote:&nbsp;{roleValue}</h3>
                <h3>Benefits:&nbsp;{onePage.benefits}</h3>
                <h3>Starting Salary:&nbsp;${onePage.starting_pay}</h3>
             
                <Link to={`/onePages/${onePage._id}/edit`}>Edit this Page</Link>
            </div>
        )
    }
}

export default withRouter(OnePageShow);