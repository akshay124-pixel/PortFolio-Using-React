import React from "react";

function Contact() {
  const containerStyles = {
    paddingBottom: "20%",
    paddingTop: "17%",
  };
  const containerStyles1 = {
    paddingBottom: "20%",
    paddingTop: "7%",
  };
  const styles = {
    customFont: {
      fontFamily: "Young Serif, serif",
    },
  };
  const styles1 = {
    customFont1: {
      fontFamily: "'Acme', sans-serif",
    },
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col" style={containerStyles}>
          <h1 style={styles.customFont}>Contact Me</h1>
          <p style={styles1.customFont1}>
            My name is Akshay Pratap Singh. You can reach me at the following
            contact details:
          </p>
          <ul>
            <li>
              <strong>Phone Number:</strong> 8755380144
            </li>
            <li>
              <strong>Email:</strong> mr.akshaythakur124@gmail.com
            </li>
            <li>
              <strong>WhatsApp Number:</strong> 8006120310
            </li>
          </ul>
        </div>

        {/* Divide */}
        <div className="col" style={containerStyles1}>
          <img
            src="https://img.freepik.com/premium-vector/business-teamwork-concept-people-working-table-meeting-co-working-office-illustration_138260-635.jpg?w=740"
            className="d-block w-100"
            alt="Error"
            height="400px"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
