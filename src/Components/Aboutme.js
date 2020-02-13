/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

const Aboutme = () => {
  const image = {
    width: "400px",
    height: "400px",
    margin: "20px"
  };
  return (
    <div>
      <h3 className="animated fadeIn delay-1s" style={{ paddingLeft: "20px" }}>
        About me
      </h3>
      <div style={{ display: "flex" }}>
        <div>
          <img
            className="animated fadeIn delay-1s"
            src="https://res.cloudinary.com/dtnhtcwwg/image/upload/v1579149892/Hello%20my%20friend/bg_t04e96.jpg"
            alt="img"
            style={image}
          />
        </div>
        <div>
          <p
            className="animated fadeIn delay-1.2s"
            style={{ textAlign: "left" }}
          >
            My name is Alak Dam and I am a full stack developer. I enjoy taking
            complex problems and solve them. I also love the logic and structure
            of coding and always strive to write elegent and efficient code. I
            am a continuous learner and try to learn everyday something new.
          </p>

          <p className="animated fadeIn delay-1.2s">
            I am a full stack developer at The Shortcut. I am currently working
            on Shortcut's Database project and instruct new interns about the
            project structure and how it works.
          </p>
          <p className="animated fadeIn delay-1.2s">
            During my career, I have used <b>JavaScript</b>,{" "}
            <b>
              JavaScript framework-React js (state management Redux and Context
              API)
            </b>
            , <b> Node js</b>, <b>Express</b>, <b>AWS</b>, <b>Firebase</b>,{" "}
            <b>Heroku</b>, <b> Graphql</b>, <b>REST API</b>, <b>Bootstrap</b>.
            For database, I have used<b> PostgreSQL</b>, <b>Mongodb </b> and{" "}
            <b>Mysql</b> . I have little knowledge about <b>Python</b> and its
            framework <b>Django</b>.
          </p>

          <p className="animated fadeIn delay-1.2s">
            I am soon to be graduate as a full stack developer from Business
            College Helsinki. I uploaded my projects to{" "}
            <a href="https://github.com/alakdam07" target="_blank">
              Github
            </a>{" "}
            and this is my portfolio website{" "}
            <a href="http://www.alakdam.com/" target="_blank">
              alakdam.com
            </a>
          </p>

          <p className="animated fadeIn delay-1.2s">
            My hobbies are running, cooking and coding. if I am not coding you
            will find me running around Helsinki or cooking experimental food
            😋.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
