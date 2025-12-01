"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, Heart, Zap, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/layout/PageTransition";
import Link from "next/link";
import resumeData from "@/data/resume.json";

const values = [
  {
    icon: Zap,
    title: "Performance Obsessed",
    description: "I believe in building applications that are blazingly fast and provide seamless user experiences.",
  },
  {
    icon: Target,
    title: "Quality Focused",
    description: "Every line of code matters. I write clean, maintainable, and well-tested code.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaboration drives innovation. I thrive in environments where ideas are shared freely.",
  },
  {
    icon: Heart,
    title: "User Centric",
    description: "The end user is always the priority. I design with empathy and accessibility in mind.",
  },
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Framer Motion", category: "Animation" },
  { name: "GraphQL", category: "API" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Vercel", category: "Platform" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
        <div className="absolute inset-0">
          <div className="hero-glow top-0 left-1/4 -translate-x-1/2" />
          <div className="accent-glow top-1/2 right-0" />
          <div className="absolute top-20 left-[10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-[10%] w-[32rem] h-[32rem] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-32">
            <FadeIn direction="left">
              <div className="relative flex items-center justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
                  {/* Animated gradient glow background */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-2xl"
                  />
                  
                  {/* Outer ring with gradient border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                    <div className="w-full h-full rounded-full bg-background" />
                  </div>
                  
                  {/* Image container */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl"
                  >
                    <Image
                      src="/images/self.jpeg"
                      alt={resumeData.name}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                    />
                    {/* Subtle inner shadow for depth */}
                    <div className="absolute inset-0 rounded-full ring-4 ring-black/10" />
                  </motion.div>
                  
                  {/* Decorative elements */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-background shadow-lg"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, type: "spring" }}
                    className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-background shadow-lg"
                  />
                </div>
                
                {/* Status badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass-card rounded-2xl p-3 md:p-4 shadow-xl border border-border/50 backdrop-blur-md"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"
                    />
                    <span className="text-xs md:text-sm font-medium">Available for work</span>
                  </div>
                </motion.div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <Badge variant="gradient" className="mb-6 px-4 py-1.5">About Me</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
                Passionate about crafting{" "}
                <span className="gradient-text">exceptional</span> digital experiences
              </h1>
              <div className="space-y-4 md:space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  With over 10 years of experience in software development, I&apos;ve had the
                  privilege of working with companies ranging from innovative startups to
                  enterprise-level corporations across Vietnam and internationally.
                </p>
                <p>
                  My journey began at FPT University, where I graduated in the top 3% of my
                  cohort. Since then, I&apos;ve built high-throughput transaction engines
                  processing 150k RPS, architected CMS-driven page builders serving millions
                  of users, and developed ML-powered fraud detection systems saving millions
                  annually.
                </p>
                <p>
                  Today, I specialize in full-stack development with a focus on Next.js, React,
                  TypeScript, and Node.js. I&apos;m passionate about clean architecture, performance
                  optimization, and creating intuitive user experiences.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6 mt-8">
                <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                  Ho Chi Minh City, Vietnam
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                  10+ Years Experience
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild variant="gradient" size="lg" className="text-base px-8 h-14">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8 h-14 border-2">
                  <Link href="/resume">View Resume</Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center mb-12 md:mb-20">
            <Badge variant="gradient" className="mb-6 px-4 py-1.5">Core Values</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              What Drives Me
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These principles guide my approach to every project and collaboration.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative p-6 md:p-8 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-500 h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <value.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{value.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mb-12 md:mb-20">
            <Badge variant="gradient" className="mb-6 px-4 py-1.5">Technologies</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              My Tech Stack
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The tools and technologies I use to bring ideas to life.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="glass-card rounded-3xl p-6 md:p-8 lg:p-10 border border-border/50">
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 md:px-5 py-2 md:py-2.5 rounded-xl bg-muted hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all duration-300 cursor-default"
                  >
                    <span className="font-medium text-sm md:text-base">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
