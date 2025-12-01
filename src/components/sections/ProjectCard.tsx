"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
  featured?: boolean;
}

export function ProjectCard({ project, index = 0, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative",
        featured && "md:col-span-2"
      )}
    >
      <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card hover:shadow-2xl transition-all duration-500 h-full group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        <div className={cn(
          "relative z-10 p-6 md:p-8 lg:p-10 flex flex-col h-full",
          featured && "md:flex-row md:items-center md:gap-8"
        )}>
          <div className={cn(
            "flex-1 space-y-4",
            featured && "md:space-y-6"
          )}>
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <Badge variant="gradient" className="mb-2">
                  {project.category}
                </Badge>
                <h3 className={cn(
                  "font-bold tracking-tight",
                  featured ? "text-2xl md:text-3xl" : "text-xl"
                )}>
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.period}
                </p>
              </div>
            </div>

            <p className={cn(
              "text-muted-foreground",
              featured ? "text-base" : "text-sm line-clamp-3"
            )}>
              {featured ? project.longDescription : project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, featured ? 8 : 5).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-muted text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > (featured ? 8 : 5) && (
                <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-muted text-muted-foreground">
                  +{project.technologies.length - (featured ? 8 : 5)} more
                </span>
              )}
            </div>

            {featured && (
              <ul className="space-y-2 mt-4">
                {project.highlights.slice(0, 3).map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={cn(
            "flex gap-3 mt-6",
            featured && "md:mt-0 md:flex-col md:justify-center"
          )}>
            {project.liveUrl && (
              <Button
                asChild
                variant="default"
                size="sm"
                className="gap-2"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
