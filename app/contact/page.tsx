"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle, Loader2, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/layout/PageTransition";
import resumeData from "@/data/resume.json";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: resumeData.contact.email,
    href: `mailto:${resumeData.contact.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: resumeData.contact.phone,
    href: `tel:${resumeData.contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: resumeData.contact.location,
    href: null,
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            <Badge variant="gradient" className="mb-6 px-4 py-1.5">Contact</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or just want to chat? I&apos;d love to hear from you.
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-5 gap-8 md:gap-12 max-w-6xl mx-auto">
            <FadeIn direction="left" className="lg:col-span-2">
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Get in Touch</h2>
                  <div className="space-y-4 md:space-y-5">
                    {contactInfo.map((info) => (
                      <motion.div
                        key={info.label}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-3 md:gap-4 group"
                      >
                        <div className="p-3 md:p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <info.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs md:text-sm text-muted-foreground mb-1">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-sm md:text-base font-medium hover:text-primary transition-colors break-words"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm md:text-base font-medium break-words">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Connect on Social</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 md:p-4 rounded-xl bg-muted hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all duration-300"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5 md:h-6 md:w-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-6 border border-border/50">
                  <h3 className="font-semibold mb-2 text-base md:text-lg">Response Time</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    I typically respond within 24-48 hours. For urgent matters,
                    feel free to reach out via phone.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" className="lg:col-span-3">
              <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-border/50">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle className="h-10 w-10 text-green-500" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. I&apos;ll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm md:text-base font-medium"
                          >
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="h-12 md:h-14"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm md:text-base font-medium"
                          >
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="h-12 md:h-14"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="text-sm md:text-base font-medium"
                        >
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="What's this about?"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="h-12 md:h-14"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm md:text-base font-medium"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project..."
                          value={formState.message}
                          onChange={handleChange}
                          required
                          className="min-h-[160px] md:min-h-[180px]"
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        variant="gradient"
                        className="w-full text-base h-14"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
