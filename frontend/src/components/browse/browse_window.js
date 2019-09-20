import React from 'react';
import BrowseShow from './browse_show';


class BrowseWindow extends React.Component{

    render(){
        return (
            <div className="browse-window-container">
                <div className="browse-header-text">
                    <h3>Recommended For You</h3>
                </div>
                <div className="browse-window">
                    <BrowseShow />
                </div>
            </div>
        )
    }
}

export default BrowseWindow;