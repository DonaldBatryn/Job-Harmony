import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class OnePageShow extends React.Component {
    constructor(props) {
        super(props);
        this.onePageId = this.props.match.params.onePageId;
        // this.showCoords = this.showCoords.bind(this);
    }

    componentDidMount() {
        let onePageId = this.props.match.params.onePageId;
        this.props.fetchOnePage(onePageId);
    }
    // showCoords(e){
    //     const mouseX = Math.floor(e.clientX);
    //     const mouseY = Math.floor(e.clientY);
    //     console.log("MouseX: " + mouseX + "MouseY: " + mouseY);
    // }
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
            <div onPointerMove={this.showCoords} className="onepage-show">
                {/* <h2>{currentUser.fName}{currentUser.lName}</h2> */}

                <h3>Job Field :&nbsp;{onePage.jobField}</h3>

                <h3>Job Skills:&nbsp;{onePage.jobSkills}</h3>

                <h3>Company Name:&nbsp;{onePage.companyName}</h3>

                <h3>Job Title :&nbsp;{onePage.jobTitle}</h3>

                <h3>Description:&nbsp;{roleValue}</h3>

                <h3>type:&nbsp;{onePage.type}</h3>

                <h3>Remote:&nbsp;${onePage.remote}</h3>

                <h3>Benefits:&nbsp;${onePage.benefits}</h3>

                <h3>Salary:&nbsp;${onePage.startingPay}</h3>
             
                <Link to={`/onePages/${this.onePageId}/edit`}>Edit this Page</Link>
                <label>Just Testing Buttons</label>
                <button>Dislike</button>
                <button>Like</button>
            </div>
        )
    }
}

export default withRouter(OnePageShow);