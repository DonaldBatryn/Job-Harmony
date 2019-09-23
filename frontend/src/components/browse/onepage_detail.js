import React from 'react';
import logo from '../../images/jobHarmonyLogo.png'

const OnePageDetail = ({ onePage}) => {
  //!!!!  comminted out because need to reseed (After reseed commint backin )   !!!!
  // let jobTitle = "no job title";
  // if (onePage.jobTitle){
    //   jobTitle = onePage.jobTitle
    // }
  let jobTitle = "DEMO DEMO DEMO";
  let jobField = "DEMO DEMO DEMO";
  let jobSkills = "DEMO DEMO DEMO";
  let remoteValue;
  if (onePage.remote === "true"){
    remoteValue = "Yes"
  } else {
    remoteValue = "No"
  }
  return (
    <div className="onepage-detail-container">
      <div className="op-detail-header">
        <div className="op-header-pic">
          <img src={logo} alt=""/>
        </div>
        <div className="op-header-text">
        <h1>{jobTitle}</h1>
          {/* this will need to be changed when we reseed if you are showing "DEMO DEMO DEMO" this is why  */}
          <h2>at&nbsp;{onePage.companyName}</h2>
        </div>
      </div>
      <div className="op-detail-bottom-box">
        <div className="op-detail-left">
          <h3>Starting Salary:&nbsp;${onePage.startingPay}</h3>
          <h3>Job Description:&nbsp;</h3>
          <p>{onePage.description}</p>
          
          
          <h4>Field:&nbsp;{jobField}</h4>
          {/* this will need to be changed when we reseed if you are showing "DEMO DEMO DEMO" this is why  */}
        
        </div>
        <div className="op-detail-right">
          <h4>Skills Required:&nbsp;</h4>
          <p>{jobSkills}</p>
          {/* this will need to be changed when we reseed if you are showing "DEMO DEMO DEMO" this is why  */}
          
          <h5>Position is:&nbsp;{onePage.type}</h5>
          <h5>Remote?:&nbsp;{remoteValue}</h5>
          <h5>Benefits:&nbsp;{onePage.benefits}</h5>
        </div>
      </div>
    </div>
  )
}

export default OnePageDetail;