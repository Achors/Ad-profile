import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>
          <span className={styles.name}>Your Name</span>
          <span className={styles.title}>Software Engineer</span>
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
              focus on building high-quality, user-friendly applications.
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
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
}

export default HomePage;
