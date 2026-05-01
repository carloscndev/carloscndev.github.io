import { MainLayout } from '../../Layouts/MainLayout';
import Header from '../Header/Header';
import ImageProfile from '../ImageProfile/ImageProfile';
import JobTitle from '../JobTitle/JobTitle';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import IconsSidebar from '../IconsSidebar/IconsSidebar';
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
      <IconsSidebar />
    </MainLayout>
  );
}

export default App;