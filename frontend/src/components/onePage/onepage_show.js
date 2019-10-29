import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class OnePageShow extends React.Component {
    constructor(props) {
        super(props);
        this.onePageId = this.props.match.params.onePageId;
        // this.showCoords = this.showCoords.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleBack(){
      debugger;
        this.props.history.push(`/users/${this.props.currentUser.id}/profile`)
    }

    componentDidMount() {
        let onePageId = this.props.match.params.onePageId;
        this.props.fetchOnePage(onePageId);
    }
    
    render() {
        if (!this.props.onePage) {
            return <div>Loading...</div>
        }
        
        let { onePage } = this.props;
        let remoteValue;
        if (onePage.remote === true){
            remoteValue = 'Yes'
        } else {
            remoteValue = 'No'
        }

        let skillsList = onePage.jobSkills.split(",");
        let skillLis = skillsList.map((skill, i) => <li key={i}>{skill}</li>)
        let randomNum = (onePage.jobTitle.length % 3) + 1;
        return (
            <div onPointerMove={this.showCoords} className="onepage-show-container">
                <div className="onepage-show">
                    <div className="onepage-show-top">
                        <div className={`icon ${onePage.jobField}-${randomNum} `} id="op-show-img" />
                        <div className="onepage-show-ur">
                            <h2>{onePage.jobTitle}</h2>
                            <h4>at&nbsp;{onePage.companyName}</h4>
                            <h4>Field:&nbsp;{onePage.jobField}</h4>
                        </div>
                    </div>
                    <div className="onepage-show-bottom">
                        <div className="onepage-show-ll">
                            <h3>Position is:&nbsp;{onePage.type.toUpperCase()}</h3>
                            <h3>Remote:&nbsp;{remoteValue}</h3>
                            <h3>Salary:&nbsp;${onePage.startingPay}</h3>
                            <button className="follow-up-button">Follow up with {onePage.companyName}</button>
                            <button className="follow-up-button" onClick={() => this.handleBack}>Back to Profile</button>
                        </div>
                        <div className="onepage-show-lr">
                            <div className="op-group-1">
                                <h3>About this job:&nbsp;</h3>
                                <h3>{onePage.description}</h3>
                            </div>
                            <div className="op-group-2">
                                <h4>Skills Required:&nbsp;</h4>
                                <ul>{skillLis}</ul>
                            </div>
                            <div className="op-group-3">
                                <h4>Benefits include:&nbsp;</h4>
                                <h3>{onePage.benefits}</h3>
                            </div>
                        </div>
                        {/* <Link to={`/onePages/${this.onePageId}/edit`}>Edit this Page</Link> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(OnePageShow);