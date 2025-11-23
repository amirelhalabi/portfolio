export const projects = [
  {
    id: "uphire",
    title: "UpHire - Companies & Jobs Database System",
    role: "Database & Backend Developer",
    type: "Database System & Desktop Application",
    description: "UpHire is a comprehensive job hiring platform that connects job seekers with companies. Built to demonstrate advanced relational database concepts, the system manages the entire recruitment lifecycle from job posting to application tracking. It features a robust SQL Server backend with automated data integrity checks and a user-friendly JavaFX desktop interface.",
    tech: ["Java (JDK 17)", "SQL (T-SQL)", "JavaFX 17", "Microsoft SQL Server", "Maven", "JDBC"],
    features: [
      "Advanced Database Automation: SQL triggers for business rules and stored procedures for bulk operations.",
      "Role-Based Access: Distinct portals for Job Seekers, Companies, and Admins.",
      "Smart Application Tracking: Complex relational schema linking Users, Companies, and Job Offers.",
      "Dynamic Rating System: Stored procedures to calculate company ratings."
    ]
  },
  {
    id: "aya-restaurant",
    title: "AYA Restaurant - Management System",
    role: "Full Stack Web Developer",
    type: "Web Application",
    description: "AYA is a full-featured restaurant management web application designed to streamline food ordering and table reservations. It serves as a multi-restaurant platform where users can browse menus, customize orders, and book tables in real-time. The system leverages the Laravel framework to deliver a responsive and secure user experience.",
    tech: ["Laravel 9.x", "PHP 8", "Blade Templates", "Livewire", "Tailwind CSS", "MySQL"],
    features: [
      "Multi-Restaurant Support: Scalable architecture for multiple restaurants.",
      "Interactive Ordering: JSON-based storage for complex order customization.",
      "Real-Time Reservations: Smart table booking system checking capacity.",
      "Automated Menu Tracking: Database triggers for menu updates.",
      "Secure Authentication: Laravel Sanctum integration."
    ]
  },
  {
    id: "uni-companies-jobs",
    title: "Uni-Companies-Jobs - GUI Platform",
    role: "Java Application Developer",
    type: "Desktop GUI Application",
    description: "A desktop-based ecosystem connecting Job Seekers, Company CEOs, and University Administrators. This project focuses on the intersection of education and employment, allowing universities to manage academic programs while companies recruit talent. It demonstrates a complex three-way interaction model implemented with a rich graphical user interface.",
    tech: ["Java (JDK 17)", "JavaFX 17", "SQL Server", "Maven", "MVC Pattern"],
    features: [
      "Academic Management: Define faculties, majors, and credit systems.",
      "Recruitment Integration: Companies view student profiles and achievements.",
      "Comprehensive Profiles: Detailed profile management for three user types.",
      "Event-Driven UI: Responsive JavaFX interface handling complex flows."
    ]
  },
  {
    id: "aya-smart-home",
    title: "AYA's Smart Home - System Design",
    role: "Software Architect / Analyst",
    type: "Software Engineering Design Project",
    description: "A conceptual software engineering project focused on designing the architecture for an automated smart home system. This project emphasizes the software design lifecycle (SDLC), utilizing UML modeling to define system behaviors for security, climate control, and access management.",
    tech: ["PowerDesigner", "OOAD", "UML", "Class Diagrams", "Sequence Diagrams"],
    features: [
      "Security Architecture: Logic for 'Detect Thief' protocols.",
      "System Modeling: Comprehensive UML documentation (Static & Dynamic).",
      "Access Control Design: Modeled authentication flows.",
      "Climate Automation: Logic design for automated AC regulation."
    ]
  }
];
