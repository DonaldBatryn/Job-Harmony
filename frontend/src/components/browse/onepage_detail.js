import React from 'react';

const OnePageDetail = ({ onePage}) => {
  let job_title;
  if (onePage.job_title){
    job_title = onePage.job_title
  }
  return (
    <div>
      <h3>Company:&nbsp;{onePage.company_name}</h3>
      <h3>Description:&nbsp;{onePage.description}</h3>
      <h3>Job Title:&nbsp;{job_title}</h3>
      <h3>Position is:&nbsp;{onePage.type}</h3>
      <h3>Remote:&nbsp;{onePage.remote.toString()}</h3>
      <h3>Benefits:&nbsp;{onePage.benefits}</h3>
      <h3>Starting Salary:&nbsp;${onePage.starting_pay}</h3>
    </div>
  )
}

export default OnePageDetail;