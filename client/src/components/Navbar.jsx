import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <nav className="navbar">
      <h2 className="brand"> Aldo </h2>
      <ul className="nav-list">
        <li className="nav-item">
        <Link to="/" onClick={() => scrollToSection('home-section')}>Home</Link>
        <div className="progress-bar"></div>
        </li>
        {/* <li className="nav-item">
        <Link to="/about" onClick={() => scrollToSection('about-section')}>About</Link>
        </li> */}
        <li className="nav-item">
        <Link to="/#projects" onClick={() => scrollToSection('projects-section')}>Projects</Link>
        </li>
        <li className="nav-item">
        <Link to="/contact" > Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;