import React from 'react';
import BrowseWindow from '../browse/browse_window'
import PendingBar from '../pending/pending_index'
import Buttons from '../buttons/buttons'

class MainPage extends React.Component {

  render() {
    return (
      
      <div className="home-page-container">
        <PendingBar />
        <div className="browse-buttons-container">
        <BrowseWindow />
        <Buttons />
        </div>
      </div>
    );
  }
}

export default MainPage;