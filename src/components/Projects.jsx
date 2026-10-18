import { useState } from 'react';
import { Sparkles, ExternalLink, Layers, ArrowUpRight, Maximize2, CheckCircle2, Code2 } from 'lucide-react';
import { Github } from './SocialIcons';
import { projects } from '../data/portfolioData';

export default function Projects({ onImageClick }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="app-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={16} />
            <span>Featured Software & AI Solutions</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects & Applications</span>
          </h2>

          {/* Filter Tabs */}
          <div className="project-filters">
            <button
              onClick={() => setActiveFilter('all')}
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('ai-web')}
              className={`filter-btn ${activeFilter === 'ai-web' ? 'active' : ''}`}
            >
              AI & Web Apps (2)
            </button>
            <button
              onClick={() => setActiveFilter('data')}
              className={`filter-btn ${activeFilter === 'data' ? 'active' : ''}`}
            >
              Data Analytics (1)
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article key={project.id} className="project-card glass-card">
              {/* Project Image Showcase */}
              <div 
                className="project-media-wrapper"
                onClick={() => onImageClick && onImageClick(project.image, project.title)}
                role="button"
                tabIndex={0}
                title={`Click to enlarge ${project.title} screenshot`}
              >
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.subtitle}`}
                  className="project-img"
                  loading="lazy"
                />
                
                <div className="project-overlay">
                  <div className="project-category-tag">{project.categoryLabel}</div>
                  <div className="project-expand-hint">
                    <Maximize2 size={18} />
                    <span>Enlarge Photo</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-body">
                <div className="project-top-row">
                  <span className="project-cat-pill">{project.categoryLabel}</span>
                  {project.id === 'trip-aura' && (
                    <span className="live-demo-indicator">
                      <span className="indicator-dot"></span> Live Deployment
                    </span>
                  )}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="project-highlights">
                  <h4 className="highlights-header">
                    <Code2 size={15} />
                    <span>Key Engineering Highlights</span>
                  </h4>
                  <ul className="highlights-list">
                    {project.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="highlight-item">
                        <CheckCircle2 size={14} className="highlight-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="project-tech-tags">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  {project.id === 'trip-aura' ? (
                    <>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm project-action-btn"
                      >
                        <span>Launch Live App</span>
                        <ArrowUpRight size={16} />
                      </a>
                      <a
                        href="https://github.com/ChitPannEi08"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm project-action-btn"
                      >
                        <Github size={16} />
                        <span>GitHub</span>
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm project-action-btn"
                      >
                        <Github size={16} />
                        <span>View Repository</span>
                        <ArrowUpRight size={16} />
                      </a>
                      <button
                        onClick={() => onImageClick && onImageClick(project.image, project.title)}
                        className="btn btn-secondary btn-sm project-action-btn"
                      >
                        <Maximize2 size={16} />
                        <span>Preview UI</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
