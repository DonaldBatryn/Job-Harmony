import React from 'react';

const OnePageDetail = ({ onePage}) => {
  let jobTitle = "no job title";
  if (onePage.jobTitle){
    jobTitle = onePage.jobTitle
  }
  return (
    <div>
      <h3>Company:&nbsp;{onePage.companyName}</h3>
      <h3>Description:&nbsp;{onePage.description}</h3>
      <h3>Job Title:&nbsp;{jobTitle}</h3>
      <h3>Position is:&nbsp;{onePage.type}</h3>
      <h3>Remote:&nbsp;{onePage.remote.toString()}</h3>
      <h3>Benefits:&nbsp;{onePage.benefits}</h3>
      <h3>Starting Salary:&nbsp;${onePage.startingPay}</h3>
    </div>
  )
}

export default OnePageDetail;