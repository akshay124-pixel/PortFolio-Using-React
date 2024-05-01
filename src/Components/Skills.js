import React from "react";
const imageVibration = {
  transition: "transform 0.2s",
};
function Skills() {
  const handleMouseEnter = (e) => {
    e.target.style.transform = "translateX(-10px)";
  };
  const handleMouseLeave = (e) => {
    e.target.style.transform = "translateX(0)";
  };
  return (
    <div className="Background my-3">
      <h1 style={{ textAlign: "center", fontStyle: "italic" }}>Skills</h1>
      <div className="container Skills ">
        {/* /.row */}
        {/* START THE FEATURETTES */}
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">React.JS</h2>
            <p className="lead">
              React.js is my forte in front-end development. With a deep
              understanding of this cutting-edge library, I create highly
              dynamic and interactive user interfaces. Leveraging its
              component-based architecture, I build reusable, maintainable, and
              efficient UI components, ensuring seamless user experiences. I
              harness the power of React's virtual DOM for optimal performance
              and real-time updates. My expertise in state management, routing,
              and hooks allows me to craft responsive, user-centric web
              applications, making React.js a cornerstone of my development
              skill set.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width={500}
              height={500}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiWWW-rGbwana_jCf87R1wB5Sh8Ndx5TM9w&usqp=CAU"
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
            <h2 className="featurette-heading fw-normal lh-1">HTML</h2>
            <p className="lead">
              HTML is the fundamental building block of web development, and I
              am well-versed in its intricacies. With a keen eye for semantic
              markup, I craft clean, structured, and accessible web pages. My
              proficiency extends to HTML5, enabling the integration of
              multimedia and advanced elements. I ensure compatibility across
              various browsers and platforms, adhering to W3C standards. My HTML
              skills lay the foundation for creating user-friendly,
              SEO-optimized, and responsive web experiences that engage and
              captivate audiences.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width={500}
              height={500}
              src="data:image/jpeg;base64,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"
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
            <h2 className="featurette-heading fw-normal lh-1">CSS</h2>
            <p className="lead">
              CSS is where I transform web content into visually appealing,
              responsive designs. Proficient in both CSS2 and CSS3, I have a
              sharp eye for detail, crafting pixel-perfect layouts and
              eye-catching styles. My skills encompass the latest in CSS,
              including Flexbox and Grid for seamless positioning and fluid
              responsiveness. I prioritize clean and maintainable code,
              resulting in cross-browser compatibility and faster load times. My
              expertise in CSS guarantees that I can create aesthetically
              pleasing, user-friendly websites that leave a lasting impression.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width={500}
              height={500}
              src="https://focusvocationalschool.com/wp-content/uploads/2020/12/css.png"
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

        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">JavaScript</h2>
            <p className="lead">
              JavaScript is my stronghold, allowing me to bring life and
              interactivity to web applications. Proficient in both vanilla
              JavaScript and modern ES6, I leverage its capabilities to build
              dynamic, responsive, and feature-rich user interfaces. My
              expertise spans asynchronous programming, event handling, and DOM
              manipulation, enabling seamless user experiences. I'm well-versed
              in various libraries and frameworks, such as React.js and Vue.js,
              harnessing their power to create robust and engaging web
              solutions. My JavaScript skills are integral to my ability to
              craft cutting-edge web applications.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width={500}
              height={500}
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
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
            <h2 className="featurette-heading fw-normal lh-1">Python</h2>
            <p className="lead">
              Python is my programming language of choice, providing a versatile
              and powerful foundation for a wide range of applications. With a
              deep understanding of Python's syntax and libraries, I develop
              efficient and scalable solutions. My skills encompass web
              development using frameworks like Django and Flask, data analysis
              with Pandas, and machine learning with libraries such as
              TensorFlow and Scikit-learn. This proficiency allows me to craft
              robust, high-performance software while ensuring code readability
              and maintainability. Python is my tool for turning complex
              problems into elegant, functional solutions.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1649180556628-9ba704115795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80"
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
            <h2 className="featurette-heading fw-normal lh-1">MySQL</h2>
            <p className="lead">
              MySQL is my database management expertise, crucial for building
              data-driven applications. Proficient in query optimization, data
              modeling, and database administration, I ensure efficient data
              storage and retrieval. My skills include designing normalized
              schemas, managing indexing, and enhancing data security. I excel
              in writing complex SQL queries and leveraging stored procedures
              for optimal database performance. With my MySQL skills, I enable
              seamless data-driven functionalities, ensuring that applications
              run smoothly and securely while handling vast amounts of
              structured data.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1662026911591-335639b11db6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80"
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
    </div>
  );
}
export default Skills;
