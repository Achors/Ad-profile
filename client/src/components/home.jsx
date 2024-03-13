import styles from './HomePage.module.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Projects from './projects';


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
        <section>
          <Projects />
        </section>

        

        <section className={`${styles.section} ${styles.skills}`} id="skills">
        <h2>Skills & Technologies</h2>
        <ul className={styles.skillList}>
          <li>
            <span className={styles.skillName}>JavaScript (ES6+)</span>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar} style={{ width: '80%' }}></div>
            </div>
          </li>
          <li>
            <span className={styles.skillName}>TypeScript</span>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar} style={{ width: '85%' }}></div>
            </div>
          </li>
          <li>
            <span className={styles.skillName}>ReactJS</span>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar} style={{ width: '80%' }}></div>
            </div>
          </li>
          <li>
            <span className={styles.skillName}>ReactNative</span>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar} style={{ width: '70%' }}></div>
            </div>
          </li>
          <li>
            <span className={styles.skillName}>Python</span>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar} style={{ width: '80%' }}></div>
            </div>
          </li>
          <li>
            <span className={styles.skillName}>Git</span>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar} style={{ width: '90%' }}></div>
            </div>
          </li>
          <li>
            <span className={styles.skillName}>Flutter</span>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar} style={{ width: '60%' }}></div>
            </div>
          </li>
          <li>
            <span className={styles.skillName}>HTML5</span>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar} style={{ width: '100%' }}></div>
            </div>
          </li>
          <li>
            <span className={styles.skillName}>RESTful APIs</span>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar} style={{ width: '80%' }}></div>
            </div>
          </li>
          <li>
            <span className={styles.skillName}>TailwindCSS</span>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar} style={{ width: '90%' }}></div>
            </div>
          </li>
        </ul>
      </section>

      <section className={styles.contact} id="contact">
            <div className={styles.getAdolf}>
               <div >
              <h2 className={styles.sectionTitle}>Get In Touch</h2>
              </div>
              <div className={styles.getMe}>
              <div>
              <p className={styles.sectionDescription}>
              I am always interested in new opportunities and challenges. 
              Feel free to reach out to me if you have any questions or 
              would like to discuss potential projects.
              </p>

              <div className={styles.contactActions}>
                
                <Link to="/contact" className={styles.actionButton}>
                  Get in Touch
                </Link>
              </div>
              </div>
              <div className={styles.contactInfo}>
              <a href="mailto:adolfnyerere@gmail.com" className={styles.actionButton}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>  Email Me</span>
                </a>
                <a href="https://wa.me/1612399-6004" className={styles.actionButton}>
                  <FontAwesomeIcon icon={faWhatsapp} />
                  <span>  WhatsApp Me</span>
                </a>
                <div className={styles.socialMedia}>
                <h3 className={styles.socialTitle}>Connect with Me:</h3>
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
              </div>
                
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>
                <span >
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                <span className={styles.infoText}>Nairobi, Kenya</span>
                </div>
                <div className={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.372869132901!2d36.81010461475644!3d-1.2865564357483014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15de83a4992b%3A0xef5c45361e10d61!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1645283429944!5m2!1sen!2sus"
                    width="200"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
              
            </div>
      </div>
  
</section>

      </main>

      <footer className={styles.footer}>
        <p> Copyright © Nyerere {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default HomePage;
