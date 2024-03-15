import styles from './project.module.css';
import portfolio from '../assets/portfolio.png'
import ticketspng from '../assets/ticketnexus.png'

function Projects() {
  return (
    <div>
      <section className={`${styles.section} ${styles.projects}`} id="projects">
        <div className={styles.projectGrid}>
          <div className={styles.project}>
            <img src={portfolio} alt="Project 1" />
            <div className={styles.projectContent}>
              <h3>Personal Portfolios</h3>
              <p className={styles.projectDescription}>Our latest project, Adolf portfolio, combines cutting-edge technology <br /> 
              with sleek design to deliver a user-friendly individual portfolio. 
              Built with React, Flask and Python, it offers seamless 
              navigation and scalability for optimal performance. 
              </p>
              <div className={styles.projectLinks}>
                <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <img src={ticketspng} alt="Project 2" />
            <div className={styles.projectContent}>
              <h3>Ticket Nexus</h3>
              <p className={styles.projectDescription}>An events Platform. Ticket Nexus exemplifies our dedication to innovation and client satisfaction. 
              Let us elevate your digital presence together</p>
              <div className={styles.projectLinks}>
                <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <img src="https://via.placeholder.com/250" alt="Project 3" />
            <div className={styles.projectContent}>
              <h3>Project Title 3</h3>
              <p className={styles.projectDescription}>Description of Project 3...</p>
              <div className={styles.projectLinks}>
                <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects;
