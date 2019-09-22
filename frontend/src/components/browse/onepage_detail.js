import React from 'react';

const OnePageDetail = ({ onePage}) => {
  //!!!!  comminted out because need to reseed (After reseed commint backin )   !!!!
  // let jobTitle = "no job title";
  // if (onePage.jobTitle){
    //   jobTitle = onePage.jobTitle
    // }
  let jobTitle = "DEMO DEMO DEMO";
  let jobField = "DEMO DEMO DEMO";
  let jobSkills = "DEMO DEMO DEMO";
  return (
    <div>
      <h3>Company:&nbsp;{onePage.companyName}</h3>
      <h3>Description:&nbsp;{onePage.description}</h3>
      
      <h3>Job Title:&nbsp;{jobTitle}</h3>
      {/* this will need to be changed when we reseed if you are showing "DEMO DEMO DEMO" this is why  */}
      
      
      <h3>jobField:&nbsp;{jobField}</h3>
      {/* this will need to be changed when we reseed if you are showing "DEMO DEMO DEMO" this is why  */}
      
      
      <h3>jobSkills:&nbsp;{jobSkills}</h3>
      {/* this will need to be changed when we reseed if you are showing "DEMO DEMO DEMO" this is why  */}
      
      <h3>Position is:&nbsp;{onePage.type}</h3>
      <h3>Remote:&nbsp;{onePage.remote.toString()}</h3>
      <h3>Benefits:&nbsp;{onePage.benefits}</h3>
      <h3>Starting Salary:&nbsp;${onePage.startingSay}</h3>
    </div>
  )
}

export default OnePageDetail;