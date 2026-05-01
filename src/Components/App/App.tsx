import { MainLayout } from '../../Layouts/MainLayout';
import Header from '../Header/Header';
import ImageProfile from '../ImageProfile/ImageProfile';
import JobTitle from '../JobTitle/JobTitle';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import './App.css';

function App() {
  return (
    <MainLayout>
      <Header />
      <ImageProfile />
      <JobTitle />
      <main className="main-content">
        <AboutMe />
        <Skills />
        <Education />
      </main>
      <div className="social-sidebar">
          Icons
      </div>
    </MainLayout>
  );
}

export default App;