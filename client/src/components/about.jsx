import { useState, useEffect } from 'react';
import './about.css';

function AboutMe() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowMore(true); // Show full description on smaller screens
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDescription = () => setShowMore(!showMore);

  return (
    <div id="about-me" className="about-section">
      <img
        src="../assets/overal bgd.jpg"
        alt="Your Name - Profile Picture"
        className="profile-pic"
      />
      <h2>
        { /* Enter your name here */} <br />
        <span className="job-title">{ /* Enter your profession here */}</span>
      </h2>
      <p className="description">
        { /* Enter a short description about yourself here */} I am a highly motivated {/* Enter your profession here */} with 
        {/* Enter years of experience here */} years of experience in {/* Enter your skills here */} I am passionate about 
        {/* Enter your area of interest here */} and enjoy working on projects that {/* Briefly describe the kind of projects you enjoy */}.
        {showMore && (
          <> {/* Additional details displayed when "Show More" is clicked */}
            <br />
            <br />
            {/* Add more detailed information about yourself, skills, or experience here */}
            I am always eager to learn new technologies and expand my skillset. In my free time, I enjoy {/* Briefly mention your hobbies or interests */} 
          </>
        )}
      </p>
      <button className="toggle-btn" onClick={toggleDescription}>
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}

export default AboutMe;
