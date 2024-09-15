// import React from 'react'
// import '../../resources/templates.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import { FaLinkedin, FaGithub } from 'react-icons/fa';
// function Template1(){
//     const user=JSON.parse(localStorage.getItem("Student"))
   
        
//            return (
//     <div className="template1-parent">
//       <div className="top d-flex justify-content-between">
//         <h1>
//           {user.Name.toUpperCase()} 
//           <br/>
//           <br/>
          
//           <h6 style={{margin:0}}>Bachelor of Technology</h6>
//           <br/>
          
          
//           <h6 style={{margin:0}}>CHAITANYA BHARATHI INSTITUTE OF TECHNOLOGY</h6>
//         </h1>
//         <div>
//           <p>{user.Email}</p>
//           <p>{user.RollNumber}</p>
//           <p>{user.Mobile}</p>
//           <p>
          
//           <a href={user.LinkedIn} target="_blank" rel="noopener noreferrer">
//           <span className="linkedin-heading">LinkedIn</span>
//            <FaLinkedin /> 
//           </a>
         
//           {/* <a href={user.GitHub} target="_blank" rel="noopener noreferrer">
//             {user.GitHub}
//           </a> */}
//           </p>
         
//         </div>
//       </div>

//       <div className="divider mt-3"></div>

//       <div className="objective mt-3">
//         <h3>Objective</h3>
//         <hr />
//         <p>{user.Personal}</p>
//       </div>
//       <div className="education mt-3">
//         <h3>Education</h3>
//         <hr />
//         {user.education.map((education) => {
//           return (
//             <div className="d-flex align-items-center">
//               <h6 style={{ width: 120 }}>
                
//                 <b> {education.Year} : </b>
                
//               </h6>
              
//                 <b>{education.Qualification}</b> with{" "}
//                 <b>{education.Percentage}%</b> in {education.Institution}
                
                
                    
                
                
               
              
//             </div>
            


            

//           );
          
//         })}
//       </div>
//       <div className="divider mt-3"></div>

//       <div className="projects mt-3">
//         <h3>Projects</h3>
//         <hr/>
//         {user.projects.map((projects) => {
//           return (
//             <div className="d-flex flex-column">
//               <h6>
//                 <b>
//                   {projects.ProjectName} [{projects.Domain}] {" "}
//                 </b>
//               </h6>
//               <br/>
//               <p>{projects.Descreption}</p>
//               <br/>
//             </div>
//           );
//         })}
//       </div>
//       <div className="divider mt-3"></div>

// <div className="experience mt-3">
//   <h3>Experience</h3>
//   <hr />
//   {user.internships.map((internships) => {
//     return (
//       <div className="d-flex flex-column">
//         <h6 style={{ width: 250 }}>
//           <b>{internships.Name}  </b>
//           <br/>
//           <br/>
//           <i>{internships.Organisation}</i>
          
//         </h6>
        

//         <br/>
//         <p>{internships.Des}</p>
//         <br/>
        
        
       
//       </div>
      
//     );
//   })}

// </div>
// <div className="divider mt-3"></div>

//       <div className="projects mt-3">
//         <h3>Skills</h3>
//         <hr />
//         {user.skills.map((skills) => {
//           return (
//             <div className='d-flex align-items-center'>
//                 <h6>
//                     <b>Languages:<i>{skills.Languages}</i></b>
//                     <br/>
//                     <br/>
//                     <b>Frameworks:<i>{skills.Frameworks}</i></b>
//                     <br/>
//                     <br/>
//                     <b>Libraries:<i>{skills.Libs}</i></b>
//                     <br/>
//                     <br/>
//                     <b>Areas of Intrest:<i>{skills.Intrest}</i></b>
//                     <br/>
//                     <br/>
//                 </h6>

//             </div>
//           )
//         })}
//       </div>
    



//         </div>
//     // <div>
//     //     Template1
//     // </div>
//     )
// }
// export default Template1;

import React, { useEffect, useState } from 'react';
import '../../resources/templates.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Template1() {
  // const user = JSON.parse(localStorage.getItem('Student'));
  const user=JSON.parse(localStorage.getItem("Student"))
useEffect(()=>{
  console.log(user);
  // console.log(user.data);

})



  const [imageSrc, setImageSrc] = useState(null);

  // useEffect(() => {
  //   // Convert Buffer to Base64
  //   const arrayBufferView = new Uint8Array(user.profileImage.data);
  //   const blob = new Blob([arrayBufferView], { type: 'image/jpg' });
  //   const reader = new FileReader();

  //   reader.onload = function () {
  //     setImageSrc(reader.result);
  //   };

  //   reader.readAsDataURL(blob);
  // }, [user.profileImage.data]);

  return (
   
    <div className="resume-container" style={{ fontFamily: 'Arial, sans-serif', color: '#333', display: 'flex', flexDirection: 'row', padding: '20px', backgroundColor: '#f4f4f9' }}>
      <div className="left-column" style={{ width: '30%', padding: '20px', backgroundColor: '#ffffff', marginRight: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <div className="profile-section" style={{ textAlign: 'center' }}>
          {/* <img src={imageSrc} alt="Profile" style={{ width: '150px', borderRadius: '50%', marginBottom: '20px' }} /> */}
          <h2 style={{ fontSize: '24px', margin: '10px 0' }}>{user.Name}</h2>
          <p style={{ fontSize: '16px', color: '#777' }}>{user.Email}</p>
          <p style={{ fontSize: '16px', color: '#777' }}>{user.Mobile}</p>
          <div className="social-links" style={{ marginTop: '10px' }}>
            <a href={user.LinkedIn} target="_blank" rel="noopener noreferrer" style={{ color: '#0e76a8', textDecoration: 'none', fontSize: '18px', marginRight: '10px' }}>
              <FaLinkedin />
            </a>
            <a href={user.GitHub} target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none', fontSize: '18px' }}>
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="divider" style={{ margin: '20px 0' }}></div>
        <div className="skills-section">
          <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#0073b1' }}>Skills</h3>
          {user.skills ? user.skills.map((skill, index) => (
          <div key={index} style={{ marginBottom: '10px', textAlign: 'left' }}>
            <p style={{ fontSize: '16px', color: '#555' }}><strong>Languages:</strong> {skill.Languages}</p>
            <p style={{ fontSize: '16px', color: '#555' }}><strong>Frameworks:</strong> {skill.Frameworks}</p>
            <p style={{ fontSize: '16px', color: '#555' }}><strong>Libraries:</strong> {skill.Libs}</p>
            <p style={{ fontSize: '16px', color: '#555' }}><strong>Areas of Interest:</strong> {skill.Intrest}</p>
          </div>
        )) : <p>Skills Not Defined</p>}
        </div>
      </div>
      <div className="right-column" style={{ width: '70%', padding: '20px', backgroundColor: '#ffffff', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <div className="section">
          <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#0073b1' }}>Objective</h3>
          <p style={{ fontSize: '16px', color: '#555' }}>{user.Personal}</p>
        </div>
        <div className="divider" style={{ margin: '20px 0' }}></div>
        <div className="section">
          <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#0073b1' }}>Education</h3>
          {user.education.map((education, index) => (
            <div key={index} style={{ marginBottom: '10px', textAlign: 'left' }}>
              <h4 style={{ fontSize: '18px', margin: '5px 0' }}>{education.Qualification}</h4>
              <p style={{ fontSize: '16px', color: '#555' }}>{education.Institution} - {education.Year}</p>
              <p style={{ fontSize: '16px', color: '#555' }}>Percentage: {education.Percentage}%</p>
            </div>
          ))}
        </div>
        <div className="divider" style={{ margin: '20px 0' }}></div>
        <div className="section">
          <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#0073b1' }}>Projects</h3>
          {user.projects.map((project, index) => (
            <div key={index} style={{ marginBottom: '10px', textAlign: 'left' }}>
              <h4 style={{ fontSize: '18px', margin: '5px 0' }}>{project.ProjectName} [{project.Domain}]</h4>
              <p style={{ fontSize: '16px', color: '#555' }}>{project.Descreption}</p>
            </div>
          ))}
        </div>
        <div className="divider" style={{ margin: '20px 0' }}></div>
        <div className="section">
          <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#0073b1' }}>Experience</h3>
          {user.internships.map((internship, index) => (
            <div key={index} style={{ marginBottom: '10px', textAlign: 'left' }}>
              <h4 style={{ fontSize: '18px', margin: '5px 0' }}>{internship.Name}</h4>
              <p style={{ fontSize: '16px', color: '#555' }}>{internship.Organisation}</p>
              <p style={{ fontSize: '16px', color: '#555' }}>{internship.Des}</p>
            </div>
          ))}
        </div>N
      </div>
    </div>
  );
}

export default Template1;
