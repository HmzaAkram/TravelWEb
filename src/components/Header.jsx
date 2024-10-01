import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './dropdown.module.css'; // Import your CSS module
import logo from '../../public/assets/images/logo.png'; // Corrected path to logo

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.navbarWrapper}>
      <Navbar expand="lg" className={`navbar-transparent ${scrolled ? styles.navbarScrolled : ''}`} fixed="top">
        <Container>
          <Navbar.Brand href="/" className={styles.brand}>
            <img src={logo} alt="Logo" className={styles.logo} /> {/* Using img tag for logo */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/" className={styles.navLink}>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Accommodations" className={styles.navLink}>Accommodation</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Destinations" className={styles.navLink}>Destinations</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Transport" className={styles.navLink}>Transport</Link>
              </Nav.Link>
              <NavDropdown title={<span style={{ color: "white" }}>Packages</span>} id="basic-nav-dropdown" className={styles.navLink}>
                <NavDropdown.Item>
                  <Link to="/family" className={styles.dropdownLink}>Family Package</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/Adventure" className={styles.dropdownLink}>Adventure Package</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/Luxury" className={styles.dropdownLink}>Luxury Package</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/About" className={styles.navLink}>About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Contact" className={styles.navLink}>Contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
