import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BiEnvelope } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';

const NavLinks = ({ handleNav }) => {
  return (
    <ul className="nav-links">
      <li onClick={handleNav}>
        <Link
          to="//twitter.com/_dylan_michael_"
          target="_blank"
          className="nav-link"
        >
          <FaTwitter />
        </Link>
      </li>
      <li onClick={handleNav}>
        <Link
          to="//www.linkedin.com/in/dylanmichael"
          target="_blank"
          className="nav-link"
        >
          <FaLinkedin />
        </Link>
      </li>
      <li onClick={handleNav}>
        <Link to="//github.com/woodmost" target="_blank" className="nav-link">
          <BsGithub />
        </Link>
      </li>
      <li onClick={handleNav}>
        <a
          href="mailto:moreandmore.dev1213@gmail.com"
          target="_blank"
          className="nav-link"
          rel="noreferrer"
        >
          <BiEnvelope />
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
