window.App = window.App || {};

window.App.projects = [
  {
    id: 1,

    featured: true,

    type: ["aerospace", "academic"],

    projectName: "Volkswagen Hydrogen Challenge",

    company: "Volkswagen Guanajuato",

    role: "Project Team Member",

    location: "León, Guanajuato",

    year: 2023,

    technologies: [
      "Scrum",
      "Project Management",
      "Cost Estimation",
      "Supplier Quotation",
      "Technical Presentations"
    ],

    impact: [
      "🏆 Finalist",
      "👥 Team Project",
      "⚡ Hydrogen Energy"
    ],

    resume:
      "Finalist in the Use of Hydrogen as an Alternative Energy Source challenge, developing an innovative hydrogen solution for Volkswagen Guanajuato.",

    fullInformation: `
• Finalist in the "Use of Hydrogen as an Alternative Energy Source" challenge.

• Collaborated on the development of an innovative hydrogen solution for Volkswagen Guanajuato.

• Applied Scrum methodologies throughout the project.

• Performed supplier quotations, budgeting, and cost estimation.

• Presented project milestones to company executives and state government representatives.
`,

    imageUrl: "images/projects/volkswagen.jpg",

    github: "",

    demo: ""
  },

  {
    id: 2,

    featured: true,

    type: ["aerospace", "academic"],

    projectName: "Flexible Landing Gear Design for RC Aircraft",

    company: "Instituto Politécnico Nacional",

    role: "Research Assistant",

    location: "León, Guanajuato",

    year: 2023,

    technologies: [
      "Structural Analysis",
      "Fatigue Analysis",
      "Vibration Analysis",
      "Material Selection",
      "Dynamic Analysis",
      "CAD Design"
    ],

    impact: [
      "🎓 Social Service",
      "✈ Aircraft Structures",
      "📚 Research Project"
    ],

    resume:
      "Designed and analyzed flexible landing gear for radio-controlled aircraft, performing structural, vibration, fatigue, and dynamic analyses to improve performance and durability.",

    fullInformation: `
• Designed innovative flexible landing gear mechanisms for radio-controlled aircraft.

• Selected engineering materials according to mechanical properties and manufacturing feasibility.

• Performed static structural analyses to determine stress distribution.

• Conducted vibration analyses to identify natural frequencies and prevent resonance.

• Performed fatigue analyses to estimate service life.

• Executed dynamic analyses to evaluate damping ratio and system response.

• Completed the project as part of my Social Service at Instituto Politécnico Nacional.
`,

    imageUrl: "images/projects/flexible-landing-gear.jpg",

    github: "",

    demo: ""
  },

  {
    id: 3,

    featured: true,

    type: ["aerospace", "professional"],

    projectName: "Manufacturing Process Improvement",

    company: "ITP Aero",

    role: "Manufacturing Engineering Intern",

    location: "Querétaro, Mexico",

    year: 2024,

    technologies: [
      "Manufacturing",
      "Lean Manufacturing",
      "Process Improvement",
      "Production Support",
      "Engineering Documentation"
    ],

    impact: [
      "💼 Professional Experience",
      "🏭 Manufacturing",
      "⚙ Aerospace Industry"
    ],

    resume:
      "Supported manufacturing engineering activities focused on production efficiency and process optimization.",

    fullInformation: `
• Supported manufacturing engineering activities.

• Improved production documentation.

• Assisted in process optimization initiatives.

• Collaborated with multidisciplinary teams to improve manufacturing efficiency.

• Participated in continuous improvement projects.
`,

    imageUrl: "images/projects/manufacturing.jpg",

    github: "",

    demo: ""
  },

  {
    id: 4,

    featured: true,

    type: ["software", "personal", "web"],

    projectName: "Engineering Portfolio Website",

    company: "Personal Project",

    role: "Frontend Developer",

    location: "Remote",

    year: 2026,

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "UI/UX",
      "Git"
    ],

    impact: [
      "💻 Personal Project",
      "🌐 Responsive",
      "🎨 UI Design"
    ],

    resume:
      "Designed and developed a responsive engineering portfolio using HTML, CSS, and JavaScript.",

    fullInformation: `
• Designed the complete user interface and user experience.

• Developed responsive layouts for desktop and mobile devices.

• Implemented reusable JavaScript components.

• Optimized accessibility, SEO, and website performance.

• Built to showcase engineering experience, projects, and technical skills.
`,

    imageUrl: "images/projects/portfolio.jpg",

    github: "https://github.com/",

    demo: ""
  },

  {
    id: 5,

    featured: false,

    type: ["software", "academic", "web"],

    projectName: "Mexico Country Page",

    company: "BYU Pathway Worldwide",

    role: "Student",

    location: "Remote",

    year: 2026,

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Accessibility"
    ],

    impact: [
      "🎓 Academic",
      "🌎 Responsive Website"
    ],

    resume:
      "Responsive country information website developed for BYU Pathway Worldwide.",

    fullInformation: `
• Developed semantic HTML pages.

• Applied responsive CSS layouts.

• Implemented weather calculations using JavaScript.

• Improved accessibility and SEO.

• Achieved high Lighthouse performance scores.
`,

    imageUrl: "images/projects/mexico.jpg",

    github: "",

    demo: ""
  },

  {
    id: 6,

    featured: false,

    type: ["software", "academic", "web"],

    projectName: "Product Review System",

    company: "BYU Pathway Worldwide",

    role: "Student",

    location: "Remote",

    year: 2026,

    technologies: [
      "JavaScript",
      "Local Storage",
      "DOM Manipulation",
      "HTML5",
      "CSS3"
    ],

    impact: [
      "🎓 Academic",
      "🖥 Web Application"
    ],

    resume:
      "Interactive web application using Local Storage and dynamic DOM manipulation.",

    fullInformation: `
• Developed interactive forms using JavaScript.

• Stored user information with Local Storage.

• Generated dynamic HTML content.

• Improved user experience through responsive design.
`,

    imageUrl: "images/projects/reviews.jpg",

    github: "",

    demo: ""
  }
];

App.experience = [
    {
        id: 1,

        company: "Safran Landing Systems",

        role: "Repair Concessions Analysis Engineer",

        startDate: "Oct. 2024",

        endDate: "Present",

        location: "Querétaro, México",

        responsibilities: [
            "Reduced repair analysis turnaround time up to 50% by developing an \"envelope case\" methodology for steering cylinder, consolidating multiple repair scenarios within shared structural limits and eliminating the need for individual case-by-case justification.",

            "Enabled structural justification of pressure-loaded cylindrical components by proposing a hoop stress-based analysis methodology, closing a gap in existing evaluation criteria.",

            "Improved efficiency of repair concession evaluations by modifying and enhancing Excel/VBA-based engineering tools used across the team, streamlining recurring calculations.",

            "Justified the design and structural aspect of 14 repair concessions per month by performing dimensional stack-ups, drawing interpretation, and part/assembly review, ensuring compliance with structural acceptance criteria.",

            "Applied fatigue and damage tolerance analysis using Ncode-based tools to validate structural integrity of proposed repairs, supporting engineering sign-off on airworthiness-critical components.",

            "Laid the groundwork for automated concession evaluation by identifying and cataloging recurring repair cases into a structured database, targeting reduction of manual analysis time.",

            "Bridged design and manufacturing information gaps by modeling part sections and generating sketches in CATIA V5 to formally request clarifying data from MRO partners."
        ],

        skills: [
            "CATIA V5",
            "GD&T",
            "Structural Analysis",
            "Fatigue Analysis",
            "Damage Tolerance",
            "Excel",
            "VBA",
            "Ncode"
        ]
    },

    {
        id: 2,

        company: "ITP Aero",

        role: "Manufacturing Engineering Intern",

        startDate: "Feb. 2024",

        endDate: "Oct. 2024",

        location: "Querétaro, México",

        responsibilities: [
            "Identified and flagged outdated or missing standard work documentation by auditing operator work instructions against the latest released versions, surfacing a gap in production documentation control.",

            "Supported resolution of up to 10 out-of-tolerance production issues through preparation of nonconformance reports to request engineering concessions.",

            "Reduced rework-related quality issues by supervising manual polishing operations and training focus on visual defect identification and correct rework tooling selection.",

            "Contributed to production continuity by participating in production tracking meetings and authoring rework instruction documents used directly by the shop floor.",

            "Used Teamcenter and NX fundamentals to support production documentation and process tracking."
        ],

        skills: [
            "Manufacturing Engineering",
            "Teamcenter",
            "Siemens NX",
            "Nonconformances",
            "Technical Documentation",
            "Process Improvement"
        ]
    }
];

App.skills = [
    "CATIA V5",
    "Siemens NX",
    "Teamcenter",
    "GD&T",
    "Structural Analysis",
    "Fatigue Analysis",
    "Damage Tolerance",
    "Excel",
    "VBA",
    "Ncode",
    "Manufacturing Engineering",
    "Technical Documentation",
    "Nonconformance Analysis",
    "Process Improvement"
];

App.education = [

    {
        id: 1,

        degree: "Bachelor's Degree in Aeronautical Engineering",

        institution: "Instituto Politécnico Nacional",

        date: "Aug. 2024",

        location: "Guanajuato, México",

        highlights: [
            "Graduated with a 9.0 GPA.",

            "Led a student project designing landing gear for RC aircraft — from material selection to structural analysis — simulating real-world engineering design processes.",

            "Designed and tested composite wing profiles, conducting tensile tests to determine elastic modulus and validate structural performance."
        ]
    },


    {
        id: 2,

        degree: "Web and Computer Programming Certificate",

        institution: "Brigham Young University–Idaho",

        date: "Anticipated Dec. 2026",

        location: "Online",

        highlights: [
            "Studying Python programming, including data structures, functions, and object-oriented programming.",

            "Developing web development skills in HTML, CSS, and JavaScript.",

            "Applying programming knowledge to build engineering automation tools for structural calculations and data processing."
        ]
    },


    {
        id: 3,

        degree: "PathwayConnect Certificate",

        institution: "BYU–Pathway Worldwide",

        date: "Dec. 2025",

        location: "Online",

        highlights: [
            "Developed skills in learning strategies, time and financial management, and critical thinking.",

            "Led peer discussions on coursework topics as part of a collaborative learning cohort."
        ]
    }

];