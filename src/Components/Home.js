import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
function Home() {
  const linkStyle = {
    borderRadius: "20px", // To create a curved rectangle shape
    padding: "10px 20px", // Add padding to contain text
    transition: "background-color 0.3s", // Smooth transition effect
    backgroundColor: "transparent", // Default background color
  };
  const styles1 = {
    customFont1: {
      fontFamily: "'Acme', sans-serif",
    },
  };
  const hoverStyle = {
    backgroundColor: "lightblue",
    borderRadius: "20px",
    padding: "10px 20px",
  };

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const styles = {
    customFont: {
      fontFamily: "Young Serif, serif",
    },
  };

  return (
    <div>
      {/* Carousel Start */}
      <div
        id="myCarousel"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={0}
            className="active"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={1}
            className="active"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
            className="active"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src="https://gratisography.com/wp-content/uploads/2020/12/Walking-Hand-free-stock-vector-1170x780.png"
              className="d-block w-100"
              alt="Image Alt Text"
              height="600px"
            />
            <div className="carousel-caption text-start">
              <h1 style={styles.customFont}>About Me</h1>
              <p className="opacity-75" style={styles1.customFont1}>
                I'm Akshay, a web developer with a strong passion for creating
                beautiful and functional websites. With a keen eye for design
                and a love for coding, I'm dedicated to delivering high-quality
                web solutions.
              </p>
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://gratisography.com/wp-content/uploads/2020/12/Rhino-Party-free-stock-vector-1170x780.png"
              className="d-block w-100"
              alt="Image Alt Text"
              height="600px"
            />
            <div className="carousel-caption">
              <h1 style={styles.customFont}>Welcome to Akshay's Portfolio</h1>
              <p style={styles1.customFont1}>
                I'm a passionate and creative developer with a strong background
                in web development and design. My goal is to create beautiful,
                responsive, and user-friendly web applications.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://gratisography.com/wp-content/uploads/2021/03/gratisography-moose-stache-free-stock-vector-1170x780.jpg"
              className="d-block w-100"
              alt="Image Alt Text"
              height="600px"
            />
            <div className="carousel-caption text-end">
              <h1 style={styles.customFont}>Contact Me</h1>
              <p style={styles1.customFont1}>
                If you'd like to get in touch or discuss potential projects,
                feel free to reach out to me.
              </p>
              <p>
                <Link className="btn btn-lg btn-primary" to="/Contact">
                  Contact
                </Link>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Carousel end */}

      <div className="container my-5">
        {/* Three columns of text below the carousel */}
        <div className="row">
          <div className="col-lg-4">
            <div
              className="image-container1"
              style={{
                overflow: "hidden",
                borderRadius: "50%",
                transition: "transform 0.3s",
                width: "140px",
                height: "140px",
              }}
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <Link to="/Projects">
                <img
                  className="bd-placeholder-img rounded-circle"
                  width={140}
                  height={140}
                  src="https://cdn-icons-png.flaticon.com/512/906/906333.png"
                  alt="Placeholder"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  style={{
                    transition: "transform 0.3s",
                    transform: isHovered1 ? "scale(1.1)" : "scale(1)",
                  }}
                />
              </Link>
            </div>
            <h2 className="fw-normal">Projects</h2>
            <p>
              An innovative initiative designed to address specific goals, solve
              problems, and achieve desired outcomes through careful planning,
              execution, and collaboration.
            </p>
            <p>
              <Link className="btn btn-secondary" to="/Projects">
                View Projects Details»
              </Link>
            </p>
          </div>
          {/* /.col-lg-4 */}
          <div className="col-lg-4">
            <div
              className="image-container2"
              style={{
                overflow: "hidden",
                borderRadius: "50%",
                transition: "transform 0.3s",
                width: "140px",
                height: "140px",
              }}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <Link to="/Skills">
                <img
                  className="bd-placeholder-img rounded-circle"
                  width={140}
                  height={140}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQaRAQDkFSmZgIVqKUILckpP8n5i-anWkHzg&usqp=CAU"
                  alt="Placeholder"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  style={{
                    transition: "transform 0.3s",
                    transform: isHovered2 ? "scale(1.1)" : "scale(1)",
                  }}
                />
              </Link>
            </div>
            <h2 className="fw-normal">Skills</h2>
            <p>
              They vary from technical competencies to soft skills, crucial for
              personal and professional growth. Unlock your potential with
              skills.
            </p>
            <p>
              <Link className="btn btn-secondary" to="/Skills">
                View Skills details »
              </Link>
            </p>
          </div>
          {/* /.col-lg-4 */}
          <div className="col-lg-4">
            <div
              className="image-container3"
              style={{
                overflow: "hidden",
                borderRadius: "50%",
                transition: "transform 0.3s",
                width: "140px",
                height: "140px",
              }}
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <Link to="/Resume">
                <img
                  className="bd-placeholder-img rounded-circle"
                  width={140}
                  height={140}
                  src="data:image/png;base64,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"
                  alt="Placeholder"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  style={{
                    transition: "transform 0.3s",
                    transform: isHovered3 ? "scale(1.1)" : "scale(1)",
                  }}
                />
              </Link>
            </div>

            <h2 className="fw-normal">Resume</h2>
            <p>
              A resume is a concise document showcasing your qualifications,
              experience, and skills to potential employers.
            </p>
            <p>
              <Link className="btn btn-secondary" to="/resume">
                View Resume »
              </Link>
            </p>
          </div>
          {/* /.col-lg-4 */}
        </div>
        {/* Three columns end */}
      </div>
      {/* Footer */}
      <div className="container">
        <div className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                style={linkStyle}
                onMouseEnter={(e) =>
                  (e.target.style = { ...e.target.style, ...hoverStyle })
                }
                onMouseLeave={(e) =>
                  (e.target.style = { ...e.target.style, ...linkStyle })
                }
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                style={linkStyle}
                onMouseEnter={(e) =>
                  (e.target.style = { ...e.target.style, ...hoverStyle })
                }
                onMouseLeave={(e) =>
                  (e.target.style = { ...e.target.style, ...linkStyle })
                }
              >
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                style={linkStyle}
                onMouseEnter={(e) =>
                  (e.target.style = { ...e.target.style, ...hoverStyle })
                }
                onMouseLeave={(e) =>
                  (e.target.style = { ...e.target.style, ...linkStyle })
                }
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // footer end
  );
}

export default Home;
