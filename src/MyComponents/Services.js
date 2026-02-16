import React, { useState, useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Check for saved dark mode preference
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    // Save preference to localStorage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <title>Services - SES SOLUTION</title>
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

      <section
        className={`Services py-5 ${
          darkMode ? "bg-dark text-light" : "bg-light"
        }`}
        id="Our Services"
      >
        <div className="container">
          <div className="text-center my-5">
            <h1 data-aos="fade-up">
              Our <span className="text-info">Services</span>
            </h1>
            <hr className={`w-25 m-auto ${darkMode ? "border-light" : ""}`} />
          </div>

          {/* Web Development Section */}
          <div
            className={`my-5 p-4 rounded ${darkMode ? "bg-dark" : ""}`}
            data-aos="fade-down"
          >
            <h3
              className="text-center"
              style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
            >
              Web <span className="text-info">Development</span>
            </h3>
            <hr className={`w-25 m-auto ${darkMode ? "border-light" : ""}`} />
            <p className={darkMode ? "text-light" : ""}>
              Web development is the backbone of any online presence. At{" "}
              <b>SES Solution</b>, we specialize in designing and developing
              custom websites that are both functional and visually appealing.
              We focus on creating responsive and user-friendly websites that
              provide seamless experiences across all devices. Our team combines
              creativity with the latest technologies to build websites tailored
              to your business needs. Whether it's a simple landing page or a
              complex e-commerce platform, we deliver high-performance solutions
              that engage and convert visitors. Let us help you build a strong
              online presence that drives success.
            </p>
          </div>

          {/* Data Analytics Section */}
          <div
            className={`my-5 p-4 rounded ${darkMode ? "bg-dark" : ""}`}
            data-aos="fade-left"
          >
            <h3
              className="text-center"
              style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
            >
              Data <span className="text-info">Analytics</span>
            </h3>
            <hr className={`w-25 m-auto ${darkMode ? "border-light" : ""}`} />
            <p className={darkMode ? "text-light" : ""}>
              Data analytics is key to unlocking business potential. At{" "}
              <b>SES Solution</b>, we help businesses analyze and interpret
              complex data to uncover valuable insights. Our team uses advanced
              analytics techniques to turn raw data into actionable strategies
              that drive decision-making and improve performance. We focus on
              providing tailored solutions that help you understand market
              trends, customer behavior, and operational efficiency. With our
              data-driven approach, you can make informed decisions that lead to
              better outcomes. Let us help you harness the power of data to
              accelerate your business growth.
            </p>
          </div>

          {/* Digital Marketing Section */}
          <div
            className={`my-5 p-4 rounded ${darkMode ? "bg-dark" : ""}`}
            data-aos="fade-right"
          >
            <h3
              className="text-center"
              style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
            >
              Digital <span className="text-info">Marketing</span>
            </h3>
            <hr className={`w-25 m-auto ${darkMode ? "border-light" : ""}`} />
            <p className={darkMode ? "text-light" : ""}>Coming Soon!</p>
          </div>
        </div>
      </section>

      {/* Footer remains the same as it's already dark */}
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
                and more to shape a better future.
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
};

export default Services;
