import { MainLayout } from '../../Layouts/MainLayout';
import Header from '../Header/Header';
import ImageProfile from '../ImageProfile/ImageProfile';
import './App.css';

function App() {
  return (
    <MainLayout>
      <Header />
      <div className="photo-area">
          <ImageProfile />
      </div>

      <h2 className="job-title">Software Engineer</h2>
    
      <main className="main-content">
        Main Section
      </main>
      <div className="social-sidebar">
          Icons
      </div>
    </MainLayout>
  );
}

export default App;