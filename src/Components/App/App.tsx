import { MainLayout } from '../../Layouts/MainLayout';
import ImageProfile from '../ImageProfile/ImageProfile';
import './App.css';

function App() {
  return (
    <MainLayout>
      <aside className="hero-sidebar">
        <ImageProfile />
      </aside>

      <main className="main-content">
        <section id="about" className="content-section">
          <h2 className="section-title">About Me</h2>
          <p>
            Software Engineer specialized in frontend development within the React ecosystem. 
            I have contributed to various areas of the development lifecycle...
          </p>
          <p className="mt-4">
            Outside of my formal responsibilities, I enjoy exploring UI design and interface aesthetics.
          </p>
        </section>

        <section id="experience" className="content-section">
          <h2 className="section-title">Experience</h2>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>C3 AI - Software Engineer (Generative AI)</h3>
              <span className="date">Jan 2023 - May 2025</span>
              <ul>
                <li>Designed and maintained production-grade full stack applications...</li>
                <li>Led end-to-end feature development...</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="content-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
             <div className="skill-category">
               <h3>Frontend</h3>
               <p>React, Redux, TypeScript, JavaScript, GraphQL, HTML/CSS</p>
             </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default App;