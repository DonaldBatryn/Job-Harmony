import React from 'react';
import { Link } from 'react-router-dom';

import createResume from '../../images/createResume.png'
import browseJobs from '../../images/browseJobs.png'
import findMatches from '../../images/findMatches.png'

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

    openModalFor(form) {
        return e => {
            this.props.openModal(form)
        }
    }

    render(){
        return (
            <div className="splash-container">
                    <img className="hero" src="https://harmonyd.com/wp-content/uploads/2018/05/18-HD-Perfect-Harmony-Dark-Flip.jpg" alt=""/>
                <div className={`splash-1 ${this.state.slashClassOne}`} onWheel={this.handleWheelOne}>
                    <h1 className="splash-title">Job-Harmony</h1>
                    <div className="intro-text">
                        <h2>Your career will thank you.</h2>
                    </div>
                    <div>
                    </div>
                    {/* <div className="slider"></div> */}
                </div>
                <div className={`splash-2 ${this.state.slashClassTwo}`} onWheel={this.handleWheelTwo}>
                    <h1 className="intro-text exp-text">Create a Resume</h1>
                    <img className="splash-image" src={createResume} />
                </div>
                <div className={`splash-3 ${this.state.slashClassThree}`} onWheel={this.handleWheelThree}>
                    <h1 className="intro-text exp-text">Browse for jobs that match your skills</h1>
                    <img className="splash-image" src={browseJobs} />
                </div>
                <div className={`splash-4 ${this.state.slashClassFour}`} onWheel={this.handleWheelFour}>
                    <h1 className="intro-text exp-text">Find your perfect match</h1>
                    <img className="splash-image" src={findMatches} />
                    <div className="splash-auth-buttons">
                        <button className="session-btn auth-btn" onClick={this.openModalFor('signup')}>
                            <Link className="my-profile-btn" to={'/signup'}>Signup</Link>
                        </button>
                        <button className="session-btn log-in-nav" onClick={this.openModalFor('login')}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;

