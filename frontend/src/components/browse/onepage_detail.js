import React from 'react';


const OnePageDetail = ({ onePage}) => {

  let jobTitle = onePage.jobTitle;
  let jobField = onePage.jobField;
  let jobSkills = onePage.jobSkills.split(",");
  let goodJobSkills = jobSkills.map( (skill, i)=> {
    return <li key={i}>{skill}</li>
  })
  let catchPhrase = onePage.catchPhrase;
  let randomNum = (jobTitle.length % 3) + 1;
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
          <div className={`banner ${jobField}-${randomNum}`}>
          </div>
          <h3>{catchPhrase}</h3>
          {/* <img src={onePage.image} alt=""/> */}
        </div>
      </div>
      <div className="op-detail-bottom-box">
        <div className="op-header-text">
        <h1>{jobTitle}</h1>

          <h2>at&nbsp;{onePage.companyName}</h2>
        </div>
        <div className="op-detail-left">
          <h3>Starting Salary:&nbsp;${onePage.startingPay}</h3>
          <h3>Job Description:&nbsp;</h3>
          <p>{onePage.description}</p>
          
          
          <h4>Field:&nbsp;{jobField}</h4>
          
        
        </div>
        <div className="op-detail-right">
          <h4>Skills Required:&nbsp;</h4>
          <ul>{goodJobSkills}</ul>
          
          
          <h5>Position is:&nbsp;{onePage.type}</h5>
          <h5>Remote?:&nbsp;{remoteValue}</h5>
          <h5>Benefits:&nbsp;{onePage.benefits}</h5>
        </div>
      </div>
    </div>
  )
}

export default OnePageDetail;