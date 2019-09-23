import React from 'react';

class Splash extends React.Component{

    render(){
        return (
            <div className="splash-container">
                <h1 className="splash-title">Job-Harmony</h1>
                <div className="intro-text">
                    <h2>Your career will thank you.</h2>
                </div>
                <div>
                <img className="hero" src="https://harmonyd.com/wp-content/uploads/2018/05/18-HD-Perfect-Harmony-Dark-Flip.jpg" alt=""/>
                </div>
                {/* <div className="slider"></div> */}
            </div>
        )
    }
}

export default Splash;

