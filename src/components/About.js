import React from 'react';
import '../styles/About.css';
import { BiDownload } from 'react-icons/bi';
import { motion } from 'framer-motion';
import ProfileImg from '../images/profile_me.jpg';

const About = () => {
  const horizontal = {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 2, bounce: 0.3 }
  };
  const contactVariants = {
    hidden: {
      opacity: 0,
      x: '-50%'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.4
      }
    }
  };

  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={horizontal}
            viewport={{ once: true }}
            className="heading"
          >
            <p className="heading-sub-text">Who I am</p>
            <p className="heading-text">About Me</p>
          </motion.div>
          <div className="split-about">
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              whileInView={horizontal}
              className="about-content"
            >
              <p>
                I am Dylan Michael, passionate about harnessing data to create
                impactful solutions. My journey into the world of data science
                and machine learning began in 2017 when I tackled my first
                project involving predictive analytics. This experience ignited
                my interest in understanding how data-driven insights can solve
                complex problems.
              </p>
              <br />
              <p>
                {' '}
                I've had the privilege of working alongside skilled
                professionals, which has significantly sharpened my analytical
                abilities and deepened my knowledge of machine learning
                algorithms. Today, my focus is on developing accessible and
                inclusive data products, designing robust machine learning
                models, and delivering actionable insights that drive real-world
                impact. With my experience, I am well-equipped to tackle
                challenges and turn data into valuable assets.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: '50', opacity: 0 }}
              whileInView={horizontal}
              className="about-img"
            >
              <img src={ProfileImg} alt="Profile" />
            </motion.div>
          </div>
        </div>
        <div className="resume-download">
          <motion.span
            variants={contactVariants}
            initial="hidden"
            whileInView="visible"
          >
            <a href="/aaa" download="Dylan-MichaelCV" className="hero-contact">
              Download CV <BiDownload className="cv-icon" />
            </a>
          </motion.span>
        </div>
      </div>
    </>
  );
};

export default About;
