import React from "react";
import logo2 from "../MyComponents/logo2.png"; // Adjust the path if needed

const LoginForm = () => {
  // Handler for the login button click

  return (
    <div style={styles.body}>
      <form style={styles.form}>
        <img src={logo2} alt="logo" style={styles.formLogo} />{" "}
        {/* Logo updated */}
        <div style={styles.formTitle}>
          <h4 style={styles.headerText}>SES SOLUTION</h4>
          <h4 style={styles.subHeaderText}>Login Here</h4>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="Email">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="name@example.com"
            id="Email"
            name="Email"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="Password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter Password"
            id="Password"
            name="Password"
            style={styles.input}
          />
        </div>
        <a
          type="button"
          style={styles.submitBtn}
          href="https://mis.phe.gob.pk:9021/"
        >
          Login
        </a>
      </form>
    </div>
  );
};

// Inline styling
const styles = {
  body: {
    margin: 0,
    padding: 0,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #4e73df, #1cc88a)", // Gradient background
  },
  form: {
    position: "relative",
    width: "400px",
    height: "450px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    boxSizing: "border-box",
    textAlign: "center",
  },
  formLogo: {
    position: "absolute",
    top: "10px",
    left: "10px",
    width: "50px", // Adjusted size
    height: "50px",
  },
  formTitle: {
    textAlign: "center",
    marginTop: "60px", // Ensure space for the logo
  },
  headerText: {
    marginBottom: "10px",
    fontSize: "20px",
    color: "#333333",
  },
  subHeaderText: {
    marginBottom: "20px",
    fontSize: "18px",
    color: "#555555",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    float: "left",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#333333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #dddddd",
    borderRadius: "5px",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  submitBtn: {
    backgroundColor: "#4e73df",
    border: "none",
    color: "#ffffff",
    padding: "10px 15px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "100%",
    marginTop: "20px",
  },
};

export default LoginForm;
