import BlockSection from "../BlockSection/BlockSection";

const Skills = () => (
  <BlockSection 
    title="Skills"
    children={<SkillsContent />}
  />
);

const SkillsContent = () => (
  <>
    <p><strong>Frontend: </strong>React, Redux, TypeScript, JavaScript, GraphQL, RxJS, HTML/CSS.</p>
    <p><strong>Backend & Cloud: </strong>Node.js, Python, FastAPI, AWS, GCP.</p>
    <p><strong>AI & Machine Learning: </strong>Generative AI, ML Pipelines, Model Integration.</p>
    <p><strong>Software Engineering: </strong>End-to-End System Design, Technical Leadership, CI/CD.</p>
    <p><strong>Other Languages: </strong>C++</p>
  </>
);

export default Skills;