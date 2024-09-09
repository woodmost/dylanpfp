import React from 'react';
import '../../styles/Navbar.css';
import { FaHome, FaLaptop } from 'react-icons/fa';
import {
  BiBookContent,
  BiServer,
  BiEnvelope,
  BiTimer,
  BiBook
} from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-scroll';
import ProfileImg from '../../images/profile_me.jpg';
import NavLinks from './NavLinks';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const navVariants = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.5,
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

const Navbar = ({ nav, handleNav }) => {
  return (
    <AnimatePresence>
      <motion.nav
        initial={{ width: '0' }}
        animate={
          nav ? { width: '300px' } : { width: '0', transition: { delay: 1 } }
        }
        className={nav ? 'navbar active' : 'navbar'}
      >
        <motion.div
          initial="hidden"
          whileInView={nav ? 'visible' : 'hidden'}
          variants={navVariants}
          exit="hidden"
          className="navbar-container"
        >
          <div className="top-details">
            <div className="img__cover">
              <img src={ProfileImg} alt="Main" className="profile-pic-small" />
            </div>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={handleNav}
              to="home"
              className="profile-name"
            >
              Dylan Michael
            </Link>
            <NavLinks handleNav={handleNav} />
          </div>
          <ul className="mid-details">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="home"
              className="mid-links"
            >
              <FaHome className="mid-icon" />
              <li className="mid-link" onClick={handleNav}>
                Home
              </li>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="about"
              className="mid-links"
            >
              <FiUser className="mid-icon" />
              <li className="mid-link" onClick={handleNav}>
                About
              </li>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="skills"
              className="mid-links"
            >
              <FaLaptop className="mid-icon" />
              <li className="mid-link" onClick={handleNav}>
                Skills
              </li>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="services"
              className="mid-links"
            >
              <BiServer className="mid-icon" />
              <li className="mid-link" onClick={handleNav}>
                Services
              </li>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="works"
              className="mid-links"
            >
              <BiBookContent className="mid-icon" />
              <li className="mid-link" onClick={handleNav}>
                Works
              </li>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="timeline"
              className="mid-links"
            >
              <BiTimer className="mid-icon" />
              <li className="mid-link" onClick={handleNav}>
                Timeline
              </li>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="contact"
              className="mid-links"
            >
              <BiEnvelope className="mid-icon" />
              <li className="mid-link" onClick={handleNav}>
                Contact
              </li>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="contact"
              className="mid-links"
            >
              <BiBook className="mid-icon" />
              <li className="mid-link" onClick={handleNav}>
                Resume
              </li>
            </Link>
          </ul>
          <div className="copy">
            <small className="copyright">
              © Copyright ©2022 <br /> All rights reserved |
            </small>
          </div>
        </motion.div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
