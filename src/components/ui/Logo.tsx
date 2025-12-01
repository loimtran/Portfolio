"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, showText = true, size = "md" }: LogoProps) {

  const iconGradientId = "loi-dev-logo-gradient";
  
  const sizeClasses = {
    sm: "h-7 w-7",
    md: "h-9 w-9",
    lg: "h-14 w-14",
  };

  const textSizes = {
    sm: "text-base font-semibold",
    md: "text-lg md:text-xl font-bold",
    lg: "text-2xl md:text-3xl font-bold",
  };

  const iconPadding = {
    sm: "p-1",
    md: "p-1.5",
    lg: "p-2",
  };

  return (
    <Link 
      href="/" 
      className={cn(
        "group inline-flex items-center gap-2.5 md:gap-3 transition-all duration-300",
        className
      )}
      aria-label="Home"
    >
      <motion.div
        whileHover={{ scale: 1.08, rotate: 3 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/30",
          sizeClasses[size],
          iconPadding[size]
        )}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md" />
        
        {/* Icon container */}
        <div className="relative flex items-center justify-center w-full h-full">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={`${iconGradientId}-main`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f0f9ff" />
              </linearGradient>
            </defs>
            {/* Clean modern logo - minimalist design */}
            <rect
              x="6"
              y="6"
              width="20"
              height="20"
              rx="4"
              fill={`url(#${iconGradientId}-main)`}
              className="transition-all duration-300"
            />
            <rect
              x="10"
              y="10"
              width="12"
              height="12"
              rx="2"
              fill="white"
              fillOpacity="0.4"
              className="transition-all duration-300"
            />
            <circle
              cx="16"
              cy="16"
              r="3"
              fill="white"
              fillOpacity="0.9"
              className="transition-all duration-300"
            />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
}

