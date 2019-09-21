import React from 'react';

class PendingIndex extends React.Component{

    render(){
        return (
            <div className="pending-index-container">
                <div className="pending-header-text">
                    <h3>Your Pending Matches</h3>
                </div>
                <div className="pending-index-rows"></div>
            </div>
        )
    }
}

export default PendingIndex;