"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

interface NavItem {
  path: string;
  label: string;
  icon: (active: boolean, hovered: boolean) => JSX.Element;
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

  const getIconColor = (path: string): string => {
    if (isActive(path)) return "text-blue-500";
    if (hoveredItem === path) return "text-blue-400";
    return "text-gray-500 dark:text-gray-400";
  };

  const navItems: NavItem[] = [
    {
      path: "/",
      label: "Home",
      icon: (active, hovered) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={`${getIconColor("/")} transition-all duration-300 ease-in-out`}
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      path: "/about",
      label: "About",
      icon: (active, hovered) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={`${getIconColor("/about")} transition-all duration-300 ease-in-out`}
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      ),
    },
    {
      path: "/testimonials",
      label: "Testimonials",
      icon: (active, hovered) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={`${getIconColor("/testimonials")} transition-all duration-300 ease-in-out`}
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      path: "/levelup",
      label: "Resources",
      icon: (active, hovered) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={`${getIconColor("/levelup")} transition-all duration-300 ease-in-out`}
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M12 18v-6" />
          <path d="M9 15l3-3 3 3" />
        </svg>
      ),
    },
    {
      path: "/freelance",
      label: "Resume",
      icon: (active, hovered) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={`${getIconColor("/freelance")} transition-all duration-300 ease-in-out`}
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </svg>
      ),
    },
    // {
    //   path: "/kaizen",
    //   label: "Blogs",
    //   icon: (active, hovered) => (
    //     <svg
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       className={`${getIconColor("/kaizen")} transition-all duration-300 ease-in-out`}
    //       xmlns="http://www.w3.org/2000/svg"
    //       stroke="currentColor"
    //       fill="none"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    //       <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    //     </svg>
    //   ),
    // },
  ];

  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="flex justify-evenly md:justify-center items-end md:flex-col py-3 md:space-y-10 h-full w-full max-sm:space-x-7 md:border-r md:border-r-inherit md:dark:border-r-inherit dark:border-slate-800 backdrop-filter backdrop-blur-lg bg-[#edeeeb] dark:bg-slate-900/80"
    >
      {navItems.map((item) => (
        <motion.li
          key={item.path}
          variants={itemVariants}
          className="italic font-semibold md:pr-8"
        >
          <Link
            href={item.path}
            onMouseEnter={() => setHoveredItem(item.path)}
            onMouseLeave={() => setHoveredItem(null)}
            className="relative block"
          >
            <motion.div
              className="relative p-2 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              {item.icon(isActive(item.path), hoveredItem === item.path)}

              {(isActive(item.path) || hoveredItem === item.path) && (
                <motion.div
                  layoutId="glow"
                  className="absolute inset-0 rounded-lg bg-blue-500/10 dark:bg-blue-400/20 -z-10 filter blur-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}

              {(isActive(item.path) || hoveredItem === item.path) && (
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-60"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </motion.div>

            <motion.span
              className="absolute left-full ml-2 whitespace-nowrap hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, x: -5 }}
              animate={{
                opacity: hoveredItem === item.path ? 1 : 0,
                x: hoveredItem === item.path ? 0 : -5,
              }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </motion.span>

            <span className="sr-only">{item.label}</span>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Navbar;