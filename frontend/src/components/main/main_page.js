import React from 'react';
import BrowseWindowContainer from '../browse/browse_window_container'
import PendingIndexContainer from '../pending/pending_index_container'
// import ButtonsContainer from '../buttons/buttons_container'


class MainPage extends React.Component {

  render() {
    const allTheIcons = (
      <div className="icon-collection">
        <div className="icon Accounting-1"></div>
        <div className="icon Accounting-2"></div>
        <div className="icon Accounting-3"></div>
        <div className="icon Culinary-1"></div>
        <div className="icon Culinary-2"></div>
        <div className="icon Culinary-3"></div>
        <div className="icon Finance-1"></div>
        <div className="icon Finance-2"></div>
        <div className="icon Finance-3"></div>
        <div className="icon Healthcare-1"></div>
        <div className="icon Healthcare-2"></div>
        <div className="icon Healthcare-3"></div>
        <div className="icon Insurance-1"></div>
        <div className="icon Insurance-2"></div>
        <div className="icon Insurance-3"></div>
        <div className="icon Marketing-1"></div>
        <div className="icon Marketing-2"></div>
        <div className="icon Marketing-3"></div>
        <div className="icon Software-1"></div>
        <div className="icon Software-2"></div>
        <div className="icon Software-3"></div>
        <div className="icon Transportation-1"></div>
        <div className="icon Transportation-2"></div>
        <div className="icon Transportation-3"></div>
      </div>
    );
    return (
      <div className="home-page-container">
        <PendingIndexContainer />
        <div className="browse-buttons-container">
        <BrowseWindowContainer />
        {/* <ButtonsContainer /> */}
        {allTheIcons}
        </div>
      </div>
    );
  }
}

export default MainPage;