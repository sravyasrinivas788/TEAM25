

import React, { useEffect, useState } from 'react';
import '../../resources/templates.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function Newtemp() {
  const user = JSON.parse(localStorage.getItem('Student') || {});
  

  return (
    <div className="template-container" style={styles.container}>
      <div className="header" style={styles.header}>
        <h1 style={styles.name}>{user.Name}</h1>
        <div style={styles.contactInfo}>
          <a href={`mailto:${user.Email}`} style={styles.contactLink}>
            <FaEnvelope style={styles.icon} /> {user.Email}
          </a>
          <a href={`tel:${user.Mobile}`} style={styles.contactLink}>
            <FaPhone style={styles.icon} /> {user.Mobile}
          </a>
          <a href={user.LinkedIn} target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
            <FaLinkedin style={styles.icon} /> LinkedIn
          </a>
          <a href={user.GitHub} target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
            <FaGithub style={styles.icon} /> GitHub
          </a>
        </div>
      </div>

      <div className="divider" style={styles.divider}></div>

      <div className="section" style={styles.section}>
        <h2 style={styles.sectionTitle}>Objective</h2>
        <p style={styles.sectionContent}>{user.Personal}</p>
      </div>

      <div className="divider" style={styles.divider}></div>

      <div className="section" style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        {user.education.map((education, index) => (
          <div key={index} style={styles.educationItem}>
            <h3 style={styles.educationTitle}>{education.Qualification}</h3>
            <p style={styles.educationDetails}>{education.Institution} - {education.Year}</p>
            <p style={styles.educationDetails}>Percentage: {education.Percentage}%</p>
          </div>
        ))}
      </div>

      <div className="divider" style={styles.divider}></div>

      <div className="section" style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        {user.projects.map((project, index) => (
          <div key={index} style={styles.projectItem}>
            <h3 style={styles.projectTitle}>{project.ProjectName} [{project.Domain}]</h3>
            <p style={styles.projectDescription}>{project.Descreption}</p>
          </div>
        ))}
      </div>

      <div className="divider" style={styles.divider}></div>

      <div className="section" style={styles.section}>
        <h2 style={styles.sectionTitle}>Experience</h2>
        {user.internships.map((internship, index) => (
          <div key={index} style={styles.experienceItem}>
            <h3 style={styles.experienceTitle}>{internship.Name}</h3>
            <p style={styles.experienceDetails}>{internship.Organisation}</p>
            <p style={styles.experienceDetails}>{internship.Des}</p>
          </div>
        ))}
      </div>

      <div className="divider" style={styles.divider}></div>

      <div className="section" style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        {user.skills.map((skill, index) => (
          <div key={index} style={styles.skillItem}>
            <h3 style={styles.skillTitle}>Languages: {skill.Languages}</h3>
            <h3 style={styles.skillTitle}>Frameworks: {skill.Frameworks}</h3>
            <h3 style={styles.skillTitle}>Libraries: {skill.Libs}</h3>
            <h3 style={styles.skillTitle}>Areas of Interest: {skill.Intrest}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  name: {
    fontSize: '36px',
    margin: '0'
  },
  contactInfo: {
    margin: '10px 0'
  },
  contactLink: {
    margin: '5px 10px',
    color: '#0073b1',
    textDecoration: 'none',
    fontSize: '18px',
    display: 'inline-block'
  },
  icon: {
    marginRight: '5px'
  },
  divider: {
    height: '1px',
    backgroundColor: '#ddd',
    margin: '20px 0'
  },
  section: {
    margin: '20px 0'
  },
  sectionTitle: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#0073b1'
  },
  sectionContent: {
    fontSize: '16px',
    color: '#555'
  },
  educationItem: {
    marginBottom: '10px'
  },
  educationTitle: {
    fontSize: '20px',
    margin: '5px 0'
  },
  educationDetails: {
    fontSize: '16px',
    color: '#555'
  },
  projectItem: {
    marginBottom: '10px'
  },
  projectTitle: {
    fontSize: '20px',
    margin: '5px 0'
  },
  projectDescription: {
    fontSize: '16px',
    color: '#555'
  },
  experienceItem: {
    marginBottom: '10px'
  },
  experienceTitle: {
    fontSize: '20px',
    margin: '5px 0'
  },
  experienceDetails: {
    fontSize: '16px',
    color: '#555'
  },
  skillItem: {
    marginBottom: '10px'
  },
  skillTitle: {
    fontSize: '20px',
    margin: '5px 0'
  }
};

export default Newtemp;



