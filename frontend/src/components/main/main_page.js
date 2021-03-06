import React from 'react';
import BrowseWindowContainer from '../browse/browse_window_container'
import PendingIndexContainer from '../pending/pending_index_container'


class MainPage extends React.Component {

  render() {
    return (
      <div className="home-page-container">
        <PendingIndexContainer />
        <div className="browse-buttons-container">
        <BrowseWindowContainer />
        </div>
      </div>
    );
  }
}

export default MainPage;