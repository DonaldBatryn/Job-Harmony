import React from 'react';

class Splash extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            slashClassOne: '',
            slashClassTwo: '',
            slashClassThree: '',
            slashClassFour: ''
        }
        this.handleWheelOne = this.handleWheelOne.bind(this);
        this.handleWheelTwo = this.handleWheelTwo.bind(this);
        this.handleWheelThree = this.handleWheelThree.bind(this);
        this.handleWheelFour = this.handleWheelFour.bind(this);
    }

    handleWheelOne(e) {
        e.stopPropagation();
        if (e.deltaY < 0){
            this.setState({ slashClassOne: 'scroll-down'});
        } else {
            this.setState({ slashClassOne: 'scroll-one' });
        }
    }
    handleWheelTwo(e) {
        e.stopPropagation();
        if (e.deltaY < 0) {
            this.setState({ slashClassOne: 'scroll-down' });
        } else {
            this.setState({ slashClassTwo: 'scroll-two' });
        }
    }
    handleWheelThree(e) {
        e.stopPropagation();
        if (e.deltaY < 0) {
            this.setState({ slashClassTwo: 'scroll-down' });
        } else {
            this.setState({ slashClassThree: 'scroll-three' });
        }
    }
    handleWheelFour(e) {
        e.stopPropagation();
        if (e.deltaY < 0) {
            this.setState({ slashClassThree: 'scroll-down' });
        }
    }
    render(){
        return (
            <div className="splash-container">
                <div className={`splash-1 ${this.state.slashClassOne}`} onWheel={this.handleWheelOne}>
                    <h1 className="splash-title">Job-Harmony</h1>
                    <div className="intro-text">
                        <h2>Your career will thank you.</h2>
                    </div>
                    <div>
                    <img className="hero" src="https://harmonyd.com/wp-content/uploads/2018/05/18-HD-Perfect-Harmony-Dark-Flip.jpg" alt=""/>
                    </div>
                    {/* <div className="slider"></div> */}
                </div>
                <div className={`splash-2 ${this.state.slashClassTwo}`} onWheel={this.handleWheelTwo}>slide 2</div>
                <div className={`splash-3 ${this.state.slashClassThree}`} onWheel={this.handleWheelThree}>slide 3</div>
                <div className={`splash-4 ${this.state.slashClassFour}`} onWheel={this.handleWheelFour}>slide 4</div>
            </div>
        )
    }
}

export default Splash;

