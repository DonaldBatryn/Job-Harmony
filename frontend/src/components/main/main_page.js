import React from 'react';
import BrowseWindowContainer from '../browse/browse_window_container'
import PendingBar from '../pending/pending_index'
import ButtonsContainer from '../buttons/buttons_container'


class MainPage extends React.Component {

  render() {
    return (
      <div className="home-page-container">
        <PendingBar />
        <div className="browse-buttons-container">
        <BrowseWindowContainer />
        {/* <ButtonsContainer /> */}
        </div>
      </div>
    );
  }
}

export default MainPage;