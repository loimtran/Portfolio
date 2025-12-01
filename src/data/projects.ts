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
    image: "/images/project-1.jpg",
    technologies: ["TypeScript", "Next.js", "Turborepo", "Express.js", "MongoDB", "Tailwind CSS", "Zustand", "ShadCN", "JWT", "Razorpay", "Cloudinary"],
    category: "Full Stack",
    featured: true,
    liveUrl: "https://academy.aayushbharti.in",
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
    image: "/images/project-2.jpg",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Sanity CMS", "Tailwind CSS", "Markdown", "Zod", "Auth.js", "Framer Motion"],
    category: "Full Stack",
    featured: true,
    liveUrl: "https://ab-next-venture.vercel.app",
    period: "Dec 2024 – Jan 2025",
    highlights: [
      "Leveraged Next.js 15 Partial Prerendering and Server Actions for optimal performance",
      "Implemented dynamic content system with Sanity CMS and GROQ querying",
      "Built secure GitHub OAuth authentication with personalized profiles",
      "Delivered multimedia pitch submissions with real-time homepage updates"
    ]
  },
  {
    id: "zalopay-transaction-engine",
    title: "ZaloPay Transaction Engine",
    description: "High-throughput payment transaction engine processing 150k requests per second with real-time fraud detection.",
    longDescription: "Enterprise-scale transaction processing system built for one of Vietnam's leading digital wallets. Features include high-throughput processing, GraphQL Federation, and a real-time fraud detection microservice that saved millions annually.",
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
