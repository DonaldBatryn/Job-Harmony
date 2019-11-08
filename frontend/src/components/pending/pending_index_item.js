import React from 'react'
import OnePageShowContainer from '../../components/onePage/onepage_show_container';
import {Link} from 'react-router-dom'
import BrowseWindowContainer from '../browse/browse_window_container';

class PendingIndexItem extends React.Component{
    constructor(props){
      super(props)
    
      this.handleClick = this.handleClick.bind(this);
      this.handleView = this.handleView.bind(this);
      this.state = { 
        iconName: this.getRandomIcon()
      }
    }

    handleClick() {
      this.props.receiveNewMain(this.props.onePage)
    }

    handleView(){
      let onePage = this.props;
      return this.props.onePage._id
    }

    getRandomIcon(){
        let randomNum = (this.props.onePage.jobTitle.length % 3) + 1;
        let jobField = this.props.onePage.jobField;
        let iconClassName = jobField + "-" + randomNum;
        return iconClassName;
    }

    render(){
        let { onePage } = this.props;
        return (
            <div className="pending-index-item" onClick={(e) => this.handleClick()}>
              <div className={`icon ${this.state.iconName}`}></div>
              <div className="like-info" onClick={this.handleView}>
                  <h3 className="pending-job-title">{onePage.jobTitle}</h3>
                  <h5 className="pending-company-name">{onePage.companyName}</h5>
              </div>
            </div>
        )
    }
}

export default PendingIndexItem;