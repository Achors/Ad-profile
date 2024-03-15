import emailjs from 'emailjs-com';
import './contact.css';
import styles from './HomePage.module.css';

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
    <>
    <section className="contact" id="contact">
      <h2>Get In Touch</h2>
      <div className="content-wrapper">
        <p>
          I am always interested in new opportunities and challenges. Feel free
          to reach out to me if you have any questions or would like to discuss
          potential projects.
        </p>
        <form className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <h3>Other Contact Options</h3>
        <ul>
          <li>
            <a href="mailto:youremail@example.com">Email</a>
          </li>
          {/* Add links for other platforms like LinkedIn, Github, etc. */}
          <li>
            <a href="https://www.linkedin.com/in/your-linkedin-profile/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </section>
    <footer className={styles.footer}>
        <p> Copyright © Nyerere {new Date().getFullYear()}</p>
      </footer>
  </>
  );
}

export default Contact;
