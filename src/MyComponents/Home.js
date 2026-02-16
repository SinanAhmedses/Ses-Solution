import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaMoon,
  FaSun,
} from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <title>Home - SES SOLUTION</title>

      <header id="Home">
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 border-bottom fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand fs-2" to="/">
              SES <span className="text-info">SOLUTION</span>
            </Link>

            <button
              className="btn text-info me-3 fs-5"
              onClick={toggleDarkMode}
              title="Toggle Dark Mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-center">
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sdi">
                    SDI
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ourteam">
                    OUR TEAM
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/services"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SERVICES
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/services">
                        WEB DEVELOPMENT
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services">
                        DATA ANALYTICS
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services">
                        DIGITAL MARKETING
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contactus">
                    CONTACT US
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    LOG IN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to SES SOLUTION</h1>
          <p>
            SES SOLUTION provides students with hands-on experience and
            real-world projects to foster their career growth and success.
          </p>
          <Link to="/about" title="Learn more about SES SOLUTION">
            Learn More
          </Link>
        </div>
      </section>

      <footer
        className="text-white pt-5"
        style={{ backgroundColor: "#0d1b2a" }}
      >
        <div className="container text-center text-md-start">
          <div className="row text-center text-md-start">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold text-info">SES SOLUTION</h5>
              <hr
                className="mb-3 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#17a2b8",
                  height: "2px",
                }}
              />
              <p className="text-white-50">
                Empowering youth with skills in Web Development, Data Analytics,
                and more. A project of Seerat Educational System.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold text-info">Links</h5>
              <hr
                className="mb-3 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#17a2b8",
                  height: "2px",
                }}
              />
              <p>
                <Link
                  to="/about"
                  className="text-white-50 text-decoration-none"
                >
                  About Us
                </Link>
              </p>
              <p>
                <Link to="/sdi" className="text-white-50 text-decoration-none">
                  SDI
                </Link>
              </p>
              <p>
                <Link
                  to="/services"
                  className="text-white-50 text-decoration-none"
                >
                  Services
                </Link>
              </p>
              <p>
                <Link
                  to="/contactus"
                  className="text-white-50 text-decoration-none"
                >
                  Contact
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold text-info">Contact</h5>
              <hr
                className="mb-3 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#17a2b8",
                  height: "2px",
                }}
              />
              <p className="text-white-50">
                <FaHome className="me-2 text-info" /> Quetta, Pakistan
              </p>
              <p className="text-white-50">
                <FaEnvelope className="me-2 text-info" /> info@seerat.education
              </p>
              <p className="text-white-50">
                <FaPhone className="me-2 text-info" /> +92-311-1123-0007
              </p>
            </div>

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold text-info">Follow Us</h5>
              <hr
                className="mb-3 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#17a2b8",
                  height: "2px",
                }}
              />
              <div>
                <a
                  href="https://www.facebook.com/seerat.education"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white-50 fs-5 me-4 hover-text-info"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/company/seerat-educational-system/posts/?feedView=all"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white-50 fs-5 me-4 hover-text-info"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/seerat_educational_system_/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white-50 fs-5 me-4 hover-text-info"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div
            className="text-center p-3 mt-4"
            style={{ borderTop: "1px solid #17a2b8" }}
          >
            © All Rights Reserved 2025{" "}
            <span className="text-info">SES SOLUTION</span> | Developed by Sinan
            Ahmed
            <br />
            <a
              href="https://seerat.education/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-underline text-info"
            >
              Seerat Educational System
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
