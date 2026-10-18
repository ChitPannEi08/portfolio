import { useState } from 'react';
import { Cpu, Network, Code, Database, Users, CheckCircle, BarChart3, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Domains', icon: Cpu },
    { id: 'networking', label: 'Networking & Infra', icon: Network },
    { id: 'programming', label: 'Programming & Web', icon: Code },
    { id: 'database', label: 'Databases & Analytics', icon: Database },
    { id: 'professional', label: 'Professional Skills', icon: Users },
  ];

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="app-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={16} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Core Competencies</span>
          </h2>

          {/* Category Tabs */}
          <div className="skill-category-tabs">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`skill-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                >
                  <Icon size={16} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid Display */}
        <div className="skills-grid">
          {/* Networking & IT Infrastructure */}
          {(activeTab === 'all' || activeTab === 'networking') && (
            <div className="skill-domain-card glass-card">
              <div className="domain-card-header">
                <div className="domain-icon-box bg-cyan">
                  <Network size={22} />
                </div>
                <div>
                  <h3 className="domain-title">Networking & Infrastructure</h3>
                  <span className="domain-subtitle">Hands-on ISP Engineering</span>
                </div>
              </div>

              <div className="skill-bars-list">
                {skillsData.networking.map((item, idx) => (
                  <div key={idx} className="skill-bar-item">
                    <div className="skill-bar-top">
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-pct">{item.level}%</span>
                    </div>
                    <div className="skill-progress-track">
                      <div 
                        className="skill-progress-fill bg-gradient-cyan" 
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                    <div className="skill-item-desc">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Programming & Web Development */}
          {(activeTab === 'all' || activeTab === 'programming') && (
            <div className="skill-domain-card glass-card">
              <div className="domain-card-header">
                <div className="domain-icon-box bg-purple">
                  <Code size={22} />
                </div>
                <div>
                  <h3 className="domain-title">Programming & Web Development</h3>
                  <span className="domain-subtitle">Modern Full-Stack & Mobile</span>
                </div>
              </div>

              <div className="skill-bars-list">
                {skillsData.programming.map((item, idx) => (
                  <div key={idx} className="skill-bar-item">
                    <div className="skill-bar-top">
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-pct">{item.level}%</span>
                    </div>
                    <div className="skill-progress-track">
                      <div 
                        className="skill-progress-fill bg-gradient-purple" 
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                    <div className="skill-item-desc">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Database & Data Analytics */}
          {(activeTab === 'all' || activeTab === 'database') && (
            <div className="skill-domain-card glass-card">
              <div className="domain-card-header">
                <div className="domain-icon-box bg-emerald">
                  <Database size={22} />
                </div>
                <div>
                  <h3 className="domain-title">Databases & Data Analytics</h3>
                  <span className="domain-subtitle">Relational, Cloud & Visual BI</span>
                </div>
              </div>

              <div className="skill-bars-list">
                {skillsData.database.map((item, idx) => (
                  <div key={idx} className="skill-bar-item">
                    <div className="skill-bar-top">
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-pct">{item.level}%</span>
                    </div>
                    <div className="skill-progress-track">
                      <div 
                        className="skill-progress-fill bg-gradient-emerald" 
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                    <div className="skill-item-desc">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Professional & Soft Skills */}
          {(activeTab === 'all' || activeTab === 'professional') && (
            <div className="skill-domain-card glass-card">
              <div className="domain-card-header">
                <div className="domain-icon-box bg-amber">
                  <Users size={22} />
                </div>
                <div>
                  <h3 className="domain-title">Professional & Workplace Skills</h3>
                  <span className="domain-subtitle">Execution, Teamwork & Leadership</span>
                </div>
              </div>

              <div className="prof-skills-grid">
                {skillsData.professional.map((item, idx) => (
                  <div key={idx} className="prof-skill-item">
                    <div className="prof-icon-check">
                      <CheckCircle size={18} />
                    </div>
                    <div>
                      <h4 className="prof-title">{item.name}</h4>
                      <p className="prof-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
