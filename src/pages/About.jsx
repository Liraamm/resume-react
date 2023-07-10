import React from "react";
// import bg from "../assets/5159167.jpg";

const About = () => {
  return (
    <div
      className="bg"
      style={{
        backgroundImage:
          "url('https://www.wallmur.com/media/catalog/product/cache/9b371a0c2f7befd54013ca6ce932047f/s/s/ss1842746005-crop.jpg')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 style={{ color: "#2b1210", fontWeight: "bolder" }}>My stacks:</h2>
      <div className="aboutMe">
        <div className="stacks">
          <ul>
            Backend:
            <li>Python</li>
            <li>Django</li>
            <li>Rest-framework</li>
            <li>PostgreSQL</li>
            <li>Parsing</li>
            <li>Linux</li>
            <li>ORM</li>
          </ul>
        </div>
        <div className="stacks">
          <ul>
            Frontend:
            <li>JavaScript</li>
            <li>React</li>
            <li>NativeJS</li>
            <li>HTML/CSS</li>
            <li>GitHub</li>
            <li>React-router</li>
            <li>CRUD</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
