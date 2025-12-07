"use client"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface Params {
  id: string;
  title: string;
  url: string;
  image: string;
}

interface ProjectLinkProps {
  params: Params;
}

export default function ProjectLink({ params }: ProjectLinkProps) {
  return (
    <Link 
      href={params.url} 
      target="_blank"
      className="group flex items-center justify-between text-sm font-medium"
    >
      <span className="text-gray-800 dark:text-gray-200">
        {params.title}
      </span>
      <motion.div
        animate={{ x: [0, 3, 0] }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaArrowRight 
          className="text-gray-400 group-hover:text-sky-500 transform group-hover:translate-x-1 transition-all" 
          size={14}
        />
      </motion.div>
    </Link>
  );
}