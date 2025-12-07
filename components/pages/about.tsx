'use client';
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RiMailCheckFill } from "react-icons/ri";
import { FaCode, FaLaptopCode, FaTrophy, FaUniversity } from "react-icons/fa";
import { MdSchool, MdSportsBasketball } from "react-icons/md";
import { BsPeopleFill, BsTools } from "react-icons/bs";

import { ScrollAnimationWrapper } from "@/context/ScrollAnimationWrapper";

export default function About() {
  return (
    <div className="flex flex-col space-y-5">
      <ScrollAnimationWrapper>
        <h1 className="md:text-7xl text-3xl font-bold">
          Hi, I&apos;m <span className="text-sky-500 font-bold">Ankush</span>
        </h1>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/ank-bar.JPG"
            alt="about image"
            className=""
            height={520}
            width={520}
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <h1 className="text-5xl text-sky-500 font-bold">
          <span className="text-black dark:text-white">About</span> Me
        </h1>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FaCode className="text-sky-500" /> Professional Summary
        </h2>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <span className="text-slate-500 dark:text-gray-300">
          I am a Full Stack Developer, educator, and agency founder currently in my third year of engineering. 
          With deep technical expertise in Go, Node.js, Next.js, and system design, I&apos;ve built high-concurrency 
          backend systems, microservice architectures, compilers, and real-time applications. My work blends 
          low-level programming with modern product development, and I&apos;ve had the opportunity to teach 
          full stack development at startups and tech communities.
        </span>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <span className="text-slate-500 dark:text-gray-300">
          I don&apos;t just build products — I architect scalable systems with future-proof designs. Through my agency, 
          I&apos;ve successfully delivered full-scale web applications to major freelance clients, spanning e-commerce 
          platforms, SaaS tools, developer utilities, and AI-integrated services — all while managing teams, 
          timelines, and tech stacks independently.
        </span>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FaTrophy className="text-sky-500" /> Achievements
        </h2>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <span className="text-slate-500 dark:text-gray-300">
          Hackathons are another arena where I thrive; I&apos;ve won several, including Asia&apos;s largest design and 
          code hackathon, showcasing my ability to build fast, innovate meaningfully, and present clearly under pressure.
          I&apos;ve also successfully cracked multiple paid internships and worked with major freelance clients through my agency.
        </span>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/alm.JPG"
              alt="about image"
              className="rounded-xl"
              height={320}
              width={280}
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>
        </div>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <h2 className="text-2xl pt-2 pb-1 font-bold flex items-center gap-2">
          <MdSchool className="text-sky-500" /> Education
        </h2>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <span className="text-slate-500 dark:text-gray-300">
          I am currently pursuing a Bachelor&apos;s degree in Computer Science
          from <span className="text-sky-500">GLA University, Mathura</span>. I
          have completed my higher and secondary Education from Rajasthan Board. I
          secured <span className="text-sky-500">97%</span> in my class 10th and{" "}
          <span className="text-sky-500">85.6%</span> in class 12th.
        </span>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BsPeopleFill className="text-sky-500" /> Mentorship & Community
        </h2>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <span className="text-slate-500 dark:text-gray-300">
          Beyond the codebase, I share my journey and insights on social media — helping others break into tech, 
          win hackathons, and shape meaningful careers. I&apos;ve guided juniors, peers, and even seniors — both offline 
          and online — on everything from system architecture to navigating life as a developer.
        </span>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FaLaptopCode className="text-sky-500" /> Why Computer Science?
        </h2>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <span className="text-gray-500 dark:text-gray-300">
          Initially, I was quite confused in life about deciding what to chose as
          a career so I decided to go with the flow. In India, the most followed
          degree is Engineering and I chose it&apos;s most popular branch Computer
          Science. I am quite happy with my decision as I am
          <span className="text-sky-500"> passionate</span> about development
          and <span className="text-sky-500"> love to create nice stuff</span>.
          <span className="text-gray-500 dark:text-gray-300">
            The most beautiful part about being a developer is{" "}
            <span className="text-sky-500"> Creativity</span> and{" "}
            <span className="text-sky-500">Problem solving</span>.
            Because imagining this world without developers is like{" "}
            <span className="text-sky-500">
              imagining a world without oxygen.{" "}
            </span>
            At the end of the day, we are the ones who are responsible for
            making this world a better place. And chaotic at the same time.😉
          </span>
        </span>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <MdSportsBasketball className="text-sky-500" /> Beyond Tech
        </h2>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <span className="text-slate-500 dark:text-gray-300">
          I have a healthy obsession with learning something new everyday which makes me a better developer and a better{" "}
          <span className="text-sky-500">Athlete</span>. I love playing{" "}
          <span className="text-sky-500">Cricket & Badminton</span>.
        </span>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BsTools className="text-sky-500" /> Future Goals
        </h2>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <span className="text-slate-500 dark:text-gray-300">
          Looking ahead, I&apos;m building tools at the intersection of AI, infrastructure, and developer experience, 
          with a long-term goal of empowering others through scalable tech and real-world knowledge.
        </span>
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
              </Link>{" "}
            </motion.span>
          </motion.div>
        </div>
      </ScrollAnimationWrapper>
      <div className="py-3"></div>
    </div>
  );
}