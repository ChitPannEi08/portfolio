import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, MessageSquare, Share2 } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onShowToast) onShowToast(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="app-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={16} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Contact <span className="text-gradient">Me</span>
          </h2>
        </div>

        {/* Four Contact Cards Centered in Middle */}
        <div className="contact-cards-grid">
          {/* Email Card */}
          <div className="contact-card glass-card">
            <div className="contact-card-icon bg-cyan">
              <Mail size={22} />
            </div>
            <div className="contact-card-details">
              <div className="contact-card-label">Direct Email</div>
              <a href={`mailto:${personalInfo.email}`} className="contact-card-value">
                {personalInfo.email}
              </a>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.email, 'Email')}
              className="contact-copy-btn"
              title="Copy email to clipboard"
              aria-label="Copy email"
            >
              {copiedField === 'Email' ? <Check size={18} className="text-emerald" /> : <Copy size={18} />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="contact-card glass-card">
            <div className="contact-card-icon bg-emerald">
              <Phone size={22} />
            </div>
            <div className="contact-card-details">
              <div className="contact-card-label">Phone & WhatsApp</div>
              <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="contact-card-value">
                {personalInfo.phone}
              </a>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.phone, 'Phone number')}
              className="contact-copy-btn"
              title="Copy phone to clipboard"
              aria-label="Copy phone"
            >
              {copiedField === 'Phone number' ? <Check size={18} className="text-emerald" /> : <Copy size={18} />}
            </button>
          </div>

          {/* Location Card */}
          <div className="contact-card glass-card">
            <div className="contact-card-icon bg-purple">
              <MapPin size={22} />
            </div>
            <div className="contact-card-details">
              <div className="contact-card-label">Current Location</div>
              <div className="contact-card-value">{personalInfo.location}</div>
              <span className="location-sub">Open to on-site & remote roles</span>
            </div>
          </div>

          {/* Social Profiles Card */}
          <div className="contact-card glass-card">
            <div className="contact-card-icon bg-blue">
              <Share2 size={22} />
            </div>
            <div className="contact-card-details">
              <div className="contact-card-label">Professional Profiles</div>
              <div className="social-pill-row">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill linkedin-pill"
                  title="View LinkedIn Profile"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill github-pill"
                  title="View GitHub Profile"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
