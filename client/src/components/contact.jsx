import emailjs from 'emailjs-com';
import './contact.css';
import styles from './HomePage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Your message has been sent successfully!');
        e.target.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='conatc'>
    <section className="contact" id="contact">
    <div>
    <div>
      <h2>Get In Touch</h2>
    </div>
    <div>
      <div className="content-wrapper">
        <p>
          I am always interested in new opportunities and challenges. <br />
          Feel free to reach out to me if you have any questions or would <br /> 
          like to discuss potential projects.
        </p>
        <form className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <h3>Other Contact Options</h3>
        <div className='socials'>
        <a href="mailto:adolfnyerere@gmail.com" className={styles.socialIcon}>
        <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
        <a href="https://linkedin.com/in/adolf-nyerere" className={styles.socialIcon}>
        <FontAwesomeIcon icon={faLinkedin} /> <span> Linkedin</span>
        </a>
        <a href="https://github.com/yourusername" className={styles.socialIcon}>
        <FontAwesomeIcon icon={faGithub} /> <span> GitHub</span>
        </a>
        </div>
      </div>
    </div>
  </div>  
  </section>
  <footer className={styles.footer}>
        <p> Copyright © Nyerere {new Date().getFullYear()}</p>
      </footer>
    
  </div>
  );
}

export default Contact;
