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
  if (onePage.remote === true){
    remoteValue = "Yes"
  } else {
    remoteValue = "No"
  }
  return (
    <div className="onepage-detail-container">
      <div className="op-detail-header">
        <div className={`banner ${jobField}-${randomNum}`}>
        </div>
         <div className="op-header-text">
          <h1>{jobTitle}</h1>
          <h2>at&nbsp;{onePage.companyName}</h2>
          <h4>Field:&nbsp;{jobField}</h4>
        </div>
      </div>
      <div className="op-detail-bottom-box">
        <div className="op-detail-left">
          <div className="salary-div">
            <h3>Starting Salary:</h3>
            <h3>${onePage.startingPay}</h3>
          </div>
          <div className="job-descrip-div">
            <h3>Job Description:</h3>
            <p>{onePage.description}</p>
          </div>
          <div className="skills-req-div">
            <h3>Skills Required</h3>
            <ul>{goodJobSkills}</ul>
          </div>
        </div>
        <div className="op-detail-right">
          <div className="position-div">
            <h3>Position is:</h3>
            <h3>{onePage.type}</h3>
          </div>
          <div className="remote-div">
            <h3>Remote?:</h3>
            <h3>{remoteValue}</h3>
          </div>
          <div className="benefits-div">
            <h3>Benefits</h3>
            <p>{onePage.benefits}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnePageDetail;