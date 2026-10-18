import { MapPin, Mail, Phone, ArrowRight, Download } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume, onShowToast }) {
  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    if (onShowToast) onShowToast(`Copied ${label} to clipboard!`);
  };

  return (
    <section id="about" className="hero-section">
      {/* Ambient background glows */}
      <div className="hero-glow-1 animate-pulse-glow" aria-hidden="true" />
      <div className="hero-glow-2 animate-pulse-glow" aria-hidden="true" />

      <div className="app-container hero-container">
        <div className="hero-grid">
          {/* Left Column: Text & Content */}
          <div className="hero-content">
            {/* Status Pill */}
            <div className="status-pill">
              <span className="status-dot">
                <span className="status-dot-ping"></span>
                <span className="status-dot-core"></span>
              </span>
              <span className="status-text">{personalInfo.status}</span>
            </div>

            {/* Main Greeting */}
            <h1 className="hero-title">
              Hello, I'm <br />
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="hero-subtitle">
              {personalInfo.title}
            </h2>

            {/* Bio summary paragraph */}
            <div className="hero-description">
              <p>
                Final-year ICT student with a <strong className="highlight-text">3.92 GPA</strong> and 
                <strong className="highlight-text"> one year of professional experience</strong> working as a Network Engineer. 
                My experience has provided me with a strong understanding of IT infrastructure, network operations, troubleshooting, and technical problem-solving.
              </p>
              <p>
                Alongside networking, I have developed programming and software development skills in Python, Flutter, Java, JavaScript, React, HTML, CSS, SQL, and MySQL, Supabase, as well as data visualization experience using Power BI. I am particularly interested in applying these skills to software development, data analytics, system development, and digital transformation projects.
              </p>
              <p>
                Seeking an internship or cooperative education placement to apply my existing skills, contribute to challenging projects, and gain further professional experience within a technology-driven organization.
              </p>
            </div>

            {/* Quick Contact & Location Badges */}
            <div className="hero-chips">
              <div className="hero-chip">
                <MapPin size={15} className="chip-icon text-cyan" />
                <span>{personalInfo.location}</span>
              </div>
              <button 
                onClick={() => handleCopy(personalInfo.email, 'Email')}
                className="hero-chip interactive-chip" 
                title="Click to copy email"
              >
                <Mail size={15} className="chip-icon text-purple" />
                <span>{personalInfo.email}</span>
              </button>
              <button 
                onClick={() => handleCopy(personalInfo.phone, 'Phone number')}
                className="hero-chip interactive-chip" 
                title="Click to copy phone"
              >
                <Phone size={15} className="chip-icon text-emerald" />
                <span>{personalInfo.phone}</span>
              </button>
            </div>

            {/* Primary Action Buttons */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary" id="hero-projects-btn">
                <span>View Featured Projects</span>
                <ArrowRight size={17} />
              </a>

              <a href="#experience" className="btn btn-secondary" id="hero-exp-btn">
                <span>Network Experience</span>
              </a>

              <button 
                onClick={onOpenResume} 
                className="btn btn-secondary"
                id="hero-resume-modal-btn"
                title="View resume modal"
              >
                <Download size={16} />
                <span>Resume PDF</span>
              </button>
            </div>

            {/* Social Link Badges */}
            <div className="hero-social-row">
              <span className="social-label">Connect:</span>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link-icon"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link-icon"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="social-link-icon"
                aria-label="Send direct email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo Card with Floating Glass Accents */}
          <div className="hero-media">
            <div className="avatar-card-wrapper">
              {/* Outer decorative ring */}
              <div className="avatar-ambient-glow" />

              {/* Main Photo Card */}
              <div className="avatar-card glass-card">
                <div className="avatar-image-container">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/profile.jpg`} 
                    alt="Chit Pann Ei - Final-Year ICT Student and Software/Network Engineer"
                    className="avatar-img"
                    width="420"
                    height="420"
                    loading="eager"
                  />
                  <div className="avatar-overlay-gradient"></div>
                </div>

                {/* Card footer details */}
                <div className="avatar-card-info">
                  <div className="avatar-name-badge">
                    <span className="avatar-role-title">Software & Network Eng.</span>
                    <span className="avatar-academic">Rangsit International College</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Highlights / Stats Bar */}
        <div className="stats-bar glass-card">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-number text-gradient">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
