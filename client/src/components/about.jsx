import { useState, useEffect } from 'react';
import './about.css';
import laptopbcg from '../assets/adloo2 bcg.jpg';
import ResumePDF from '../assets/Adolf-C Vitae.pdf'; 

function AboutMe() {
  const [showMore, setShowMore] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowMore(true); 
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDescription = () => setShowMore(!showMore);
  const toggleExperience = () => setShowExperience(!showExperience);
  const downloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'Adolf-C Vitae.pdf'; // Change the filename as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="about-me" className="about-section">
      <img
        src={laptopbcg}
        alt="Your Name - Profile Picture"
        className="profile-pic"
      />

      {showExperience ? (
        <>
      <div className="experience-section">
      <div className='title-btn'>
        <h2>Experience & Education</h2>
        <div className='timeline'>
        <div className="experience-card">
          <h3>Software Engineer</h3>
          <h4>Listonic</h4>
          <p>2023 - To Date</p>
          <ul>
            <li>Developed and maintained features for a large-scale web application</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software on schedule.</li>
            <li>Implemented unit and integration tests to ensure code quality and stability.</li>
          </ul>
        </div>
        <div className="experience-card education">
          <h3>Master of Science in Computer Science</h3>
          <h4>Moringa School</h4>
          <p>2024</p>
          <ul>
            <li>Software Engineering, Artificial Intelligence, and Machine Learning.</li>
            <li>API Gateways &Integration</li>
            <li>Data Migration</li>
          </ul>
        </div>
        </div>
        </div>
        <div className='actions'>
        <div>
        <button className="download-resume-btn" onClick={downloadResume}> Download Resume </button>
          </div>
          <div>
          <button className="download-resume-btn" onClick={toggleExperience}> Go Back </button>
          </div>
        </div>
  </div>
  </>
      ) : (
        <>
      <h2>
        I am Nyerere <br />
        <span className="job-title">Software Developer</span>
      </h2>
      <p className="description">
      I am a skilled digital architect with over four years of experience in full-stack development, <br /> 
      Python programming, and UI/UX design. I am passionate about creating innovative digital <br />
      solutions that cater to your specific business needs and align with your brand values. <br />
      I am excited to collaborate with you on your next project and empower your business with <br />
      advanced digital solutions. 
        {showMore && (
          <> 
            <br />
            <br />
            
            I am always eager to learn new technologies and expand my skillset. In my free time, <br />
            I enjoy exploring innovative coding techniques and experimenting with new programming <br />
            languages. Equally, I find great joy in immersing myself in various hobbies and <br />
            activities that fuel my creativity and nourish my soul. 
          </>
        )}
      </p>
      <div  className="actions">
      <div>
      <button className="toggle-btn" onClick={toggleDescription}>
        {showMore ? 'Show Less' : 'Show More'}
      </button>
      </div>
      <div>
      <button className="toggle-btn" onClick={toggleExperience}>
        {showExperience ? 'Experience' : 'Experience'}
      </button>
      </div>
      </div>
    </>
      )}
    </div>
  );
}

export default AboutMe;
