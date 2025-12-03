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
    id: "portfolio",
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website showcasing projects, skills, and experience with smooth animations and dark mode support.",
    longDescription: "A professional portfolio website built with Next.js 15 and React 19, featuring a modern design with smooth animations powered by Framer Motion. Includes project showcase with filtering, resume display, contact form, and full dark mode support. Optimized for performance with server-side rendering and responsive design.",
    image: "/images/4.png",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "ShadCN UI", "Radix UI", "next-themes", "Lucide Icons"],
    category: "Frontend",
    featured: true,
    liveUrl: "https://loi.tran.dev",
    githubUrl: "https://github.com/loimtran/portfolio",
    period: "Jun 2025 – Sep 2025",
    highlights: [
      "Built with Next.js 15 and React 19 for optimal performance and modern features",
      "Implemented smooth page transitions and animations using Framer Motion",
      "Created responsive design with Tailwind CSS and dark mode support",
      "Developed reusable UI components with ShadCN and Radix UI for accessibility"
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
    id: "enterprise-banking-modules",
    title: "Enterprise Banking Modules",
    description: "Secure banking solutions for HSBC & Standard Chartered with optimized performance and robust security.",
    longDescription: "Critical banking infrastructure components built for major international banks. Features include secure authentication, optimized database queries, and comprehensive audit trails.",
    image: "/images/project-5.jpg",
    liveUrl: "https://www.10xbanking.com",
    technologies: ["Java Spring", "AngularJS", "MySQL", "MEAN Stack"],
    category: "Full Stack",
    featured: false,
    period: "Jan 2013 – Jun 2015",
    highlights: [
      "Built secure banking modules for HSBC & Standard Chartered",
      "Optimized SQL queries reducing page load time by 67%",
      "Shipped 18 production applications using MEAN stack",
      "Developed Vietnam's first major online learning platform"
    ]
  }
];

export const categories = ["All", "Full Stack", "Frontend", "Backend"];
