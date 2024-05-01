import React from "react";
const imageVibration = {
  transition: "transform 0.2s",
};
function Projects() {
  const handleMouseEnter = (e) => {
    e.target.style.transform = "translateX(-10px)";
  };
  const handleMouseLeave = (e) => {
    e.target.style.transform = "translateX(0)";
  };
  return (
    <div className="container Projects my-3">
      <h1 style={{ textAlign: "center", fontStyle: "italic" }}>Projects</h1>
      {/* /.row */}
      {/* START THE FEATURETTES */}
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            iNoteBook.{" "}
            <span className="text-body-secondary">React Based Project.</span>
          </h2>
          <div className="lead">
            <p>
              <strong>iNotebook</strong> is a cloud-based React application
              designed for secure note storage, featuring user-specific login
              access for efficient data management and accessibility.
            </p>
            <p>Technologies used:</p>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React.js</li>
              <li>Express</li>
              <li>ThunderClient</li>
            </ul>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/akshay124-pixel/INoteBook"
                target="_blank"
              >
                https://github.com/akshay124-pixel/INoteBook
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width={500}
            height={500}
            src="https://static.vecteezy.com/system/resources/previews/004/852/860/original/notes-notepad-notebook-memo-diary-paper-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg"
            alt="Placeholder: 500x500"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            style={imageVibration}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            News App.{" "}
            <span className="text-body-secondary">React Based Project.</span>
          </h2>
          <div className="lead">
            <p>
              Built a <strong>React.js</strong>-based news app that delivers
              real-time updates, personalized content, and user-friendly
              features for seamless news consumption and engagement.
            </p>
            <p>Technologies used:</p>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React.js</li>
            </ul>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/akshay124-pixel/News-App"
                target="_blank"
              >
                https://github.com/akshay124-pixel/News-App
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width={500}
            height={500}
            src="https://img.freepik.com/premium-vector/live-stream-symbol-icon-with-smartphone-emblem-broadcasting-online-tv-sport-news-radio-streaming-template-shows-movies-live-performances_212474-707.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1697241600&semt=ais"
            alt="Placeholder: 500x500"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            style={imageVibration}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            Portfolio.{" "}
            <span className="text-body-secondary">React Based Project.</span>
          </h2>
          <div className="lead">
            <p>
              I'm <strong>Akshay</strong>, and I've utilized{" "}
              <strong>React.js</strong> to create my one-of-a-kind portfolio.
              Dive into my skills, projects, and more, in an engaging and
              interactive exhibition of my work and ambitions.
            </p>

            <p>Technologies used:</p>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React.js</li>
            </ul>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/akshay124-pixel/Portfolio"
                target="_blank"
              >
                https://github.com/akshay124-pixel/Portfolio
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width={500}
            height={500}
            src="https://static.vecteezy.com/system/resources/previews/020/816/485/non_2x/portfolio-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg"
            alt="Placeholder: 500x500"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            style={imageVibration}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>

      <hr className="featurette-divider" />
      {/* /END THE FEATURETTES */}
    </div>
  );
}

export default Projects;
