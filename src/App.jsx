import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('cpe_theme') || 'dark';
  });

  const [modalImage, setModalImage] = useState({
    isOpen: false,
    src: '',
    alt: ''
  });

  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cpe_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenImage = (src, alt) => {
    setModalImage({ isOpen: true, src, alt });
  };

  const handleCloseImage = () => {
    setModalImage({ isOpen: false, src: '', alt: '' });
  };

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg((current) => (current === msg ? '' : current));
    }, 3500);
  };

  return (
    <div className="portfolio-app">
      {/* Sticky Top Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Sections */}
      <main id="main-content">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onShowToast={showToast}
        />

        <Experience />

        <Projects onImageClick={handleOpenImage} />

        <Skills />

        <Education />

        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Image Lightbox Modal */}
      <ImageModal
        isOpen={modalImage.isOpen}
        imageSrc={modalImage.src}
        imageAlt={modalImage.alt}
        onClose={handleCloseImage}
      />

      {/* Full Resume Preview & Print Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMsg}
        onClose={() => setToastMsg('')}
      />
    </div>
  );
}

export default App;
