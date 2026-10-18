export const personalInfo = {
  name: "Chit Pann Ei",
  title: "Final-Year ICT Student | Software & Network Engineering",
  headline: "Bridging Enterprise Network Infrastructure & Modern AI Software Development",
  gpa: "3.92",
  gpaScale: "4.00",
  location: "Bangkok, Thailand",
  email: "chitpannei08@gmail.com",
  phone: "+66-0941174028",
  github: "https://github.com/ChitPannEi08",
  githubUsername: "ChitPannEi08",
  linkedin: "https://www.linkedin.com/in/chit-pann-ei-cpe/",
  linkedinName: "chit-pann-ei-cpe",
  status: "Available for Internship / Cooperative Education Placement",
  summary: `Final-year ICT student with a 3.92 GPA and one year of professional experience working as a Network Engineer. My experience has provided me with a strong understanding of IT infrastructure, network operations, troubleshooting, and technical problem-solving.
Alongside networking, I have developed programming and software development skills in Python, Flutter, Java, JavaScript, React, HTML, CSS, SQL, and MySQL, Supabase, as well as data visualization experience using Power BI. I am particularly interested in applying these skills to software development, data analytics, system development, and digital transformation projects.
Seeking an internship or cooperative education placement to apply my existing skills, contribute to challenging projects, and gain further professional experience within a technology-driven organization.`,
  languages: [
    { name: "English", level: "Fluent (Professional Proficiency)" },
    { name: "Burmese", level: "Native" }
  ],
  stats: [
    { label: "Cumulative GPA", value: "3.92", sub: "Top Academic Standing" },
    { label: "Industry Experience", value: "1+ Yr", sub: "Kinetic ISP Network Eng." },
    { label: "Featured Projects", value: "3+", sub: "AI, Full-Stack & Data" },
    { label: "Core Technologies", value: "15+", sub: "Web, AI & Networking" }
  ]
};

export const workExperience = [
  {
    id: "kinetic-isp",
    role: "Network Engineer",
    company: "Kinetic ISP",
    location: "Yangon, Myanmar",
    period: "December 2022 – March 2024",
    duration: "1 Year 4 Months",
    type: "Full-Time Industry Experience",
    badge: "Core Enterprise Experience",
    responsibilities: [
      "Monitored network infrastructure and ISP services 24/7 to proactively identify outages, latency spikes, and routing abnormalities.",
      "Configured, provisioned, and maintained enterprise network infrastructure to ensure reliable, high-throughput network operations.",
      "Configured core and access network hardware including Cisco routers, managed layer-2/3 switches, and optical distribution nodes.",
      "Monitored network availability and bandwidth utilization metrics using enterprise network monitoring tools (PRTG, Zabbix, SNMP).",
      "Troubleshot complex network connectivity issues, diagnosed hardware faults and routing misconfigurations, and implemented rapid solutions to minimize downtime.",
      "Escalated high-tier technical incidents to senior engineering teams according to rigorous operational SLA guidelines.",
      "Collaborated cross-functionally with IT engineering teams and enterprise end users to resolve incidents and support daily business continuity.",
      "Authored standard operating procedures (SOPs), network topology diagrams, IP addressing schemes, and post-incident root cause documentation."
    ],
    technologies: [
      "Cisco Routers & Switches",
      "Network Troubleshooting",
      "NOC Monitoring Tools",
      "IP Addressing & Subnetting",
      "VLAN & Routing Protocols",
      "Incident Resolution",
      "SLA Management",
      "Technical Documentation"
    ]
  }
];

export const projects = [
  {
    id: "trip-aura",
    title: "Trip Aura",
    subtitle: "AI-Powered Travel Booking & Smart Itinerary Platform",
    category: "ai-web",
    categoryLabel: "AI & Full-Stack Web",
    featured: true,
    image: "/images/trip-aura.jpg",
    liveUrl: "https://chitpannei08.github.io/travel-chatbot/",
    githubUrl: "https://chitpannei08.github.io/travel-chatbot/",
    techStack: ["React", "JavaScript", "HTML5", "CSS3", "Supabase", "Gemini API", "Weather API"],
    description: "A comprehensive web-based travel booking platform that merges seamless hotel/flight exploration with an intelligent, generative AI travel assistant and real-time destination weather intelligence.",
    highlights: [
      "Designed and developed a responsive, glassmorphic UI in React with intuitive booking flows and destination discovery cards.",
      "Integrated Google's Gemini API to power 'Aura AI Advisor' for personalized, real-time trip itinerary recommendations and instant conversational queries.",
      "Connected live OpenWeather/Weather API to provide travelers with real-time temperature, precipitation forecasts, and packing recommendations.",
      "Architected Supabase backend for secure authentication, relational database storage of travel itineraries, and user preferences.",
      "Engineered responsive, mobile-first design patterns with interactive micro-animations and seamless error handling."
    ]
  },
  {
    id: "aurora-chatbot",
    title: "“Aurora” AI Chatbot Web Application",
    subtitle: "Intelligent Conversational Assistant with Google Gemini & Flask",
    category: "ai-web",
    categoryLabel: "AI & Full-Stack Web",
    featured: true,
    image: "/images/aurora-chatbot.jpg",
    liveUrl: "https://github.com/ChitPannEi08/Aurora_chatbot",
    githubUrl: "https://github.com/ChitPannEi08/Aurora_chatbot",
    techStack: ["Python", "Flask", "Google Gemini API", "Supabase", "JavaScript", "HTML5", "CSS3"],
    description: "A sleek, dark-themed conversational AI web application built from the ground up using Python Flask and Google's Gemini API to deliver natural, context-aware dialogue with streaming code assistance.",
    highlights: [
      "Architected robust server-side request pipelines and RESTful API endpoints using Python Flask to connect front-end chat views to Google Gemini.",
      "Constructed a high-fidelity dark mode interface with interactive prompt suggestion chips, syntax-highlighted code blocks, and markdown rendering.",
      "Integrated Supabase for session persistence, historical chat storage, and multi-turn conversational context retention.",
      "Implemented asynchronous client-server communication using vanilla JavaScript and fetch API for lightning-fast latency.",
      "Applied secure environment configuration, rate-limiting considerations, and graceful fallback mechanisms for API timeouts."
    ]
  },
  {
    id: "sales-analysis-dashboard",
    title: "Sales Analysis Dashboard",
    subtitle: "Interactive Multi-Dimensional Business Intelligence Platform",
    category: "data",
    categoryLabel: "Data Analytics & BI",
    featured: true,
    image: "/images/sales-dashboard.jpg",
    liveUrl: "https://github.com/ChitPannEi08/SalesAnalyticsDashboard",
    githubUrl: "https://github.com/ChitPannEi08/SalesAnalyticsDashboard",
    techStack: ["Python", "Pandas", "CSS3", "CSV Processing", "Data Visualization", "Kaggle Dataset"],
    description: "An interactive, exploratory business intelligence dashboard built with Python to analyze multi-million-dollar retail sales transactions, providing actionable insights across products, categories, and geographic territories.",
    highlights: [
      "Processed and cleansed complex retail sales datasets sourced from Kaggle using Python and Pandas data manipulation pipelines.",
      "Visualized revenue trends, net profit margins, conversion metrics, and regional performance heatmaps.",
      "Segmented multi-category product lines into interactive visual breakdowns (Electronics, Home Goods, Fashion, Sports) to reveal top revenue drivers.",
      "Built interactive filtering controls for custom date ranges, territorial regions, and product categories for exploratory decision-making.",
      "Synthesized data insights into executive-ready visual KPI summaries to facilitate strategic commercial decisions."
    ]
  }
];

export const skillsData = {
  networking: [
    { name: "Network Troubleshooting", level: 92, desc: "Diagnosing hardware, link faults, and misconfigurations" },
    { name: "Network Monitoring Tools", level: 90, desc: "PRTG, Zabbix, SNMP telemetry & SLA monitoring" },
    { name: "Network Infrastructure", level: 88, desc: "Enterprise router & switch provisioning, NOC operations" },
    { name: "IP Addressing & Subnetting", level: 94, desc: "IPv4/IPv6 planning, VLAN segmentation, CIDR schemes" },
    { name: "Technical Incident Resolution", level: 90, desc: "Root cause analysis, escalation SOPs, minimal downtime" }
  ],
  programming: [
    { name: "Python", level: 90, desc: "Flask backends, data processing with Pandas, AI script integrations" },
    { name: "React & JavaScript (ES6+)", level: 88, desc: "Modern component architecture, hooks, responsive interfaces" },
    { name: "HTML5 & CSS3", level: 92, desc: "Semantic markup, CSS Grid/Flexbox, animations, glassmorphism" },
    { name: "Flutter & Dart", level: 82, desc: "Cross-platform mobile application development" },
    { name: "Java", level: 80, desc: "Object-oriented software development & system design" },
    { name: "Flask & REST APIs", level: 85, desc: "Lightweight Python microservices & API routing" }
  ],
  database: [
    { name: "SQL & MySQL", level: 88, desc: "Relational schema design, complex joins, query optimization" },
    { name: "Supabase", level: 86, desc: "PostgreSQL databases, auth policies, real-time subscriptions" },
    { name: "Power BI", level: 84, desc: "Interactive BI reporting, DAX formulas, KPI dashboards" },
    { name: "Data Analytics & Viz", level: 86, desc: "Kaggle datasets, trend analytics, visual storytelling" },
    { name: "Google Gemini API", level: 88, desc: "Prompt engineering, multi-turn AI chat integrations" }
  ],
  professional: [
    { name: "Problem-Solving", desc: "Systematic troubleshooting across hardware, software, and networking layers" },
    { name: "Analytical Thinking", desc: "Data-driven approach to architectural decisions and performance analysis" },
    { name: "Team Collaboration", desc: "Coordinating with cross-functional IT teams, engineers, and end-users" },
    { name: "Project Coordination", desc: "Agile workflows, milestone planning, and reliable project delivery" },
    { name: "Technical Documentation", desc: "Clear network topologies, incident post-mortems, and API documentation" }
  ]
};

export const education = {
  degree: "Bachelor's Degree in Information and Communication Technology (ICT)",
  university: "Rangsit International College",
  location: "Pathum Thani / Bangkok, Thailand",
  status: "Final-Year Student (Graduating 2025)",
  gpa: "3.92",
  gpaMax: "4.00",
  honor: "High Academic Distinction",
  coursework: [
    { name: "Computer Networking", code: "NET", icon: "network" },
    { name: "Database Management Systems", code: "DBMS", icon: "database" },
    { name: "Object-Oriented Programming", code: "OOP", icon: "code" },
    { name: "Web Application Development", code: "WEB", icon: "globe" },
    { name: "Mobile Application using Flutter", code: "MOB", icon: "smartphone" },
    { name: "Systems Analysis & Design", code: "SAD", icon: "layers" },
    { name: "IT Project Management", code: "ITPM", icon: "calendar" }
  ]
};
