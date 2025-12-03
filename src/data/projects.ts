export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  period: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "zenith-academy",
    title: "Zenith Academy",
    description: "Interactive Learning & Teaching Platform empowering students and instructors with seamless course management and monetization.",
    longDescription: "A comprehensive learning platform that enables students to enroll, consume, and rate courses while providing instructors with tools to create, manage, and monetize educational content. Features secure authentication, role-based authorization, payment integration, and responsive design.",
    image: "/images/1.png",
    technologies: ["TypeScript", "Next.js", "Turborepo", "Express.js", "MongoDB", "Tailwind CSS", "Zustand", "ShadCN", "JWT", "Razorpay", "Cloudinary"],
    category: "Full Stack",
    featured: true,
    liveUrl: "https://academy.aayushbharti.in",
    githubUrl: "https://github.com/loimtran/Zenith-Academy",
    period: "Oct 2024 – Feb 2025",
    highlights: [
      "Engineered secure authentication and role-based authorization using JWT and Bcrypt",
      "Integrated Razorpay payment gateway for seamless course purchases",
      "Designed responsive, minimalistic UI with Framer Motion animations",
      "Built RESTful APIs for course management, media uploads, and progress tracking"
    ]
  },
  {
    id: "next-venture",
    title: "Next Venture",
    description: "Full-stack startup pitch platform leveraging Next.js 15 features for entrepreneurs to submit and showcase their ideas.",
    longDescription: "A modern platform built with cutting-edge Next.js 15 features including Partial Prerendering, Server Actions, and real-time updates. Entrepreneurs can submit, browse, and showcase startup pitches with dynamic content management powered by Sanity CMS.",
    image: "/images/2.png",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Sanity CMS", "Tailwind CSS", "Markdown", "Zod", "Auth.js", "Framer Motion"],
    category: "Full Stack",
    featured: true,
    liveUrl: "https://ab-next-venture.vercel.app",
    githubUrl: "https://github.com/loimtran/Next-Venture",
    period: "Dec 2024 – Jan 2025",
    highlights: [
      "Leveraged Next.js 15 Partial Prerendering and Server Actions for optimal performance",
      "Implemented dynamic content system with Sanity CMS and GROQ querying",
      "Built secure GitHub OAuth authentication with personalized profiles",
      "Delivered multimedia pitch submissions with real-time homepage updates"
    ]
  },
  {
    id: "starforge",
    title: "StarForge",
    description: "Modern AI SaaS landing page showcasing sleek design, seamless animations, and exceptional user experience.",
    longDescription: "StarForge is a Modern UI/UX website, developed using Next.js, React, and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    image: "/images/6.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ESLint", "Prettier", "React Just Parallax", "Vercel"],
    category: "Frontend",
    featured: true,
    liveUrl: "https://ai-saas-landing-starter.vercel.app",
    githubUrl: "https://github.com/loimtran/AI-Sass-Landing",
    period: "Feb 2025 – May 2025",
    highlights: [
      "Built with modern UI/UX principles showcasing sleek design and seamless animations",
      "Implemented responsive design with Tailwind CSS for optimal user experience",
      "Leveraged Next.js for server-side rendering and optimal performance",
      "Created an animated bento grid layout with parallax effects for engaging interactions"
    ]
  },
  {
    id: "zalopay-transaction-engine",
    title: "ZaloPay Transaction Engine",
    description: "High-throughput payment transaction engine processing 150k requests per second with real-time fraud detection.",
    longDescription: "Enterprise-scale transaction processing system built for one of Vietnam's leading digital wallets. Features include high-throughput processing, GraphQL Federation, and a real-time fraud detection microservice that saved millions annually.",
    liveUrl: "https://www.zalopay.vn",
    image: "/images/project-3.jpg",
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "AWS Lambda@Edge", "CloudFront", "Apollo GraphQL", "Python", "TensorFlow Lite"],
    category: "Backend",
    featured: true,
    period: "Jun 2018 – Feb 2021",
    highlights: [
      "Engineered 150k RPS transaction processing with Node.js and PostgreSQL",
      "Implemented GraphQL Federation using Apollo for scalable API architecture",
      "Developed ML-powered fraud detection saving $18M/year",
      "Introduced CQRS + event-sourcing achieving 100% audit compliance"
    ]
  },
  {
    id: "tiki-page-builder",
    title: "Tiki Page Builder",
    description: "Enterprise CMS-driven reusable page builder enabling non-technical teams to manage content across production sites.",
    longDescription: "A sophisticated content management solution that empowers non-technical teams to build and manage dynamic pages across multiple production sites. Features custom schemas, optimized queries, and advanced rendering strategies.",
    image: "/images/project-4.jpg",
    liveUrl: "https://www.tiki.com",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity", "Contentful", "SSR", "SSG"],
    category: "Frontend",
    featured: false,
    period: "Mar 2021 – Present",
    highlights: [
      "Architected reusable page builder blocks with dynamic configurability",
      "Designed custom schemas and optimized GROQ queries for 40% faster delivery",
      "Implemented SSR/SSG strategies achieving 25% increase in user engagement",
      "Improved Core Web Vitals by 20% through strategic optimization"
    ]
  },
  {
    id: "fpt-software",
    title: "FPT Software",
    description: "A global software development company providing end-to-end IT solutions and services to businesses worldwide.",
    longDescription: "A comprehensive software development company providing end-to-end IT solutions and services to businesses worldwide. Features include a responsive design, a user-friendly interface, and a comprehensive set of features for both students and instructors.",
    image: "/images/8.png",
    liveUrl: "https://www.fptsoftware.com",
    technologies: ["React", "Node.js", "TypeScript", "Tailwind CSS", "Apollo GraphQL", "Redux Toolkit", "Docker", "GitHub Actions", "CI/CD"],
    category: "Full Stack",
    featured: false,
    period: "Jul 2015 – May 2018",
    highlights: [
      "Built high-performance web applications using Next.js, React, and Tailwind CSS, implementing advanced rendering strategies (SSR, SSG) to achieve a 25% increase in user engagement and 20% improvement in Core Web Vitals",
      "Integrated TypeScript across full-stack codebases, reducing production defects by 15% and improving overall code quality and maintainability",
      "Developed secure authentication and authorization system using JWT and Bcrypt"
    ]
  },
  {
    id: "nashtech-online-learning",
    title: "NashTech Online Learning",
    description: "Vietnam's first major online learning platform built with MEAN stack and optimized for performance and SEO.",
    longDescription: "A comprehensive online learning platform built with the MEAN stack, optimized for performance and SEO. Features include a responsive design, a user-friendly interface, and a comprehensive set of features for both students and instructors.",
    image: "/images/7.png",
    liveUrl: "https://www.nashtech.com",
    technologies: ["MEAN Stack", "AngularJS", "TypeScript", "Node.js", "MySQL", "Java Spring"],
    category: "Full Stack",
    featured: false,
    period: "Jan 2013 – Jul 2015",
    highlights: [
      "Built high-performance web applications using MEAN stack and optimized for performance and SEO",
      "Implemented advanced rendering strategies (SSR, SSG) to achieve a 25% increase in user engagement and 20% improvement in Core Web Vitals",
      "Integrated TypeScript across full-stack codebases, reducing production defects by 15% and improving overall code quality and maintainability"
    ]
  },
];
