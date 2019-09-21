import React from 'react'

class PendingIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleView = this.handleView.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
    }

    handleView(){
        // open onePage show page
    }

    // handleDelete(){
        // when delete route is done lets throw it here
        // this.props.deleteLike(this.props.onePage._id)
    // }

    render(){
        let { onePage } = this.props;
       
        return (
            <div className="pending-index-item">
                <div className="like-info" onClick={this.handleView}>
                    <h3 className="pending-job-title">{onePage[0].job_title}</h3>
                    <h5 className="pending-company-name">{onePage[0].company_name}</h5>
                </div>
                <div className="remove-like" >&times;</div>
            </div>
        )
    }
}

export default PendingIndexItem;