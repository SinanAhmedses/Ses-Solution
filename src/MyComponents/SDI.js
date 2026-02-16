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

const Sdi = () => {
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

  return (
    <>
      <title>SDI - SES SOLUTION</title>

      {/* Navbar */}
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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

      {/* SDI Section */}
      <section className="SDI my-5 pt-5" id="SDI">
        <div className="container">
          <div className="text-center my-5">
            <h1 data-aos="fade-up">
              Skill Development <span className="text-info">Initiative</span>
            </h1>
            <hr className="w-25 m-auto" />
          </div>

          <div>
            <h2 data-aos="fade-left">
              Some Info About <span className="text-info">SDI</span>
            </h2>
            <p data-aos="fade-right">
              Skill Development Initiative (SDI) at SES SOLUTION empowers
              individuals with cutting-edge skills like Web Development and Data
              Analytics in a collaborative, growth-focused environment.
            </p>
            <p data-aos="fade-down">
              <strong>Web Development:</strong> Build responsive, modern
              websites.
              <br />
              <strong>Data Analytics:</strong> Extract insights for smarter
              decisions.
            </p>
            <p data-aos="fade-up">
              A Digital Marketing course is also launching soon to meet the
              rising demand in the digital economy.
            </p>
            <p data-aos="fade-left">
              SDI provides real-world training, projects, and mentorship from
              SES SOLUTION's professionals—laying the groundwork for success.
            </p>
          </div>
        </div>

        {/* Accordion for Batches */}
        <div className="accordion" id="accordionExample" data-aos="fade-left">
          {[1, 2, 3].map((batch) => (
            <div className="accordion-item" key={batch}>
              <h2 className="accordion-header" id={`heading${batch}`}>
                <button
                  className={`accordion-button${
                    batch !== 1 ? " collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${batch}`}
                  aria-expanded={batch === 1}
                >
                  SDI Batch {batch}
                </button>
              </h2>
              <div
                id={`collapse${batch}`}
                className={`accordion-collapse collapse${
                  batch === 1 ? " show" : ""
                }`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {batch === 1 && (
                    <p>
                      Batch 1, our pioneers, contribute ideas that help shape{" "}
                      <strong>SES SOLUTION</strong> and lay the foundation for
                      future success. The most senior and first batch of SES
                      SOLUTION
                    </p>
                  )}
                  {batch === 2 && (
                    <p>
                      Batch 2 builds on Batch 1's legacy, bringing in fresh
                      perspectives and growing into valuable contributors. The
                      second batch of SES SOLUTION
                    </p>
                  )}
                  {batch === 3 && (
                    <p>
                      Soon launching, Batch 3 will join to carry forward
                      innovation and support SES SOLUTION's future projects.
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-white pt-5"
        style={{ backgroundColor: "#0d1b2a" }}
      >
        <div className="container text-center text-md-start">
          <div className="row">
            {/* Logo */}
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold text-info">SES SOLUTION</h5>
              <hr
                className="mb-3"
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

            {/* Links */}
            <div className="col-md-2 mb-4">
              <h5 className="fw-bold text-info">Links</h5>
              <hr
                className="mb-3"
                style={{
                  width: "60px",
                  backgroundColor: "#17a2b8",
                  height: "2px",
                }}
              />
              {["about", "sdi", "services", "contactus"].map((link) => (
                <p key={link}>
                  <Link
                    to={`/${link}`}
                    className="text-white-50 text-decoration-none"
                  >
                    {link.charAt(0).toUpperCase() +
                      link.slice(1).replace("us", " Us")}
                  </Link>
                </p>
              ))}
            </div>

            {/* Contact */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold text-info">Contact</h5>
              <hr
                className="mb-3"
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

            {/* Social */}
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold text-info">Follow Us</h5>
              <hr
                className="mb-3"
                style={{
                  width: "60px",
                  backgroundColor: "#17a2b8",
                  height: "2px",
                }}
              />
              {[
                {
                  icon: <FaFacebookF />,
                  link: "https://www.facebook.com/seerat.education",
                },
                {
                  icon: <FaLinkedinIn />,
                  link: "https://www.linkedin.com/company/seerat-educational-system/posts/?feedView=all",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/seerat_educational_system_/",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white-50 fs-5 me-4 hover-text-info"
                >
                  {s.icon}
                </a>
              ))}
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

export default Sdi;
