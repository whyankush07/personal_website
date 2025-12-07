"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import ProjectLink from "./getlink";
import Loading from "../loading";
import ProjectLinksSkeleton from "@/components/skeleton/ProjectLinkSkeleton";
import { motion } from "framer-motion";

interface Params {
  id: string;
  title: string;
  url: string;
  image: string;
}

export default function ProjectLinks() {
  const [data, setData] = useState<Params[] | null>(null);
  const [loading, setLoading] = useState(true);

  const getLinks = async () => {
    try {
      const res = await axios.get("/api/projects/getlinks");
      setData(res.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch project links:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  if (loading) {
    return <ProjectLinksSkeleton />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        rotate: 0.5,
        transition: { duration: 0.2 }
      }}
      className="relative transition-all duration-300 p-5 rounded-xl border border-border/60 hover:border-border bg-card hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 w-full"
    >
      {/* Subtle corner accent */}
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 bg-[#62c1e5] rounded-full opacity-60"
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

      <div className="flex flex-col space-y-4">
        <motion.div
          className="flex items-center justify-between"
          initial={{ x: -5 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <motion.h3
            className="text-sm text-muted-foreground font-medium tracking-wide"
            whileHover={{
              x: 2,
              transition: { duration: 0.2 }
            }}
          >
            <span className="inline-block" style={{ transform: 'rotate(-0.5deg)' }}>Full</span>
            {' '}
            <span className="inline-block" style={{ transform: 'rotate(0.5deg)' }}>Stack</span>
            {' '}
            <span className="inline-block" style={{ transform: 'rotate(-0.3deg)' }}>Projects</span>
          </motion.h3>
          {data && data.length > 0 && (
            <motion.span
              className="text-xs text-muted-foreground/60 bg-muted px-2 py-0.5 rounded-full"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              {data.length}
            </motion.span>
          )}
        </motion.div>

        {data === null ? (
          <Loading>Loading Projects</Loading>
        ) : data.length === 0 ? (
          <motion.p
            className="text-xs text-muted-foreground/60 py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            No projects yet
          </motion.p>
        ) : (
          <div className="flex flex-col space-y-2">
            {data.map((link, index) => (
              <motion.div
                key={link.id || index}
                initial={{ opacity: 0, x: -20, rotate: -2 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                  ease: "easeOut"
                }}
                whileHover={{
                  x: 4,
                  rotate: index % 2 === 0 ? 0.5 : -0.5,
                  transition: { duration: 0.2 }
                }}
              >
                <ProjectLink params={link} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}