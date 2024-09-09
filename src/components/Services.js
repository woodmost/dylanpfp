import React from 'react';
import '../styles/Services.css';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { FaDatabase, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { MdDesignServices, MdModelTraining } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';
import { CgWebsite } from 'react-icons/cg';
import { PiStrategyBold } from 'react-icons/pi';

const Services = () => {
  const fade = {
    opacity: 1,
    transition: {
      duration: 1.4
    }
  };

  return (
    <>
      <div className="services" id="services">
        <div className="container">
          <motion.div
            whileInView={fade}
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            className="heading"
          >
            <p className="heading-sub-text">What I can do</p>
            <p className="heading-text">Services</p>
          </motion.div>
          <motion.div
            whileInView={fade}
            className="services-box"
            initial={{ opacity: 0 }}
          >
            <div className="services-card">
              <GiArtificialIntelligence className="services-icon" />
              <p className="services-title">
                AI and Machine Learning Development
              </p>
              <p className="services-desc">
                End-to-end AI/ML Model Development: From data preprocessing to
                deployment, expertise in generative AI, NLP, LLMs, and more.
                Featured Projects: Chatbot development using transformer models,
                LSTM-based time series forecasting.{' '}
              </p>
            </div>
            <div className="services-card">
              <FaDatabase className="services-icon" />
              <t className="services-icon" />
              <p className="services-title">Data Science and Analytics</p>
              <p className="services-desc">
                Advanced Data Analysis: Anomaly detection, predictive modeling,
                and statistical analysis using Python, R, and SQL. Featured
                Projects: Outlier detection models, PCA for dimensionality
                reduction.
              </p>
            </div>
            <div className="services-card">
              <MdDesignServices className="services-icon" />
              <p className="services-title">
                Data Engineering and Pipeline Design
              </p>
              <p className="services-desc">
                Scalable Data Solutions: Design and implementation of data
                pipelines and ETL/ELT processes on GCP and AWS. Featured
                Projects: GCP data pipeline architecture, on-prem to cloud
                migration.
              </p>
            </div>
            <div className="services-card">
              <GiArtificialIntelligence className="services-icon" />
              <p className="services-title">Generative AI Solutions</p>
              <p className="services-desc">
                Creative AI Applications: Building generative AI models for text
                generation, image synthesis, aLinearEncodingnd more. Featured
                Projects: RAG models for enhanced data processing, contextual
                retrieval with vector embeddings.
              </p>
            </div>
            <div className="services-card">
              <PiStrategyBold className="services-icon" />
              <p className="services-title">Consulting and Advisory</p>
              <p className="services-desc">
                AI Strategy and Implementation: Consulting on AI strategy,
                technology selection, and deployment best practices. Featured
                Projects: Strategic advisory on cloud migrations,
                performance-optimized AI solutions.
              </p>
            </div>
            <div className="services-card">
              <MdModelTraining className="services-icon" />
              <p className="services-title">Custom AI/ML Training</p>
              <p className="services-desc">
                Tailored Training Programs: Customized workshops on AI/ML topics
                and cloud-based AI deployments. Sample Topics: Introductory to
                advanced courses, cloud platform training.
              </p>
            </div>
            <div className="services-card">
              <CgWebsite className="services-icon" />
              <p className="services-title">Web Development</p>
              <p className="services-desc">
                Custom Web Application Development: Design and build robust,
                scalable, and secure web applications using modern frameworks
                and technologies like React, Next.js, Vue.js, Node.js, and
                Express. Featured Projects: Developed a computer vision-based
                surveillance system using Python, OpenCV, TensorFlow, and Keras;
                built responsive web applications using React and Vue.js.
              </p>
            </div>
            <div className="services-card">
              <TbApi className="services-icon" />
              <p className="services-title">API Development and Integration</p>
              <p className="services-desc">
                RESTful and GraphQL API Development: Create and manage APIs to
                connect front-end applications with back-end services, ensuring
                high performance, security, and scalability. Featured Projects:
                Designed and developed scalable APIs for enterprise
                applications; integrated third-party services and microservices
                using Express and Nest.js.
              </p>
            </div>
            <div className="services-card">
              <FaCloud className="services-icon" />
              <p className="services-title">Cloud Deployment and DevOps</p>
              <p className="services-desc">
                TEnd-to-End Deployment Solutions: Implement CI/CD pipelines for
                automated testing, integration, and deployment. Deploy
                full-stack applications to cloud platforms like AWS and GCP.
                Featured Projects: Migrated on-premises applications to the
                cloud, optimized deployment processes with Docker and
                Kubernetes, and set up continuous integration and delivery
                pipelines.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
