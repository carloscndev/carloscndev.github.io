import BlockSection from "../BlockSection/BlockSection";
import './AboutMe.css'

const AboutMe = () => (
  <BlockSection 
    title="About Me"
    children={<AboutMeContent />}
  />
);

export const AboutMeContent = () => (
  <div className="about-me-content">
    <p>
      Software Engineer specialized in frontend development within the <strong>React ecosystem</strong>. I have contributed to various areas of the development lifecycle, including creating REST services with  <strong>Node.js</strong> and <strong>FastAPI</strong>, as well as implementing <strong>CI/CD</strong> pipelines utilizing cloud technologies such as <strong>AWS</strong> and <strong>GCP</strong>. Recently, I have focused on <strong>Generative AI</strong> and <strong>Machine Learning</strong> systems, including building <strong>ML pipelines</strong> and integrating language models into real production workflows and distributed systems.
    </p>
    <p>
      I have experience collaborating closely with product, design, and engineering teams to deliver maintainable and scalable solutions.
    </p>
    <p>
      Outside of my formal responsibilities, I enjoy exploring <strong>UI design</strong> and interface aesthetics.
    </p>
  </div>
);

export default AboutMe;