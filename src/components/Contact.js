'use client';

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';
import { motion } from 'framer-motion';
import { BiDownload } from 'react-icons/bi';

const Contact = () => {
  const fade = {
    opacity: 1,
    transition: {
      duration: 1.5
    }
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

  useEffect(() => {
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement('script'),
        s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      //s1.src = process.env.NEXT_PUBLIC_TAWK_TO_ID ?? '';
      s1.src = 'https://embed.tawk.to/664497f09a809f19fb31219a/1httv314n';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode?.insertBefore(s1, s0);
      console.log(process.env.NEXT_PUBLIC_TAWK_TO_ID);
    })();
  });
  const verticalLeft = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="container">
          <motion.div
            className="heading"
            initial={{ opacity: 0 }}
            whileInView={fade}
            viewport={{ once: true }}
          >
            <p className="heading-sub-text">Hire Me</p>
            <p className="heading-text">Get in Touch</p>
          </motion.div>
          <div className="contact-box">
            <motion.div
              className="left-box"
              initial={{ opacity: 0, y: '-50px' }}
              whileInView={verticalLeft}
            >
              <div className="contact-heading">
                <p>
                  I'm passionate about leveraging machine learning, deep
                  learning, and AI-driven solutions to solve complex problems
                  and drive innovation. Currently, I'm seeking new opportunities
                  to expand my expertise and take on fresh challenges in the AI
                  and data science world.
                </p>
              </div>
              <div className="contact-hello">
                <p>Say Hello</p>
                <Link
                  className="hello-links"
                  to="//web.telegram.org/k/#@geek1213"
                  target="_blank"
                >
                  Tele : @geek1213
                </Link>
                <Link
                  className="hello-links"
                  to="https://dylan-dev.vercel.app/"
                  target="_blank"
                >
                  Phone : (901) 352-1161
                </Link>
                <a
                  className="hello-links"
                  href="mailto:moreandmore.dev1213@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gmail : moreandmore.dev1213@gmail.com
                </a>
                <p className="text-gray-300 text-center text-sm">
                  Created with ❤️ By Dylan
                </p>
              </div>
            </motion.div>
            <motion.div
              className="right-box"
              initial={{ opacity: 0, y: '50px' }}
              whileInView={verticalLeft}
            >
              <form
                name="contact-form"
                method="POST"
                data-netlify="true"
                action="POST"
              >
                <input type="hidden" name="form-name" value="contact-form" />
                <div className="form-top">
                  <div className="name">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="email">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="form-mid">
                  <div className="message">
                    <label htmlFor="message">Your message</label>
                    <textarea
                      type="text"
                      name="message"
                      id="message"
                      placeholder="Hi, I think I need you to work on this particular product. Reach out as soon as you can"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="form-btn">
                  <button type="submit" className="hero-contact">
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
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
    </>
  );
};

export default Contact;
