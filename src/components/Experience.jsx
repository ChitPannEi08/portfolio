import { Network, Server, Activity, ShieldCheck, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { workExperience } from '../data/portfolioData';

export default function Experience() {
  const exp = workExperience[0];

  return (
    <section id="experience" className="section-padding experience-section">
      <div className="app-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Network size={16} />
            <span>Professional Work Experience</span>
          </div>
          <h2 className="section-title">
            Industry <span className="text-gradient">Network Engineering</span>
          </h2>
        </div>

        {/* Centered Experience Card */}
        <div className="experience-card experience-card-centered glass-card">
          {/* Header meta */}
          <div className="exp-header-meta">
            <div className="exp-role-badge">{exp.badge}</div>
            <div className="exp-dates">
              <Calendar size={15} />
              <span>{exp.period}</span>
              <span className="duration-pill">({exp.duration})</span>
            </div>
          </div>

          <h3 className="exp-job-title">{exp.role}</h3>
          <div className="exp-company-row">
            <span className="exp-company-name">{exp.company}</span>
            <span className="meta-separator">•</span>
            <span className="exp-location">
              <MapPin size={14} />
              {exp.location}
            </span>
          </div>

          {/* Quick Infrastructure Highlights */}
          <div className="infra-quick-stats infra-stats-centered">
            <div className="infra-stat-box">
              <div className="infra-stat-icon">
                <Activity size={18} />
              </div>
              <div>
                <div className="infra-stat-title">24/7 Operations</div>
                <div className="infra-stat-desc">Proactive incident mitigation & NOC monitoring</div>
              </div>
            </div>

            <div className="infra-stat-box">
              <div className="infra-stat-icon">
                <Server size={18} />
              </div>
              <div>
                <div className="infra-stat-title">L2/L3 Routing</div>
                <div className="infra-stat-desc">Cisco routers, managed switches & nodes</div>
              </div>
            </div>
          </div>

          {/* Responsibilities list in centered 2-col responsive grid */}
          <div className="exp-responsibilities">
            <h4 className="responsibilities-title">
              <ShieldCheck size={18} className="text-cyan" />
              <span>Core Responsibilities & Technical Contributions</span>
            </h4>
            
            <ul className="resp-list resp-grid">
              {exp.responsibilities.map((resp, index) => (
                <li key={index} className="resp-item">
                  <div className="resp-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="resp-text">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Pills */}
          <div className="exp-tech-section">
            <h5 className="tech-section-label">Enterprise Technologies & Domains:</h5>
            <div className="exp-tech-tags">
              {exp.technologies.map((tech, index) => (
                <span key={index} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
