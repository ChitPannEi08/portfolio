import { Heart, Terminal, ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="app-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="brand-icon">
              <Terminal size={18} />
            </div>
            <span className="footer-name">{personalInfo.name}</span>
            <span className="footer-role">Portfolio • {personalInfo.title}</span>
          </div>

          <div className="footer-social-links">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-icon"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="footer-social-icon"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <button 
              onClick={scrollToTop} 
              className="footer-top-btn" 
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {new Date().getFullYear()} Chit Pann Ei. All rights reserved. Built with React & modern web engineering.
          </p>
          <div className="footer-academic-pill">
            <span>Rangsit International College (ICT)</span>
            <span className="bullet-sep">•</span>
            <span>GPA 3.92</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
