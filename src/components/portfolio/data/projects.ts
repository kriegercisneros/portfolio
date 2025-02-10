export const projects = [


      {
        title: "Risk Manager Dashboard",
        description: "Analytics and reporting platform with customizable dashboards",
        demoUrl: "https://arrowhead-analytics-gilt.vercel.app/book-of-business",
        overview:"An advanced analytics and reporting platform that transforms complex business requirements into an intuitive, customizable dashboard experience. This solution empowers users to visualize critical data in real-time, leveraging a resilient, modular design designed for easy future enhancements.",
        techStack: ["Next.js", "React", "TypeScript", "Custom Data Visualization", "Redux"],
        imageUrl: "/program-analytics-agency-screen.png",
        timeline:'6 weeks',
        learnings: [
          "Translated complex business requirements into intuitive UI/UX patterns",
          "Engineered custom data visualization components with an eye toward scalability and dynamic data flows",
          "Developed a robust state management system, laying the groundwork for personalized and resilient dashboard experiences",
          "Optimized the development workflow, delivering a complete analytics front-end in just 6 weeks"
        ],
        technicalConsiderations:[
          "Designed the architecture with scalability and future integrations in mind, employing scalable design patterns inspired by CQRS and hexagonal architectures.", 
          "Incorporated real-time data handling and distributed data flows to ensure resilience under high load.",
        ],
        outcomes: [
          "Delivered a powerful, full-featured analytics platform in an accelerated timeline.",
          "Enabled project managers to customize their dashboard views, significantly enhancing workflow efficiency.",
          "Established a flexible component architecture that supports both standard and tailored visualizations, positioning the solution for ongoing evolution."
        ],
        impact: "",
        collaborators: [
          {
            name: "Business Leadership Team",
            role: "Requirements & Vision"
          },
          {
            name: "Project Managers and Users",
            role: "Continious Feedback to UX"
          }
        ]
      },
      {
        title: "Next-Gen Driver Onboarding",
        description: "Mobile-first driver compliance and management app",
        demoUrl: "#",
        techStack: ["React", "AWS", "Node.js", "TypeScript", "Express.js", "Mongo"], 
        imageUrl:'/mobile.png', 
        timeline:'10 weeks',
        collaborators: [
          { name: "Development Team", role: "Full Stack Implementation" },
          { name: "UX Team", role: "User Experience Design" }, 
          { name: "Product", role: "Timeline Development and Delivery" }
        ],
        learnings: [
          "Implemented complex AWS integrations for seamless data flow",
          "Optimized mobile performance for various device types",
          "Developed the first microservice in an enterprise suite"
        ],
        outcomes: [
          "Reduced driver-to-admin touchpoints by 6",
          "Increased user satisfaction by means of less manual entry",
          "Successfully and seamlessly integrates driver information into the system for insurance processing"
        ],
        impact: "Transformed the driver onboarding process from a manual, paper-based system to a streamlined digital experience, significantly reducing operational costs.",
      },
    {
        title: "Risk Management Center",
        description: " Location Risk Management Platform",
        // demoUrl: "/jackie - port - resin client.mp4",
        demoUrl:"#",
        techStack: ["React", "TypeScript", "Data Visualization", "Express.js", "AWS", "Mongo", "Mandrill"],
        imageUrl:'/resin-client.png',
        timeline:"12 weeks", 
        learnings: [
            "Architected and implemented complete full-stack solution from database to deployment",
            "Designed scalable MongoDB schema and API architecture for complex program management",
            "Integrated multiple AWS services (S3, ECR, Textract, Lambda, SQS) for robust cloud infrastructure",
            "Implemented comprehensive security measures including RBAC, OTP authentication, and encryption",
            "Developed automated document processing pipeline using AWS Textract and SQS"
          ],
          outcomes: [
            "Delivered a secure, scalable client portal handling sensitive auto program data",
            "Created modular, reusable component library for consistent UI/UX",
            "Established robust data flows between MongoDB and client through well-structured APIs",
            "Implemented automated email communications through Mandrill transactional API",
            "Maintained containerized application with streamlined deployment using Docker and Terraform"
          ],
          impact: "Delivered a comprehensive auto program management solution that transformed client operations, combining robust security, automated document processing, and intuitive user experience in a scalable cloud architecture",
          collaborators: [
            {
              name: "Business Leadership",
              role: "Product Vision & Requirements"
            },
            {
              name: "Program Stakeholders",
              role: "Feature Requirements"
            }
          ]
      }, 
      {
        title: "Commercial Insurance App",
        description: "Flexible insurance application framework for multi-app submissions",
        demoUrl: "https://program-submission.vercel.app/form/applicant-information",
        techStack: ["Next.js", "React", "TypeScript", "Node.js"], 
        imageUrl:'/program-submission.png',
        timeline:'1 week',
        collaborators: [
          { name: "Product Team", role: "Requirements & Business Logic" },
          { name: "UI/UX Team", role: "Design System & User Flow" },
          { name: "Insurance Experts", role: "Domain Knowledge & Validation" }, 
          { name : "Client Side Development ", role : "Lead and Sole Developer"}
        ],
        learnings: [
          "Implemented complex multi-step form validation with real-time error handling",
          "Developed dynamic form generation based on business rules and user inputs",
          "Created a robust state management system for handling large insurance applications",
          "Built custom form components that maintain accessibility standards",
        ],
        outcomes: [
          "Reduced application processing time from weeks to hours",
          "Decreased broker to applicant touch points by offering in app rule logic",
          "Improved data accuracy by implementing real-time validation",
        ],
        impact: "Transformed the D&O insurance application process from a manual, error-prone workflow to a streamlined digital experience. The platform significantly reduced underwriting time, improved data accuracy, and enhanced the overall user experience for both insurance brokers and applicants."
      },

      {
        title: "RBAC, Risk Management",
        description: "Comprehensive RBAC system for the client and server",
        demoUrl: "",
        techStack: ["JWTokens", "Sessions", "Node.js"], 
        imageUrl:'/access-control-1.png',
        timeline:'6 weeks',
        collaborators: [
          { name: "System Architect", role: "Technical Design Review" },
          { name: "DevOps Team", role: "Infrastructure Setup" },
          { name: "Lead Developer", role: "Implementation & Testing" }
        ],
        learnings: [
          "Architected hierarchical role structures with inheritance patterns for flexible permission management",
          "Implemented session-based permission boundaries for enhanced security and resource isolation",
          "Developed middleware for role-based route protection and API access control",
          "Created efficient caching mechanisms for role and permission checks to optimize performance"
        ],
        outcomes: [
          "Achieved SOC 2 compliance requirements for access control",
          "Reduced unauthorized access",
          "Implemented real-time permission updates across systems"
        ],
        impact: "Established a secure, scalable RBAC foundation in the Risk Management Center that enabled enterprise-grade access control while maintaining system performance. The implementation significantly reduced security incidents, streamlined user management, and provided audit-ready access tracking across the platform."
      },
      {
        title: "Reminder System, Risk Management",
        description: "Automated compliance monitoring system",
        demoUrl: "",
        techStack: ["AWS Lambda", "Node.js", "Mandrill API", "CloudWatch"],
        imageUrl: '/reminder-system.png',
        timeline: '5 weeks',
        collaborators: [
          { name: "Fleet Management Team", role: "Business Requirements" },
          { name: "DevOps Team", role: "AWS Infrastructure" },
          { name: "Database Team", role: "Data Schema Design" },
          { name: "Lead Developer", role: "Implementation & Testing" }
        ],
        learnings: [
          "Designed event-driven architecture for automated compliance monitoring",
          "Implemented sophisticated notification schedules with AWS CloudWatch",
          "Created fault-tolerant database querying system with retry mechanisms",
          "Developed scalable email templating system for different notification types"
        ],
        outcomes: [
          "Automated monitoring of many driver records daily",
          "Reduced compliance gaps through timely notifications",
          "Achieved near 100% notification delivery rate",
          "Decreased manual compliance checks"
        ],
        impact: "Transformed fleet compliance management by automating the monitoring and notification process. The system proactively manages driver compliance, reducing risk exposure and administrative overhead while ensuring timely resolution of licensing, insurance, and MVR issues."
      }
  ];
  