import React from 'react';
// import BrowseShow from './browse_show';
// import { withRouter } from 'react-router-dom';
import OnePageDetail from './onepage_detail';
import EndOfResults from './end_of_results';


class BrowseWindow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            i: 0,
            swipe: ''
        }
    
        this.handleReset = this.handleReset.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.handleLike = this.handleLike.bind(this)
    
      }    
    componentDidMount(){
        // this.props.fetchAllOnePages()
        this.props.fetchRelevantOnePages()
    }

    handleNext(){
        this.setState({
            i: (this.state.i) + 1,
            swipe: "swipe-left"
        }) 
    }
  
    handleLike(){
        this.props.createLike({
            employeeId: this.props.user.id,
            OnepageId: this.props.onePages[this.state.i]._id
        })

        this.setState({
            i: (this.state.i) + 1,
            swipe: "swipe-right"
        }) 
    }
    handleReset(){
      this.props.currentMain.currentMain = null;
      this.handleNext()

    }

    render() {
        let button3 = <button onClick={this.handleReset}>Go Back</button>
        if (!this.props.onePages){
            return <div className="browse-window-container">Loading...</div>
        }
        
        let currentOnePage = this.props.onePages.map(onePage => {
            return <div className={`onepage-detail-container ${this.state.swipe}`} key={onePage._id}><OnePageDetail onePage={onePage}/></div>
        });

        let button1;
        let button2;
        if (this.props.user.role === 'Employer') {
            button1 = <button onClick={this.handleNext}>Decline</button>
            button2 = <button onClick={this.handleNext}>Contact</button>
        } else if (this.props.user.role === 'Job-Seeker' && this.props.onePages.length > 0){
            if (this.state.i < this.props.onePages.length){
                button1 = <button onClick={this.handleNext}>Not Interested</button>
                button2 = <button onClick={this.handleLike}>Interested</button>
            } else {
                button1 = ""
                button2 = ""
            }
        } else {
            button1 = ""
            button2 = ""
        }
        let renderedResult;

        if (this.props.currentMain.currentMain !== null) {
         renderedResult = (
           <OnePageDetail onePage={this.props.currentMain.currentMain} />
         )
        } else if (this.state.i < this.props.onePages.length) {
            renderedResult = (
              currentOnePage[this.state.i]
            )
        } else {
        renderedResult = (
            <EndOfResults />
        )
        }
        if (this.props.currentMain.currentMain !== null) {
          return (
          <div className = "browse-window-container">
            <div className = "browse-header-text">
            <h3> {renderedResult.jobTitle} </h3> 
            </div> 
            <div className = "browse-window"> 
                {renderedResult} 
            </div> 
            <div className = "buttons-container">
            <div className = "button-3"> {button3} </div> 
            </div> 
            </div>
            )
        }
        return (
            <div className="browse-window-container">
                <div className="browse-header-text">
                    <h3>Recommended For You</h3>
                </div>
                <div className="browse-window ">
                    {renderedResult}
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