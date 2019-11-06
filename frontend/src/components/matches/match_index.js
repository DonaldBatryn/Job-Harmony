import React from 'react';
import { Link } from 'react-router-dom';

class MatchIndex extends React.Component {


    render(){
        return (
            <div className="matches-index-container">
                <h2>You dont have any matches yet.</h2>
                <h4>Connect with jobs you like and check back later.</h4>
                {/* <Link to="/home">Back to Home</Link> */}
                {/* ^^^ something breaks when doing a specific pattern of viewing one pages */}
            </div>
        )
    }
}

export default MatchIndex;