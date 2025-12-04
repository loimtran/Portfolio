"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Mail, Briefcase, GraduationCap, Award, Code, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/layout/PageTransition";
import Link from "next/link";
import resumeData from "@/data/resume.json";

export default function ResumePage() {
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
          <FadeIn className="text-center mb-12 md:mb-20">
            <Badge variant="gradient" className="mb-6 px-4 py-1.5">Resume</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Professional <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              {resumeData.summary}
            </p>
            <Button asChild size="lg" variant="gradient" className="group text-base px-8 h-14">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Full Resume
              </a>
            </Button>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <FadeIn className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-8 mb-8 md:mb-12 border border-border/50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-2">{resumeData.name}</h2>
                  <p className="text-base md:text-lg text-primary font-medium">{resumeData.title}</p>
                </div>
                <div className="space-y-2 text-xs md:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="break-words">{resumeData.contact.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span className="break-words">{resumeData.contact.email}</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold">Work Experience</h2>
              </div>
            </FadeIn>

            <div className="relative pl-6 md:pl-8 border-l-2 border-border mb-12 md:mb-16">
              <StaggerContainer className="space-y-12">
                {resumeData.experience.map((exp, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="relative"
                    >
                      <div className="absolute -left-[29px] md:-left-[41px] top-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary border-4 border-background" />
                      <div className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-6 border border-border/50">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-3 md:mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-semibold mb-1">{exp.role}</h3>
                            <p className="text-sm md:text-base text-primary font-medium">{exp.company}</p>
                          </div>
                          <div className="text-xs md:text-sm text-muted-foreground flex-shrink-0">
                            <div className="flex justify-end">{exp.period}</div>
                            <div className="flex justify-end">{exp.location} • {exp.type}</div>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                              <span className="text-primary mt-1 flex-shrink-0">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold">Education</h2>
              </div>
            </FadeIn>

            <StaggerContainer className="space-y-4 md:space-y-6 mb-12 md:mb-16">
              {resumeData.education.map((edu, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.01, y: -2 }}
                    className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-6 border border-border/50"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-3">
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-semibold mb-1">{edu.degree}</h3>
                        <p className="text-sm md:text-base text-primary">{edu.institution}</p>
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground flex-shrink-0">
                        <div className="flex justify-end">{edu.period}</div>
                        <div className="flex justify-end">{edu.location}</div>
                      </div>
                    </div>
                    {edu.highlights.length > 0 && (
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.3}>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Code className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold">Technical Skills</h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-8 mb-12 md:mb-16 border border-border/50">
                <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                  {Object.entries(resumeData.skills).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 md:mb-4">
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs md:text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Award className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold">Achievements</h2>
              </div>
            </FadeIn>

            <StaggerContainer className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {resumeData.achievements.map((achievement, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-6 h-full border border-border/50"
                  >
                    <div className="flex items-start justify-between gap-3 md:gap-4 mb-2">
                      <h3 className="text-base md:text-lg font-semibold flex-1">{achievement.title}</h3>
                      <Badge variant="gradient" className="text-xs shrink-0">
                        {achievement.year}
                      </Badge>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
