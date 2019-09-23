import React from 'react'

class PendingIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleView = this.handleView.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            iconName: this.getRandomIcon()
        }
    }

    handleView(){
        // open onePage show page
    }

    // handleDelete(){
        // when delete route is done lets throw it here
        // this.props.deleteLike(this.props.onePage._id)
    // }
    getRandomIcon() {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        let jobField = this.props.onePage[0].jobField;
        let iconClassName = jobField + "-" + randomNum;
        return iconClassName;
    }

    render(){
        let { onePage } = this.props;
        return (
            <div className="pending-index-item">
                <div className={`icon ${this.state.iconName}`}></div>
                <div className="like-info" onClick={this.handleView}>
                    <h3 className="pending-job-title">{onePage[0].jobTitle}</h3>
                    <h5 className="pending-company-name">{onePage[0].companyName}</h5>
                </div>
             
            </div>
        )
    }
}

export default PendingIndexItem;