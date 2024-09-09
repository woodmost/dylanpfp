import React from 'react';
import '../styles/Works.css';
import '../styles/Project.css';
import { IoOpenOutline } from 'react-icons/io5';
import { FiFolder, FiGithub } from 'react-icons/fi';
import { WorkData } from '../data/WorkData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Neural_model from './img/neural_model.png';
import Neural_model2 from './img/neural_model.png';
import NN_experiments from './img/nn_experiments.png';
import Collage_small from './img/collage_small.jpg';
import Gameengine_small from './img/gameengine_small.png';
import Raycast from './img/raycast_small_gray.png';
import Seamcarver from './img/seamcarver_small.png';
import Objecttracker from './img/objecttracker-small.png';
import Audioanalyzer from './img/audioanalyzer_small.png';
import Code_blurred from './img/code_blurred.jpg';
import Compiler_small from './img/compiler_small.png';
import Mc1_System from './img/mcl_system.png';
import Swiper from './img/swiper.png';
import Financial from './img/financial_graph.png';
import Webimage from './img/web.jpg';

const Works = () => {
  const fade = {
    opacity: 1,
    transition: {
      duration: 1.4
    }
  };

  return (
    <>
      <div className="works" id="works">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={fade}
            viewport={{ once: true }}
            className="heading"
          >
            <p className="heading-sub-text">I build real value</p>
            <p className="heading-text">Works</p>
          </motion.div>

          <motion.div
            className="works-box"
            initial={{ opacity: 0 }}
            whileInView={fade}
          >
            {WorkData.map((w, index) => {
              return (
                <div key={index}>
                  <Link to={w.site} target="_blank" className="work-link-group">
                    <div className="works-card">
                      <div className="works-container">
                        <div className="top-work">
                          <FiFolder className="work-folder" />
                          <div className="right">
                            {w.gitlink && (
                              <Link
                                className="work-git"
                                to={w.gitlink}
                                target="_blank"
                              >
                                <FiGithub />
                              </Link>
                            )}
                            <Link
                              className="work-link"
                              to={w.site}
                              target="_blank"
                            >
                              <IoOpenOutline />
                            </Link>
                          </div>
                        </div>
                        <div className="mid-work">
                          <p className="work-title">{w.title}</p>
                          <p className="work-desc">{w.desc}</p>
                        </div>
                        <div className="bottom-work">
                          {w.tech.map((e, index) => {
                            return <small key={index}>{e}</small>;
                          })}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </motion.div>
        </div>
        <div class="row no-gutters">
          <div class="col-lg-4">
            <a
              class="portfolio-item"
              data-toggle="modal"
              href="#portfolioModal1"
            >
              <span class="caption">
                <span class="caption-content">
                  <h4>Neural Model Library</h4>
                  <p class="mb-0">
                    Simple creation of feed forward and recurrent neural models
                    in TensorFlow.
                  </p>
                </span>
              </span>
              <img class="img-fluid portfolio-img" src={Neural_model} alt="" />
            </a>
          </div>
          <div class="col-lg-4">
            <a
              class="portfolio-item"
              data-toggle="modal"
              href="#portfolioModal2"
            >
              <span class="caption">
                <span class="caption-content">
                  <h4>NN Trainer Library</h4>
                  <p class="mb-0">
                    A library for automatic supervised training of neural
                    models.
                  </p>
                </span>
              </span>
              <img class="img-fluid portfolio-img" src={Neural_model2} alt="" />
            </a>
          </div>
          <div class="col-lg-4">
            <a
              class="portfolio-item"
              data-toggle="modal"
              href="#portfolioModal3"
            >
              <span class="caption">
                <span class="caption-content">
                  <h4>NN Experiments</h4>
                  <p class="mb-0">
                    A collection of various neural network models in TensorFlow.
                  </p>
                </span>
              </span>
              <img
                class="img-fluid portfolio-img"
                src={NN_experiments}
                alt=""
              />
            </a>
          </div>
          <div class="col-lg-4">
            <a
              class="portfolio-item"
              data-toggle="modal"
              href="#portfolioModal4"
            >
              <span class="caption">
                <span class="caption-content">
                  <h4>Collage Generator</h4>
                  <p class="mb-0">Intelligently draws a message with images.</p>
                </span>
              </span>
              <img class="img-fluid portfolio-img" src={Collage_small} alt="" />
            </a>
          </div>
          <div class="col-lg-4">
            <a
              class="portfolio-item"
              data-toggle="modal"
              href="#portfolioModal5"
            >
              <span class="caption">
                <span class="caption-content">
                  <h4>OpenGL Game Engine</h4>
                  <p class="mb-0">
                    A custom game engine including dynamic lighting, terrain,
                    and static and dynamic objects.
                  </p>
                </span>
              </span>
              <img
                class="img-fluid portfolio-img"
                height="250"
                src={Gameengine_small}
                alt=""
              />
            </a>
          </div>
          <div class="col-lg-4">
            <a
              class="portfolio-item"
              data-toggle="modal"
              href="#portfolioModal6"
            >
              <span class="caption">
                <span class="caption-content">
                  <h4>Ray Casting Simulation</h4>
                  <p class="mb-0">
                    A simulation using AI techniques such as ray casting,
                    spatial mapping, Bayesian filtering, pathfinding, etc.
                  </p>
                </span>
              </span>
              <img class="img-fluid portfolio-img" src={Raycast} alt="" />
            </a>
          </div>
          <div class="col-lg-4">
            <a
              class="portfolio-item"
              data-toggle="modal"
              href="#portfolioModal7"
            >
              <span class="caption">
                <span class="caption-content">
                  <h4>Seam Carver</h4>
                  <p class="mb-0">
                    An application for content-aware image resizing.
                  </p>
                </span>
              </span>
              <img class="img-fluid portfolio-img" src={Seamcarver} alt="" />
            </a>
          </div>
          <div class="col-lg-4">
            <a
              class="portfolio-item"
              data-toggle="modal"
              href="#portfolioModal8"
            >
              <span class="caption">
                <span class="caption-content">
                  <h4>Object Tracker</h4>
                  <p class="mb-0">An object recognition and tracking tool.</p>
                </span>
              </span>
              <img class="img-fluid portfolio-img" src={Objecttracker} alt="" />
            </a>
          </div>
          <div class="col-lg-4">
            <a
              class="portfolio-item"
              data-toggle="modal"
              href="#portfolioModal9"
            >
              <span class="caption">
                <span class="caption-content">
                  <h4>Audio Analyzer</h4>
                  <p class="mb-0">
                    An audio analyzer and controller for an Arduino-driven LED
                    strip.
                  </p>
                </span>
              </span>
              <img class="img-fluid portfolio-img" src={Audioanalyzer} alt="" />
            </a>
          </div>
          <div class="col-lg-4">
            <a
              class="portfolio-item"
              data-toggle="modal"
              href="#portfolioModal10"
            >
              <span class="caption">
                <span class="caption-content">
                  <h4>Request</h4>
                  <p class="mb-0">
                    A library used for sending HTTP/HTTPS requests with simple
                    data management.
                  </p>
                </span>
              </span>
              <img class="img-fluid portfolio-img" src={Code_blurred} alt="" />
            </a>
          </div>
          <div class="col-lg-4">
            <a
              class="portfolio-item"
              data-toggle="modal"
              href="#portfolioModal11"
            >
              <span class="caption">
                <span class="caption-content">
                  <h4>Compiler/Transpiler</h4>
                  <p class="mb-0">
                    Parses and compiles a custom programming language into C++.
                  </p>
                </span>
              </span>
              <img
                class="img-fluid portfolio-img"
                src={Compiler_small}
                alt=""
              />
            </a>
          </div>
          <div class="col-lg-4">
            <a
              class="portfolio-item"
              data-toggle="modal"
              href="#portfolioModal12"
            >
              <span class="caption">
                <span class="caption-content">
                  <h4>Monte Carlo Localization Library</h4>
                  <p class="mb-0">
                    A library for n-dimensional Monte Carlo localization.
                  </p>
                </span>
              </span>
              <img class="img-fluid portfolio-img" src={Mc1_System} alt="" />
            </a>
          </div>
          <div class="col-lg-4">
            <a
              class="portfolio-item"
              data-toggle="modal"
              href="#portfolioModal13"
            >
              <span class="caption">
                <span class="caption-content">
                  <h4>Swiper</h4>
                  <p class="mb-0">
                    Allows a smartwatch to control presentations and other
                    remote software.
                  </p>
                </span>
              </span>
              <img class="img-fluid portfolio-img" src={Swiper} alt="" />
            </a>
          </div>
          <div class="col-lg-4">
            <a
              class="portfolio-item"
              data-toggle="modal"
              href="#portfolioModal14"
            >
              <span class="caption">
                <span class="caption-content">
                  <h4>Financial Graph</h4>
                  <p class="mb-0">
                    Graphs and analyzes your personal financial history.
                  </p>
                </span>
              </span>
              <img class="img-fluid portfolio-img" src={Financial} alt="" />
            </a>
          </div>
          <div class="col-lg-4">
            <a
              class="portfolio-item"
              data-toggle="modal"
              href="#portfolioModal15"
            >
              <span class="caption">
                <span class="caption-content">
                  <h4>Web Scraper</h4>
                  <p class="mb-0">
                    Various purpose scripts for easy web scraping.
                  </p>
                </span>
              </span>
              <img class="img-fluid portfolio-img" src={Webimage} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
