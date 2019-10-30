import React from 'react';
import { withRouter } from 'react-router-dom';
import PendingIndexItem from './pending_index_item';

class PendingIndex extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        let allLikes = this.props.likedOnePages.map((onePage, i) => {
            return <PendingIndexItem key={i} onePage={onePage} receiveNewMain={this.props.receiveNewMain} />
        })
        return (
            <div className="pending-index-container">
                <div className="pending-header-text">
                    <h3>Your Pending Matches</h3>
                </div>
                <div className="pending-index-rows">
                    {allLikes}
                </div>
            </div>
        )
    }
}

export default withRouter(PendingIndex);