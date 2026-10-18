import { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo, workExperience, projects, skillsData, education } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="resume-modal-wrapper" onClick={(e) => e.stopPropagation()}>
        {/* Modal Controls Bar */}
        <div className="resume-modal-topbar">
          <div className="resume-modal-title">
            <span>Resume Document Preview</span>
            <span className="resume-doc-tag">PDF Source Equivalent</span>
          </div>
          <div className="resume-modal-actions">
            <button onClick={handlePrint} className="btn btn-primary btn-sm">
              <Printer size={15} />
              <span>Print / Save as PDF</span>
            </button>
            <button onClick={onClose} className="modal-close-btn" aria-label="Close resume preview">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Paper */}
        <div className="resume-paper printable-area">
          {/* Header */}
          <div className="resume-header">
            <div className="resume-header-left">
              <h1 className="resume-name">{personalInfo.name}</h1>
              <div className="resume-title-line">{personalInfo.title}</div>
            </div>
            <div className="resume-header-right">
              <div className="resume-contact-item">
                <strong>T:</strong> {personalInfo.phone}
              </div>
              <div className="resume-contact-item">
                <strong>Email:</strong> {personalInfo.email}
              </div>
              <div className="resume-contact-item">
                <strong>A:</strong> {personalInfo.location}
              </div>
              <div className="resume-contact-item">
                <strong>Github:</strong> {personalInfo.githubUsername}
              </div>
              <div className="resume-contact-item">
                <strong>LinkedIn:</strong> {personalInfo.linkedinName}
              </div>
            </div>
          </div>

          <hr className="resume-hr" />

          {/* Summary */}
          <section className="resume-section">
            <h2 className="resume-sec-title">SUMMARY</h2>
            <p className="resume-text">
              Final-year ICT student with a <strong>3.92 GPA</strong> and one year of professional experience working as a Network Engineer. 
              My experience has provided me with a strong understanding of IT infrastructure, network operations, troubleshooting, and technical problem-solving.
            </p>
            <p className="resume-text" style={{ marginTop: '6px' }}>
              Alongside networking, I have developed programming and software development skills in Python, Flutter, Java, JavaScript, React, HTML, CSS, SQL, and MySQL, Supabase, as well as data visualization experience using Power BI. I am particularly interested in applying these skills to software development, data analytics, system development, and digital transformation projects.
            </p>
            <p className="resume-text" style={{ marginTop: '6px' }}>
              Seeking an internship or cooperative education placement to apply my existing skills, contribute to challenging projects, and gain further professional experience within a technology-driven organization.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="resume-section">
            <h2 className="resume-sec-title">TECHNICAL SKILLS</h2>
            <div className="resume-skills-cols">
              <div className="resume-skill-col">
                <strong>Networking:</strong>
                <ul>
                  <li>Network Troubleshooting</li>
                  <li>Network Monitoring</li>
                  <li>Network Infrastructure</li>
                  <li>Technical Troubleshooting</li>
                </ul>
              </div>
              <div className="resume-skill-col">
                <strong>Programming & Web Dev:</strong>
                <ul>
                  <li>Python, Flutter, Java</li>
                  <li>JavaScript, React</li>
                  <li>HTML, CSS</li>
                </ul>
              </div>
              <div className="resume-skill-col">
                <strong>Database & Data:</strong>
                <ul>
                  <li>SQL, MySQL, Supabase</li>
                  <li>Power BI</li>
                  <li>Data Analysis & Visualization</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Professional Skills */}
          <section className="resume-section">
            <h2 className="resume-sec-title">PROFESSIONAL SKILLS</h2>
            <p className="resume-text">
              Problem-Solving • Analytical Thinking • Team Collaboration • Project Coordination • Technical Documentation
            </p>
          </section>

          {/* Work Experience */}
          <section className="resume-section">
            <h2 className="resume-sec-title">WORK EXPERIENCE</h2>
            <div className="resume-item-header">
              <div>
                <strong className="resume-role">Network Engineer</strong> — Kinetic ISP, Yangon (Myanmar)
              </div>
              <div className="resume-date">December 2022 – March 2024</div>
            </div>
            <ul className="resume-bullets">
              <li>Monitored network infrastructure and services to identify outages, performance issues, and abnormalities.</li>
              <li>Configured, and maintained network infrastructure to support reliable and efficient network operations.</li>
              <li>Configured network infrastructure, including routers, and switches.</li>
              <li>Monitored network availability and performance using network monitoring tools.</li>
              <li>Troubleshot network connectivity issues, diagnosed hardware and configuration problems, and implemented solutions to minimize network downtime.</li>
              <li>Escalated complex technical issues to appropriate engineering teams in accordance with operational procedures.</li>
              <li>Collaborated with IT teams and end users to resolve technical issues and support daily business operations.</li>
              <li>Documented network configurations, IP addressing schemes, troubleshooting procedures, and technical incidents.</li>
            </ul>
          </section>

          {/* Project Experience */}
          <section className="resume-section">
            <h2 className="resume-sec-title">PROJECT EXPERIENCE</h2>
            
            {/* Project 1 */}
            <div className="resume-proj-block">
              <div className="resume-item-header">
                <div>
                  <strong className="resume-role">“Trip Aura”</strong> — <span className="resume-link">https://chitpannei08.github.io/travel-chatbot/</span>
                </div>
              </div>
              <div className="resume-proj-tech">
                React | JavaScript | HTML | CSS | Supabase | Gemini API | Weather API
              </div>
              <ul className="resume-bullets">
                <li>Designed and developed a web-based travel booking platform with an integrated AI-powered travel chatbot.</li>
                <li>Integrated a weather API to provide destination weather information and forecasts to support travel planning.</li>
                <li>Developed the frontend using React, JavaScript, HTML, and CSS, with a responsive and user-friendly interface.</li>
                <li>Integrated Supabase for database management, data storage, and application backend functionality.</li>
                <li>Applied software development, database management, API integration, and user-interface design principles throughout the project.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="resume-proj-block">
              <div className="resume-item-header">
                <div>
                  <strong className="resume-role">“Aurora” AI Chatbot Web Application</strong> — <span className="resume-link">https://github.com/ChitPannEi08/Aurora_chatbot</span>
                </div>
              </div>
              <div className="resume-proj-tech">
                Python | Flask | HTML | CSS | JavaScript | Gemini API | Supabase
              </div>
              <ul className="resume-bullets">
                <li>Designed and developed a web-based AI chatbot application using Python and Flask to provide interactive user experiences through a web interface.</li>
                <li>Integrated the Google Gemini API to support AI-powered chatbot interactions.</li>
                <li>Utilized HTML, CSS, and JavaScript to build and style the user interface and implement client-side functionality.</li>
                <li>Implemented server-side application logic and request handling using Flask to connect frontend components with backend services.</li>
                <li>Integrated Supabase for database connectivity and backend data management.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="resume-proj-block">
              <div className="resume-item-header">
                <div>
                  <strong className="resume-role">Sales Analysis Dashboard</strong> — <span className="resume-link">https://github.com/ChitPannEi08/SalesAnalyticsDashboard</span>
                </div>
              </div>
              <div className="resume-proj-tech">
                Python | CSS | CSV file | Data Analytics
              </div>
              <ul className="resume-bullets">
                <li>Developed an interactive sales analysis dashboard using Python based on a sample sales dataset obtained from Kaggle.</li>
                <li>Analyzed sales performance across products, categories, regions, and time periods to identify key trends and patterns.</li>
                <li>Designed the dashboard to support data-driven decision-making through interactive analysis and visual reporting.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="resume-section">
            <h2 className="resume-sec-title">EDUCATION</h2>
            <div className="resume-item-header">
              <div>
                <strong>Bachelor's Degree in Information and Communication Technology</strong>
              </div>
              <div className="resume-date">Rangsit International College, Thailand</div>
            </div>
            <div className="resume-gpa-line">Cumulative GPA: <strong>3.92 / 4.00</strong></div>
            <div className="resume-coursework-line">
              <strong>Relevant Coursework:</strong> Computer Networking, Database Management Systems, Object-Oriented Programming, Web Application Development, Mobile Application using Flutter, Systems Analysis & Design, IT Project Management.
            </div>
          </section>

          {/* Additional Information */}
          <section className="resume-section">
            <h2 className="resume-sec-title">ADDITIONAL INFORMATION</h2>
            <p className="resume-text">
              <strong>Languages:</strong> English (Fluent)
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
