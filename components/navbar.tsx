"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Home,
  User,
  MessageSquareQuote,
  Zap,
  Briefcase,
  Sparkles,
} from "lucide-react";

interface NavItem {
  path: string;
  label: string;
  Icon: any;
  description: string;
}

export const Navbar = () => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navbarVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const isActive = (path: string): boolean => pathname === path;

  const navItems: NavItem[] = [
    {
      path: "/",
      label: "Home",
      Icon: Home,
      description: "Back to home",
    },
    {
      path: "/about",
      label: "About",
      Icon: User,
      description: "Learn about me",
    },
    {
      path: "/testimonials",
      label: "Testimonials",
      Icon: MessageSquareQuote,
      description: "What people say",
    },
    {
      path: "/levelup",
      label: "Resources",
      Icon: Zap,
      description: "Level up your skills",
    },
    {
      path: "/freelance",
      label: "Resume",
      Icon: Briefcase,
      description: "View my work",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="relative h-full w-full"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent opacity-0 md:opacity-100" />
      <ul className="relative flex justify-evenly md:justify-center items-end md:flex-col py-3 md:space-y-6 h-full w-full md:border-r md:border-r-inherit md:dark:border-r-inherit dark:border-slate-800 backdrop-filter backdrop-blur-lg bg-[#edeeeb] dark:bg-slate-900/80">
        {" "}
        {/* Decorative top element for desktop */}
        <motion.div
          className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent rounded-full"
          animate={{
            scaleX: [0.8, 1, 0.8],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {navItems.map((item, index) => {
          const { Icon } = item;
          const active = isActive(item.path);
          const hovered = hoveredItem === item.path;

          return (
            <motion.li
              key={item.path}
              variants={itemVariants}
              className="relative italic font-semibold pr-0 md:pr-8"
            >
              <Link
                href={item.path}
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative block group"
              >
                <motion.div
                  className="relative p-2.5 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  {/* Active/Hover background glow */}
                  {(active || hovered) && (
                    <motion.div
                      layoutId="navbar-glow"
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Icon with animations */}
                  <motion.div
                    animate={
                      active
                        ? {
                            rotate: [0, -10, 10, -10, 0],
                          }
                        : hovered
                          ? {
                              y: [0, -3, 0],
                            }
                          : {}
                    }
                    transition={{
                      duration: active ? 0.5 : 0.4,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon
                      className={`transition-all duration-300 ${
                        active
                          ? "text-blue-500 dark:text-blue-400"
                          : hovered
                            ? "text-blue-400 dark:text-blue-300"
                            : "text-gray-500 dark:text-gray-400"
                      }`}
                      size={24}
                      strokeWidth={active ? 2.5 : 2}
                    />
                  </motion.div>

                  {/* Pulsing dot indicator for active */}
                  {active && (
                    <>
                      <motion.div
                        className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </>
                  )}

                  {/* Sparkle effect on hover */}
                  {hovered && !active && (
                    <motion.div
                      className="absolute -top-0.5 -right-0.5"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Sparkles size={12} className="text-blue-400" />
                    </motion.div>
                  )}

                  {/* Blur glow effect */}
                  {(active || hovered) && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-blue-500/20 dark:bg-blue-400/20 -z-20 filter blur-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: active ? 0.6 : 0.4,
                        scale: 1,
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Active indicator line - Desktop only, positioned on right edge */}
                  {active && (
                    <motion.div
                      className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500 rounded-l-full -mr-[2.05rem]"
                      layoutId="active-indicator"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>

                {/* Tooltip on desktop */}
                <motion.div
                  className="absolute left-full ml-4 whitespace-nowrap hidden md:flex flex-col pointer-events-none z-50"
                  initial={{ opacity: 0, x: -10, scale: 0.95 }}
                  animate={{
                    opacity: hovered ? 1 : 0,
                    x: hovered ? 0 : -10,
                    scale: hovered ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative bg-slate-800 dark:bg-slate-700 text-white px-4 py-2.5 rounded-lg shadow-xl border border-slate-700 dark:border-slate-600">
                    {/* Arrow pointing to icon */}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-slate-800 dark:border-r-slate-700" />

                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">
                        {item.label}
                      </span>
                      {active && (
                        <motion.div
                          className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                    </div>
                    <p className="text-xs text-gray-300 dark:text-gray-400 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </motion.div>

                <span className="sr-only">{item.label}</span>
              </Link>
            </motion.li>
          );
        })}
        {/* Decorative bottom element for desktop */}
        <motion.div
          className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent rounded-full"
          animate={{
            scaleX: [0.8, 1, 0.8],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </ul>
    </motion.div>
  );
};

export default Navbar;
