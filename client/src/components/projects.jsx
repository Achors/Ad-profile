import styles from './project.module.css';

function Projects() {
  return (
    <div>
      <section className={`${styles.section} ${styles.projects}`} id="projects">
        <h2>Featured Projects</h2>
        <div className={styles.projectGrid}>
          <div className={styles.project}>
            <img src="https://via.placeholder.com/250" alt="Project 1" />
            <div className={styles.projectContent}>
              <h3>Project Title 1</h3>
              <p className={styles.projectDescription}>Description of Project 1...</p>
              <div className={styles.projectLinks}>
                <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <img src="https://via.placeholder.com/250" alt="Project 2" />
            <div className={styles.projectContent}>
              <h3>Project Title 2</h3>
              <p className={styles.projectDescription}>Description of Project 2...</p>
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
