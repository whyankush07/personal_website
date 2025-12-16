"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Briefcase,
  MessageSquareQuote,
  BookOpen,
  Calendar,
  Building2,
  GraduationCap,
  X,
  Sparkles,
} from "lucide-react";

interface IntentOption {
  id: string;
  title: string;
  description: string;
  icon: any;
  href: string;
  accentColor: string;
}

export const IntentPopup = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  // Show popup on first visit
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("portfolio-intent-shown");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("portfolio-intent-shown", "true");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleOptionClick = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  const intentOptions: IntentOption[] = [
    {
      id: "work",
      title: "See My Work",
      description: "Explore projects & portfolio",
      icon: Briefcase,
      href: "/freelance",
      accentColor: "#62c1e5",
    },
    {
      id: "testimonials",
      title: "View Testimonials",
      description: "What people say about me",
      icon: MessageSquareQuote,
      href: "/testimonials",
      accentColor: "#a0d9ef",
    },
    {
      id: "blogs",
      title: "Read My Blogs",
      description: "Insights & knowledge sharing",
      icon: BookOpen,
      href: "https://blog.whyankush.wtf",
      accentColor: "#7ec8e3",
    },
    {
      id: "booking",
      title: "Book 1:1 Session",
      description: "Schedule personalized consultation",
      icon: Calendar,
      href: "https://superprofile.bio/bookings/howankush07",
      accentColor: "#4fb3d4",
    },
    {
      id: "client",
      title: "I'm a Client",
      description: "Looking for professional services",
      icon: Building2,
      href: "/freelance",
      accentColor: "#3da5c7",
    },
    {
      id: "student",
      title: "I'm a Student",
      description: "Learning resources & guidance",
      icon: GraduationCap,
      href: "/levelup",
      accentColor: "#2b97ba",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Blurry overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-xl"
          />

          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Main popup card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-3xl bg-card/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-border/50 overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Top gradient decoration */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500" />

            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted/80 hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </motion.button>

            {/* Header section */}
            <div className="relative pt-12 pb-8 px-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 mb-6 border border-blue-500/30"
              >
                <Sparkles className="w-8 h-8 text-blue-500" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold text-foreground mb-3"
              >
                Welcome! 👋
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground text-lg max-w-md mx-auto"
              >
                What brings you here today? Choose an option to get started.
              </motion.p>
            </div>

            {/* Options grid */}
            <div className="px-8 pb-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {intentOptions.map((option) => {
                  const Icon = option.icon;
                  const isHovered = hoveredOption === option.id;

                  return (
                    <motion.button
                      key={option.id}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ scale: 1.03, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      onMouseEnter={() => setHoveredOption(option.id)}
                      onMouseLeave={() => setHoveredOption(null)}
                      onClick={() => handleOptionClick(option.href)}
                      className="relative group text-left p-6 rounded-2xl border-2 border-border/60 bg-card hover:border-opacity-100 transition-all duration-300 overflow-hidden"
                      style={{
                        borderColor: isHovered ? option.accentColor : undefined,
                      }}
                    >
                      {/* Animated gradient background on hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle at center, ${option.accentColor}15 0%, transparent 70%)`,
                        }}
                      />

                      {/* Corner accent */}
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-60"
                        style={{ backgroundColor: option.accentColor }}
                        animate={{
                          scale: isHovered ? [1, 1.3, 1] : 1,
                          opacity: isHovered ? [0.6, 1, 0.6] : 0.6,
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: isHovered ? Infinity : 0,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Icon with glow */}
                      <div className="relative mb-4">
                        <motion.div
                          className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                          style={{ backgroundColor: option.accentColor }}
                        />
                        <div
                          className="relative w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300"
                          style={{
                            backgroundColor: `${option.accentColor}15`,
                            borderColor: `${option.accentColor}30`,
                          }}
                        >
                          <Icon
                            className="transition-all duration-300"
                            style={{ color: option.accentColor }}
                            size={24}
                            strokeWidth={2}
                          />
                        </div>
                      </div>

                      {/* Text content */}
                      <div className="relative">
                        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-foreground transition-colors">
                          {option.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {option.description}
                        </p>
                      </div>

                      {/* Hover shine effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        initial={{ x: "-100%" }}
                        whileHover={{
                          x: "100%",
                          transition: { duration: 0.6, ease: "easeInOut" },
                        }}
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                        }}
                      />
                    </motion.button>
                  );
                })}
              </motion.div>

              {/* Skip button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-center"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                >
                  Skip for now
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntentPopup;