// import React from "react";
// import "../../resources/templates.css";
// import { FaLinkedin, FaGithub } from 'react-icons/fa';

// function Template4() {
//   const user = JSON.parse(localStorage.getItem("Student"));

//   return (
//     <div className="template4-parent">
//       <div className="template4-left">
//         <div className="header">
//           <h1>{user.Name.toUpperCase()}</h1>
          
//         </div>

//         <div className="divider"></div>

//         <div className="objective">
//           <h3>Objective</h3>
//           <p>{user.Personal}</p>
//         </div>

//         <div className="divider"></div>

//         <div className="education">
//           <h3>Education</h3>
//           {user.education.slice(0, user.education.length / 2).map((education) => (
//             <div key={education.Institution}>
//               <p>
//                 {education.Qualification} | {education.Institution} | {education.Year}
//               </p>
//             </div>
//           ))}
//         </div>

//         <div className="divider"></div>

//         <div className="projects">
//           <h3>Projects</h3>
//           {user.projects.slice(0, user.projects.length / 2).map((project) => (
//             <div key={project.ProjectName}>
//               <h4>{project.ProjectName}</h4>
//               <p>{project.Descreption}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="template4-right">
//         <div className="skills">
//           <h3>Skills</h3>
//           <ul>
//             {user.skills.slice(0, user.skills.length / 2).map((skill, index) => (
//               <li key={index}>{skill}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="divider"></div>

//         <div className="contact">
//           <h3>Contact</h3>
//           <p>{user.RollNumber}</p>
//           <p>{user.Email}</p>
//           <p>{user.Mobile}</p>
//           <p>{user.Branch}</p>
//           <a href={user.LinkedIn} target="_blank" rel="noopener noreferrer">
//             <FaLinkedin /> LinkedIn
//           </a>
//           <a href={user.GitHub} target="_blank" rel="noopener noreferrer">
//             <FaGithub /> GitHub
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Template4;
import React from 'react';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';
import '../../resources/templates.css';

function Template4() {
  const user = JSON.parse(localStorage.getItem("Student"));

  return (
    <div className="template1-parent">
      {/* Heading */}
      <div className="top d-flex justify-content-between">
        <div>
          <h1>{user.Name.toUpperCase()}</h1>
          <h6 style={{ margin: 0 }}>Bachelor of Science in Computer Information Systems</h6>
          <h6 style={{ margin: 0 }}>Minors: Networking ; Network Security</h6>
        </div>
        <div>
          <p><FaPhone /> {user.Mobile}</p>
          <p><FaEnvelope /> {user.Email}</p>
          <p>
            <a href={user.LinkedIn} target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </p>
          <p>
            <a href={user.GitHub} target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
          </p>
        </div>
      </div>

      <div className="divider mt-3"></div>

      {/* Summary */}
      <div className="objective mt-3">
        <h3>Summary</h3>
        <hr />
        <p>Simplified version of a monstrosity that I built back in college using current best practices.</p>
      </div>

      <div className="divider mt-3"></div>

      {/* Skills */}
      <div className="skills mt-3">
        <h3>Skills</h3>
        <hr />
        <div className="d-flex justify-content-between">
          <div>
            <ul>
              <li><b>Automation:</b> SaltStack, Ansible, Chef, Puppet</li>
              <li><b>Cloud:</b> Salt-Cloud, Linode, GCP, AWS</li>
              <li><b>Languages:</b> Python, Bash, PHP, Perl, VB/C#.Net</li>
            </ul>
          </div>
          <div>
            <ul>
              <li><b>OS:</b> Debian, Ubuntu, CentOS, BSD, AIX</li>
              <li><b>Policies:</b> CIS, SOC2, PCI-DSS, GDPR, ITIL</li>
              <li><b>Testing:</b> Pytest, Docker, CircleCI, Jenkins, Inspec</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="divider mt-3"></div>

      {/* Experience */}
      <div className="experience mt-3">
        <h3>Experience</h3>
        <hr />
        {user.experience.map((job, index) => (
          <div key={index} className="job">
            <h5>{job.Company} <small>{job.Date}</small></h5>
            <h6>{job.Title}</h6>
            <ul>
              {job.Duties.map((duty, idx) => (
                <li key={idx}>{duty}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="divider mt-3"></div>

      {/* Education */}
      <div className="education mt-3">
        <h3>Education</h3>
        <hr />
        <h6>{user.Education.Degree} - {user.Education.Institution}</h6>
        <h6>{user.Education.Minors}</h6>
      </div>

      <div className="divider mt-3"></div>

      {/* Certifications */}
      <div className="certifications mt-3">
        <h3>Certifications</h3>
        <hr />
        <ul>
          {user.Certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>

      <div className="divider mt-3"></div>

      {/* Projects */}
      <div className="projects mt-3">
        <h3>Projects</h3>
        <hr />
        {user.projects.map((project, index) => (
          <div key={index} className="project">
            <h5>{project.ProjectName}</h5>
            <p>{project.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Template4;
