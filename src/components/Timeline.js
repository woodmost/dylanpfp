import React from 'react';
import '../styles/Timeline.css';
import Technova from '../images/technova.png';
import Insight from '../images/a_insight.png';
import Cloudware from '../images/cloudware.png';

const Timeline = () => {
  return (
    <div className="content-section" id="timeline">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <p className="heading-sub-text">My professional Journey</p>
            <h2 className="section-heading">Timeline</h2>
            {/* <p className="lead mb-5">A little bit about me...</p> */}
          </div>
        </div>
        <div className="container text-center mb-5">
          <p className="timeline-lead">
            A short summary of my work experience . . .
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li className="timeline-inverted">
                <a
                  href="https://technovasystemsinc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="timeline-image">
                    {/* <img
                      className="img-circle img-responsive"
                      src={Technova}
                      alt="Technova|Systems"
                    /> */}
                  </div>
                </a>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h5>01/2023 – 03/2024</h5>
                    <h4 className="subheading">
                      <a
                        href="https://technovasystemsinc.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        TechNova Solutions
                      </a>
                      <br />
                      Herndon, VA
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <p className="lead">
                      Drove the architecture and deployment of data pipelines,
                      ETL processes, and a generative AI-powered chatbot,
                      boosting efficiency and decision-making capabilities.
                      Implemented LLM workflows, vector embeddings, and RAG
                      models, significantly enhancing data processing and
                      contextual retrieval on Google Cloud Platform.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="https://www.insight.com/en_US/home.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="timeline-image">
                    {/* <img
                      className="img-circle img-responsive"
                      src={Insight}
                      alt="Insight Analytics"
                    /> */}
                  </div>
                </a>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h5>04/2021 – 12/2022</h5>
                    <h4 className="subheading">
                      <a
                        href="https://www.insight.com/en_US/home.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Solutions & Systems
                      </a>
                      , Atlanta, GA
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <p className="lead">
                      My research on the{' '}
                      <b>
                        <a
                          href="https://www.insight.com/en_US/home.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          AlterEgo project
                        </a>
                      </b>
                      , which I demoed at TED 2021, focuses on developing neural
                      network models for a wearable system that allows humans to
                      converse silently, via electrical signals sent by the
                      brain during internal articulation, with machines, AI
                      assistants, and other people.{' '}
                      <a
                        href="https://www.insight.com/en_US/home.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {/* <b>media.mit.edu/people/ewadkins</b> */}
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <a
                  href="https://cloudwaveinc.com/ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="timeline-image">
                    {/* <img
                      className="img-circle img-responsive"
                      src={Cloudware}
                      alt="Cloudware"
                    /> */}
                  </div>
                </a>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h5>07/2017 – 02/2021</h5>
                    <h4 className="subheading">
                      <a
                        href="https://cloudwaveinc.com/about-us/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        AI | Cloudwave
                      </a>
                      , Tysons, VA
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <p className="lead">
                      Pioneered AI and generative AI solutions with IBM
                      Foundation Models and Watsonx.ai, delivering impactful
                      MVPs and enterprise-scale products at startup speed.
                      Collaborated closely with clients to co-create AI-driven
                      solutions, enhancing business value and driving client
                      engagement.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="https://www.neo-tech.ai/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="timeline-image">
                    {/* <img
                      className="img-circle img-responsive"
                      src="/img/google_square.png"
                      alt="Google"
                    /> */}
                  </div>
                </a>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h5>11/2016 – 06/2017</h5>
                    <h4 className="subheading">
                      <a
                        href="https://www.neo-tech.ai/about"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Neo-Tech | GenAI
                      </a>
                      , Chatsworth, CA
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <p className="lead">
                      Developed and optimized backend services, reducing latency
                      by 45% and deployment time by 20% through CI/CD pipelines
                      and cloud-native solutions. Enhanced backend performance
                      and reliability by leveraging Django, Flask, Docker,
                      Kubernetes, and AWS cloud services.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <a
                  href="https://www.innovatexlab.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="timeline-image">
                    {/* <img
                      className="img-circle img-responsive"
                      src="/img/nasa_square4.png"
                      alt="InnovateX"
                    /> */}
                  </div>
                </a>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h5>07/2014 – 08/2016</h5>
                    <h4 className="subheading">
                      <a
                        className="subheading-id"
                        href="https://www.innovatexlab.com/#about"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        InnovateX Lab
                      </a>
                      , Sunnyvale, CA
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <p className="lead">
                      Engineered AI-driven web applications and computer vision
                      systems, integrating AI models into full-stack solutions
                      to enhance user experience and functionality. Developed
                      innovative solutions, such as a computer vision-based
                      surveillance system, demonstrating expertise in AI
                      integration and application development.
                    </p>
                  </div>
                </div>
              </li>
              {/* Add the rest of your timeline items here following the same pattern */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
