import React from 'react';
// import BrowseShow from './browse_show';
// import { withRouter } from 'react-router-dom';
import OnePageDetail from './onepage_detail'



class BrowseWindow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            i: 0
        }
        this.handleNext = this.handleNext.bind(this)
        this.handleLike = this.handleLike.bind(this)
    }

    componentDidMount(){
        this.props.fetchAllOnePages()
    }

    handleNext(){
        this.setState({
            i: (this.state.i) + 1
        }) 
    }

    handleLike(){
        this.props.createLike({
            employeeId: this.props.user.id,
            OnepageId: this.props.onePages[this.state.i]._id
        })
        this.setState({
            i: (this.state.i) + 1
        }) 
    }

    render(){
        if (!this.props.onePages){
            return <div className="browse-window-container">Loading...</div>
        }
        let currentOnePage = this.props.onePages.map(onePage => {
            return <div className="onepage-detail-container swipe" key={onePage._id}><OnePageDetail onePage={onePage}/></div>
        });

        let button1;
        let button2;
        if (this.props.user.role === 'Employer') {
            button1 = <button onClick={this.handleNext}>Decline</button>
            button2 = <button onClick={this.handleNext}>Contact</button>
        } else {
            button1 = <button onClick={this.handleNext}>Not Interested</button>
            button2 = <button onClick={this.handleLike}>Interested</button>
        }
        return (
            <div className="browse-window-container">
                <div className="browse-header-text">
                    <h3>Recommended For You</h3>
                </div>
                <div className="browse-window ">
                   
                    {currentOnePage[this.state.i]}
                </div>
                <div className="buttons-container">
                    <div className="button-1">
                        {button1}
                    </div>
                    <div className="button-2">
                        {button2}
                    </div>
                </div>
            </div>
        )
    }
}

export default BrowseWindow;