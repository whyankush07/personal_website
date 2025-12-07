'use client';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export function YouTube() {
  return (
    <SocialCard
      title="I document hackathons and college life (YouTube)"
      username="@howankush07"
      href="https://youtube.com/@howankush07"
      platform="YouTube"
      accentColor="#FF0000"
      accentPosition="top-right"
      rotation={-1.5}
    />
  );
}

export default function Instagram() {
  return (
    <SocialCard
      title="Instagram Profile (20k+)"
      username="@howankush07"
      href="https://instagram.com/howankush07"
      platform="Instagram"
      accentColor="#E4405F"
      accentPosition="bottom-left"
      rotation={1.2}
    />
  );
}

export const Testimonials = () => {
  return (
    <SocialCard
      title="Client Reviews"
      username="Testimonials"
      href="/freelance"
      platform="Personal Website"
      accentColor="#a0d9ef"
      accentPosition="top-left"
      rotation={-0.8}
    />
  );
}

export const Feedbacks = () => {
  return (
    <SocialCard
      title="Student Feedback"
      username="Feedback"
      href="/testimonials"
      platform="Personal Website"
      accentColor="#62c1e5"
      accentPosition="bottom-right"
      rotation={1.5}
    />
  );
}


interface SocialCardProps {
  title: string;
  username: string;
  platform: string;
  href: string;
  accentColor?: string;
  accentPosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  rotation?: number;
}

const SocialCard = ({ 
  title, 
  username, 
  platform, 
  href,
  accentColor = "#62c1e5",
  accentPosition = "top-right",
  rotation = 0
}: SocialCardProps) => {
  
  const accentPositions = {
    'top-right': '-top-1 -right-1',
    'top-left': '-top-1 -left-1',
    'bottom-right': '-bottom-1 -right-1',
    'bottom-left': '-bottom-1 -left-1'
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, rotate: rotation }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ 
        rotate: rotation * 0.3,
        scale: 1.01,
        transition: { duration: 0.2 }
      }}
      className="relative transition-all duration-300 p-5 rounded-xl border border-border/60 hover:border-border bg-card hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 w-full"
    >
      {/* Accent dot with unique position for each card */}
      <motion.div 
        className={`absolute ${accentPositions[accentPosition]} w-2.5 h-2.5 rounded-full opacity-70`}
        style={{ backgroundColor: accentColor }}
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{ 
          duration: 2 + Math.random(),
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 0.5
        }}
      />
      
      <div className="flex flex-col space-y-3">
        <motion.span 
          className="text-sm text-muted-foreground"
          style={{ display: 'inline-block' }}
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          {title.split(' ').map((word, i) => (
            <span 
              key={i} 
              className="inline-block mr-1"
              style={{ transform: `rotate(${(i % 2 === 0 ? 0.3 : -0.3)}deg)` }}
            >
              {word}
            </span>
          ))}
        </motion.span>
        
        <Link 
          target={href.startsWith('http') ? "_blank" : "_self"}
          href={href}
          className="group flex items-center justify-between text-sm font-medium"
        >
          <motion.span 
            className="text-foreground group-hover:text-[#62c1e5] transition-colors"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            {username}
          </motion.span>
          
          <motion.div
            className="relative"
            animate={{ x: [0, 3, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ 
              x: 4, 
              rotate: -15,
              transition: { duration: 0.2, type: "spring", stiffness: 300 }
            }}
          >
            <FaArrowRight 
              className="text-muted-foreground group-hover:text-[#62c1e5] transition-colors" 
              size={14}
            />
            {/* Arrow trail effect on hover */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: [0, 0.5, 0], x: [0, -8, -16] }}
              transition={{ duration: 0.6 }}
            >
              <FaArrowRight 
                className="text-[#62c1e5]"
                size={14}
              />
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};