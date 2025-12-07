'use client';
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { RiMailCheckFill } from "react-icons/ri";

import Sociallinks from "@/components/includes/social";
import TypewriterMain from "@/components/library/type";
import TwoGhostsSkeleton from "@/components/skeleton/TwoGhostsSkeleton";
import ApplicationGridSkeleton from "@/components/skeleton/ApplicationGridSkeleton";
import ProfileCover from "@/components/includes/profileCover";
import Instagram, { Testimonials, YouTube } from "@/components/footer/SocialCards";

// Dynamic imports
const GetALlLinks = dynamic(() => import("@/components/projects/ProjectLinks"));
const TwoGhosts = dynamic(() => import("@/components/ghost/twoghosts"), {
  ssr: false,
  loading: () => <TwoGhostsSkeleton />
});
const LazyIframe = dynamic(() => import("@/components/includes/youtubeIntro"), {
  ssr: false
});
const ApplicationPreview = dynamic(() => import("@/components/applications/applicationPreview"), {
  ssr: false,
  loading: () => <ApplicationGridSkeleton />
});
const FreelanceProjectsLink = dynamic(() => import("@/components/freelance/Freelance"), {
  ssr: false
});

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ScrollAnimationWrapper = ({ children, direction = 'up' }: ScrollAnimationWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default function Homepage() {
  return (
    <div className="flex flex-col space-y-5">
      <ScrollAnimationWrapper>
        <ProfileCover
          coverImageSrcs={["imagine-win.webp"]}
          profileImageSrc="/Professional.jpg"
          altCover="Cover image"
          altProfile="Profile picture"
        />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <div className="pt-8">
          <div className="flex justify-start text-start pt-8">
            <h1 className="font-semibold text-lg">
              Hi, I am <span className="text-sky-500">Ankush</span>
            </h1>
          </div>
          <div className="max-md:hidden"><TypewriterMain /></div>

          <h1 className="text-5xl font-bold md:hidden">
            I make <span className="text-teal-500">Full Stack</span> Web
            Applications
          </h1>
        </div>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <p className="text-gray-600 dark:text-gray-300">
          Developer, Mentor, Freelancer, Fitness Enthusiast, Explorer
        </p>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <p className="text-gray-600 dark:text-gray-300">
          Hey, I&apos;m Ankush — a third-year engineering student who lifts weights, hits smashes in badminton,
          codes like crazy, and travels whenever I can. I run a freelancing agency, teach full stack development,
          and build products from scratch that range from AI video generators to terminal emulators.
        </p>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <p className="text-gray-600 dark:text-gray-300">
          Whether it&apos;s guiding someone on cracking their first internship, leading a hackathon-winning team,
          or teaching system design to early-stage startups, I thrive when I&apos;m creating impact. You&apos;ll find me
          debugging Go routines one moment and recording tech content the next — all while helping folks level up
          in tech, career, and mindset.
        </p>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <p className="text-gray-600 dark:text-gray-300">
          Feel free to connect with me on my socials:
        </p>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <Sociallinks />
      </ScrollAnimationWrapper>

      {/* Mobile-only components */}
      <div className="md:hidden">
        <ScrollAnimationWrapper>
          <GetALlLinks />
        </ScrollAnimationWrapper>
      </div>
      <div className="md:hidden">
        <ScrollAnimationWrapper>
          <FreelanceProjectsLink />
        </ScrollAnimationWrapper>
      </div>
      <div className="md:hidden">
        <ScrollAnimationWrapper>
          <Testimonials />
        </ScrollAnimationWrapper>
      </div>
      <div className="md:hidden">
        <ScrollAnimationWrapper>
          <Instagram />
        </ScrollAnimationWrapper>
      </div>
      <div className="md:hidden">
        <ScrollAnimationWrapper>
          <YouTube />
        </ScrollAnimationWrapper>
      </div>

      <ScrollAnimationWrapper direction="left">
        <ApplicationPreview />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <TwoGhosts />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <div className="pt-4 rounded-md max-w-screen md:max-w-1/2 flex items-center justify-center">
          <LazyIframe />
        </div>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <div className="py-6 flex space-x-6 space-y-4 flex-wrap">
          <motion.div
            className="w-fit px-4 py-4 dark:text-slate-300 text-slate-500 dark:bg-inherit flex flex-col shadow-md dark:shadow-blue-950 bg-white rounded-sm"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Want to connect with me via Mail?
            <motion.span
              className="text-sky-400 flex space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <RiMailCheckFill />
              <Link href="mailto:ankushsingh.dev@gmail.com">
                ankushsingh.dev@gmail.com
              </Link>
            </motion.span>
          </motion.div>
        </div>
      </ScrollAnimationWrapper>
      <div className="py-3"></div>
    </div>
  );
}