'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaTrophy } from "react-icons/fa";
import { MdSchool, MdSportsBasketball } from "react-icons/md";
import { BsPeopleFill, BsTools } from "react-icons/bs";

import { ScrollAnimationWrapper } from "@/context/ScrollAnimationWrapper";
import EmailCTA from "../footer/EmailCTA";

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
            alt="Ankush portrait"
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
          I’m a full-stack developer, educator, and builder currently in my third
          year of engineering. Most of my real learning didn’t come from
          classrooms, but from building things that broke, fixing them under
          pressure, and taking responsibility for outcomes.
        </span>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <span className="text-slate-500 dark:text-gray-300">
          I enjoy working close to fundamentals — understanding how systems think,
          scale, and fail. Over time, this led me to build backend systems,
          real-time applications, and full-scale web platforms, while also
          teaching full-stack development in startup and community environments.
        </span>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FaTrophy className="text-sky-500" /> What I’ve Been Doing
        </h2>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <span className="text-slate-500 dark:text-gray-300">
          I’ve worked with freelance clients and teams where I handled
          architecture, timelines, and execution end-to-end. That experience
          taught me how to think long-term, make trade-offs, and stay calm when
          things go wrong.
        </span>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <span className="text-slate-500 dark:text-gray-300">
          Hackathons became my proving ground. Tight deadlines, real pressure, and
          no room for excuses. I’ve won multiple hackathons, including Asia’s
          largest design-and-code hackathon, and cracked paid internships by
          focusing on execution over noise.
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
              alt="Ankush achievement moment"
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
          I’m pursuing a Bachelor’s degree in Computer Science from{" "}
          <span className="text-sky-500">GLA University, Mathura</span>. I secured{" "}
          <span className="text-sky-500">97%</span> in class 10th and{" "}
          <span className="text-sky-500">85.6%</span> in class 12th, but what
          mattered more was learning how to think independently and apply
          knowledge beyond the syllabus.
        </span>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BsPeopleFill className="text-sky-500" /> Mentorship & Community
        </h2>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <span className="text-slate-500 dark:text-gray-300">
          I actively mentor juniors, peers, and early-stage developers — both
          offline and online. I document my journey publicly, not to preach, but
          to help others avoid mistakes I’ve already paid for.
        </span>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FaLaptopCode className="text-sky-500" /> Why Computer Science
        </h2>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <span className="text-gray-500 dark:text-gray-300">
          I didn’t start with clarity. I started by going with the flow. Over time,
          Computer Science grew on me because it rewards problem-solving,
          creativity, and responsibility. Developers quietly shape the modern
          world, and that balance keeps me invested.
        </span>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <MdSportsBasketball className="text-sky-500" /> Beyond Tech
        </h2>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <span className="text-slate-500 dark:text-gray-300">
          I train my body as seriously as I train my mind. Sports, strength, and
          movement keep me disciplined, calm, and resilient. Cricket and
          badminton are part of how I stay sharp.
        </span>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BsTools className="text-sky-500" /> Looking Ahead
        </h2>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <span className="text-slate-500 dark:text-gray-300">
          I’m focused on building depth — in skill, character, and thinking. I’m
          not in a rush. Technology is my medium, but growth is the real project.
        </span>
      </ScrollAnimationWrapper>

      <EmailCTA />
      <div className="py-3" />
    </div>
  );
}
