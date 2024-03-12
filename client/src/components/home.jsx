import styles from './HomePage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
          <p><span className={styles.name}> Hello, my name is</span> <br/></p>
        <h1 className={styles.heading}>          
          <span className={styles.name}> Aldoff Nyerere</span> <br/>
          <span className={styles.title}>FullStack Software Developer</span>
        </h1>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} id="about">
          <div className={styles.heroContent}>
            <h2>
              I build creative and innovative software solutions.
            </h2>
            <p>
              I am a passionate software engineer with a strong
              focus on building high-quality, user-friendly applications. <br/>
              I have experience in various technologies and frameworks,
              and I am always eager to learn new things.
            </p>
            
            <a href="#projects" className={styles.heroButton}>
              See My Work
            </a>
          </div>
          <div className={styles.heroImage}>
            {/* Add your profile image here */}
          </div>
        </section>

        <section className={styles.projects} id="projects">
          <h2>Featured Projects</h2>
          <div className={styles.projectGrid}>
            {/* Add components for your project details here */}
          </div>
        </section>

        <section className={styles.skills} id="skills">
          <h2>Skills & Technologies</h2>
          <ul className={styles.skillList}>
            <li>
              <span className={styles.skill}>JavaScript (ES6+)</span>
            </li>
            <li>
              <span className={styles.skill}>React</span>
            </li>
            <li>
              <span className="skill">Node.js</span>
            </li>
            {/* Add more skills as needed */}
          </ul>
        </section>

        <section className={styles.contact} id="contact">
          <h2>Get In Touch</h2>
          <p>
            I am always interested in new opportunities and challenges. Feel free
            to reach out to me if you have any questions or would like to discuss
            potential projects.
          </p>
          <a href="mailto:youremail@example.com" className={styles.contactButton}>
            Contact Me
          </a>
        </section>

        <section className={styles.social} id="social">
          <h2>Follow Me</h2>
          <div className={styles.socialIcons}>
            <a href="https://twitter.com/yourusername" className={styles.socialIcon}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com/in/yourusername" className={styles.socialIcon}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/yourusername" className={styles.socialIcon}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Nyerere</p>
      </footer>
    </div>
  );
}

export default HomePage;
