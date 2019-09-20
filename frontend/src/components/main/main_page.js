import React from 'react';
import BrowseWindow from '../browse/browse_window'
import PendingBar from '../pending/pending_index'
import ButtonsContainer from '../buttons/buttons_container'


class MainPage extends React.Component {

  render() {
    return (
      
      <div className="home-page-container">
        <PendingBar />
        <div className="browse-buttons-container">
        <BrowseWindow />
        <ButtonsContainer />
        </div>
      </div>
    );
  }
}

export default MainPage;