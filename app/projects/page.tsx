"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { FadeIn } from "@/components/layout/PageTransition";
import { projects, categories } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
            <Badge variant="gradient" className="mb-6 px-4 py-1.5">Portfolio</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A curated collection of projects showcasing my expertise in building
              scalable, high-performance web applications.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full transition-all duration-300 text-sm md:text-base px-4 md:px-6 h-9 md:h-10",
                  activeCategory === category && "shadow-lg scale-105"
                )}
              >
                {category}
              </Button>
            ))}
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  featured={project.featured && index === 0}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 md:py-24"
            >
              <p className="text-base md:text-lg text-muted-foreground">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
