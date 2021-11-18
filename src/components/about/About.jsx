import './About.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

const About = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Designer'],
    });
  }, []);

  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Ömür</h1>
            <h3>
              Freelance <span ref={textRef}></span>
            </h3>
          </div>
        </div>
        <a href="#portfolio">
          <img width="30px" height="30px"src="assets/down.png" alt="Down arrow" />
        </a>
      </div>
    </div>
  );
};

export default About;
