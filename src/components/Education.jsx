import { GraduationCap, Award, BookOpen, Globe2, CheckCircle2, Languages, Network, Database, Code, Smartphone, Calendar, Layers } from 'lucide-react';
import { education, personalInfo } from '../data/portfolioData';

export default function Education() {
  const getCourseIcon = (iconName) => {
    switch (iconName) {
      case 'network': return <Network size={18} />;
      case 'database': return <Database size={18} />;
      case 'code': return <Code size={18} />;
      case 'globe': return <Globe2 size={18} />;
      case 'smartphone': return <Smartphone size={18} />;
      case 'layers': return <Layers size={18} />;
      default: return <BookOpen size={18} />;
    }
  };

  return (
    <section id="education" className="section-padding education-section">
      <div className="app-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={16} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="text-gradient">Core Coursework</span>
          </h2>
        </div>

        <div className="education-grid">
          {/* Main Degree Showcase Card */}
          <div className="degree-card glass-card">
            <div className="degree-top-row">
              <div className="degree-icon-box bg-purple">
                <GraduationCap size={28} />
              </div>
              <div className="degree-badge-gpa">
                <Award size={18} className="text-emerald" />
                <span>GPA {education.gpa} / {education.gpaMax}</span>
              </div>
            </div>

            <h3 className="degree-title">{education.degree}</h3>
            <div className="degree-university">{education.university}</div>
            <div className="degree-location">{education.location} • {education.status}</div>

            <div className="academic-highlight-box">
              <div className="highlight-tag">Academic Distinction</div>
              <p className="highlight-text-sm">
                Consistently maintained an exemplary academic record with a <strong>3.92 GPA</strong>, 
                demonstrating high competence across software development, algorithms, databases, 
                and telecommunication networking.
              </p>
            </div>

            {/* Language Proficiency */}
            <div className="languages-box">
              <div className="languages-header">
                <Languages size={18} className="text-cyan" />
                <span>Language Proficiencies</span>
              </div>
              <div className="languages-list">
                {personalInfo.languages.map((lang, idx) => (
                  <div key={idx} className="language-badge">
                    <span className="lang-name">{lang.name}</span>
                    <span className="lang-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Relevant Coursework Grid */}
          <div className="coursework-card glass-card">
            <div className="coursework-header">
              <BookOpen size={22} className="text-cyan" />
              <div>
                <h3 className="coursework-title">Relevant Academic Coursework</h3>
                <p className="coursework-sub">Key modules completed with distinction</p>
              </div>
            </div>

            <div className="coursework-grid">
              {education.coursework.map((course, idx) => (
                <div key={idx} className="course-item">
                  <div className="course-icon">
                    {getCourseIcon(course.icon)}
                  </div>
                  <div className="course-details">
                    <div className="course-code">{course.code}</div>
                    <div className="course-name">{course.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
