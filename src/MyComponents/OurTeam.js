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
import AOS from "aos";
import "aos/dist/aos.css";

const OurTeam = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleLinkedInClick = (e, linkedin) => {
    if (linkedin === "#" || !linkedin.startsWith("http")) {
      e.preventDefault();
      alert("This member's LinkedIn profile has not been created yet!");
    }
  };

  return (
    <>
      <title>Our Team - SES SOLUTION</title>

      {/* Navbar */}
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
      <br />
      <br />

      <section className="team my-5 text-center" id="OurTeam">
        <div className="container">
          <div className="text-center my-5">
            <h1 data-aos="fade-up">
              Our <span className="text-info">Team</span>
            </h1>
            <hr className="w-25 m-auto" />
          </div>

          <div className="row justify-content-center" data-aos="fade-down">
            {[
              {
                name: "Sinan Ahmed",
                role: "Web Developer at SES Solution of SDI-Batch-1",
                linkedin: "https://www.linkedin.com/in/sinan-ahmed-92068333a/",
              },
              {
                name: "Abbas Khan Kakar",
                role: "Data Analyst at SES Solution of SDI-Batch-1",
                linkedin: "#",
              },
              {
                name: "Ayaz Khan Kakar",
                role: "Web Developer at SES Solution of SDI-Batch-1",
                linkedin:
                  "https://www.linkedin.com/in/muhammadayaz-khankakar-a6ba12347/",
              },
              {
                name: "Ayesha Noor Baloch",
                role: "Data Analyst at SES Solution of SDI-Batch-1",
                linkedin:
                  "https://www.linkedin.com/in/ayesha-noor-baloch-35a7b82b4/",
              },
              {
                name: "Ramla Mubashir",
                role: "Data Analyst at SES Solution of SDI-Batch-1",
                linkedin:
                  "https://www.linkedin.com/in/ramlah-mubashir-b2a61b33b/",
              },
              {
                name: "Hania Osama",
                role: "Data Analyst at SES Solution of SDI-Batch-2",
                linkedin: "#",
              },
              {
                name: "Muhammad Ahmed",
                role: "Web Developer at SES Solution of SDI-Batch-2",
                linkedin: "#",
              },
              {
                name: "Areeba Osama",
                role: "Data Analyst at SES Solution of SDI-Batch-2",
                linkedin: "https://www.linkedin.com/in/areeba-osama-9903bb33b/",
              },
              {
                name: "Zainab Mubashir",
                role: "Data Analyst at SES Solution of SDI-Batch-2",
                linkedin:
                  "https://www.linkedin.com/in/zainab-mubashir-b039a4345/",
              },
              {
                name: "Bibi Faiza",
                role: "Data Analyst at SES Solution of SDI-Batch-2",
                linkedin: "https://www.linkedin.com/in/faiza-khan-174a40286/",
              },
              {
                name: "Laiba Bibi",
                role: "Data Analyst at SES Solution of SDI-Batch-2",
                linkedin: "#",
              },
              {
                name: "Roma Wali Khan",
                role: "Web Developer at SES Solution of SDI-Batch-2",
                linkedin:
                  "https://www.linkedin.com/in/roma-wali-khan-051770341/",
              },
            ].map((member, index) => (
              <div
                className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4"
                key={index}
              >
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text">{member.role}</p>
                    <a
                      href={member.linkedin}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleLinkedInClick(e, member.linkedin)}
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer
        className="text-white pt-5"
        style={{ backgroundColor: "#0d1b2a" }}
      >
        <div className="container text-center text-md-start">
          <div className="row text-center text-md-start">
            {/* Column 1: Logo and Tagline */}
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

            {/* Column 2: Useful Links */}
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

            {/* Column 3: Contact Info */}
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

            {/* Column 4: Social Links */}
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
            © All Righs Reserved 2025{" "}
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

export default OurTeam;
