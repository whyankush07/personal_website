'use client';
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RiMailCheckFill, RiFileDownloadLine } from "react-icons/ri";
import { FaCode, FaUserTie, FaHandshake, FaLaptopCode } from "react-icons/fa";
import { MdConnectWithoutContact, MdOutlineWork } from "react-icons/md";
import { BsTools, BsBriefcase } from "react-icons/bs";
import CV from "@/components/includes/cv";
import GetSingleProjectsSkeleton from "@/components/skeleton/TwoProjectSkeleton";
import { useSession } from "next-auth/react";
import Testimonials from "../freelance/testimonials";
import { ScrollAnimationWrapper } from "@/context/ScrollAnimationWrapper";
import EmailCTA from "../footer/EmailCTA";

const GetALlLinks = dynamic(() => import("@/components/projects/ProjectLinks"), { ssr: false })
const Skills = dynamic(() => import("@/components/includes/skills"), { ssr: false })
const Form = dynamic(() => import("@/components/includes/form"), { ssr: false })
const ApplicationGrid = dynamic(() => import("@/components/applications/applicationGrid"), { ssr: false })
const GetAllProjects = dynamic(() => import("@/components/projects/getallprojects"), { ssr: false, loading: () => <GetSingleProjectsSkeleton /> })
const FreelanceProjectsLink = dynamic(() => import("@/components/freelance/Freelance"), { ssr: false })

export default function Freelance() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="flex flex-col space-y-5">
      {/* Header Section */}
      <ScrollAnimationWrapper>
        <div className="flex flex-col space-y-3">
          <h1 className="text-sky-500 text-6xl font-bold">Professional Journey</h1>
          <div className="h-1 w-20 bg-sky-500 rounded-full"></div>
          <p className="text-gray-600 dark:text-slate-400 text-lg leading-relaxed max-w-3xl">
            Precision over noise. Systems over shortcuts.
            <br />
            Everything here is built, tested, shipped, and backed by real work.
          </p>
        </div>
      </ScrollAnimationWrapper>

      {/* Professional Summary */}
      <ScrollAnimationWrapper direction="left">
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md dark:shadow-blue-950/20">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
            <FaUserTie className="text-sky-500" /> Professional Overview
          </h2>
          <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
            I build full-stack systems that behave like they were engineered, not assembled.
            High-concurrency backends, distributed architectures, scalable applications, and clean interfaces that feel effortless on the outside while running complex orchestration underneath.
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-gray-600 dark:text-slate-300 font-medium">My work has covered:</p>
            <ul className="text-gray-600 dark:text-slate-300 space-y-1 ml-4">
              <li>• Fast, resilient API systems</li>
              <li>• Multi-service infrastructure</li>
              <li>• Real-time features with zero drama</li>
              <li>• Production-grade applications used by real users, not just demo videos</li>
            </ul>
          </div>
          <p className="text-gray-600 dark:text-slate-300 leading-relaxed mt-4">
            Third year of engineering or not, the portfolio speaks louder than the calendar.
          </p>
        </div>
      </ScrollAnimationWrapper>

      {/* Proof of Work */}
      <ScrollAnimationWrapper direction="right">
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md dark:shadow-blue-950/20">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
            <BsTools className="text-sky-500" /> Proof of Work
          </h2>
          <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            You judge a builder by what he&apos;s built.
            <br />
            So here&apos;s the work, not the promises:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-slate-200">Applications shipped</h3>
              <p className="text-gray-600 dark:text-slate-300 text-sm">
                Real products solving real problems.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-slate-200">Projects delivered</h3>
              <p className="text-gray-600 dark:text-slate-300 text-sm">
                From startups to individual founders, I&apos;ve built systems that scaled beyond their expectations.
                <br />
                No templates. No &quot;MVP but unstable.&quot;
                <br />
                Just tight engineering with predictable performance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-slate-200">Freelance Builds</h3>
              <p className="text-gray-600 dark:text-slate-300 text-sm">
                Each project reflects one philosophy: make it clean, make it fast, make it last.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>

      {/* Social Media Engagement */}
      <ScrollAnimationWrapper direction="left">
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md dark:shadow-blue-950/20">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
            <MdConnectWithoutContact className="text-sky-500" /> Social Presence
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            If you want to understand how I think, not just what I build:
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            <motion.a
              href={'https://x.com/whyankush07'}
              className="text-sky-500 font-semibold inline-flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Twitter <span className="text-xs">↗</span>
            </motion.a>{" "}
            for raw thoughts, experiments, and engineering breakdowns.
            <br />
            <motion.a
              href={'https://www.linkedin.com/in/whyankush07'}
              className="text-sky-500 font-semibold inline-flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              LinkedIn <span className="text-xs">↗</span>
            </motion.a>{" "}
            for deeper dives, updates, and client-side clarity.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
            It&apos;s not content.
            <br />
            It&apos;s proof of how I approach my work.
          </p>
        </div>
      </ScrollAnimationWrapper>

      {/* Resume Download Section */}
      <ScrollAnimationWrapper>
        <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 p-6 rounded-lg shadow-md dark:shadow-blue-950/20 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <RiFileDownloadLine size={150} />
          </div>
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
            <BsBriefcase className="text-sky-500" /> Resume & Portfolio
          </h2>
          <p className="text-gray-600 dark:text-slate-300 mb-4">
            If you want the long-form breakdown of skills, experience, and delivered work, download the resume.
            <br />
            Straight numbers. Straight results.
          </p>
          <div className="flex space-x-4 justify-start">
            <CV />
            {user?.email == "deshwalankush23@gmail.com" && (
              <Link href={"/addmyproject"}>
                <Button variant="primary">Add Project</Button>
              </Link>
            )}
          </div>
        </div>
      </ScrollAnimationWrapper>

      {/* Testimonials Section */}
      <ScrollAnimationWrapper direction="left">
        <div className="space-y-3">
          <h2 className="text-4xl text-sky-500 font-bold flex items-center gap-2">
            <FaHandshake className="text-sky-500" /> Testimonials
          </h2>
          <p className="text-gray-600 dark:text-slate-300">
            People who trusted me once usually trust me again.
            <br />
            Their words, not mine.
          </p>
        </div>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-lg shadow-md dark:shadow-blue-950/20 overflow-hidden">
          <Testimonials />
        </div>
      </ScrollAnimationWrapper>

      {/* Mobile Quick Links */}
      <div className="md:hidden">
        <ScrollAnimationWrapper>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <FaLaptopCode className="text-sky-500" /> Quick Links
            </h2>
            <GetALlLinks />
          </div>
        </ScrollAnimationWrapper>
      </div>

      <div className="md:hidden">
        <ScrollAnimationWrapper>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MdOutlineWork className="text-sky-500" /> Freelance Projects
            </h2>
            <FreelanceProjectsLink />
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* Applications Grid Section */}
      <ScrollAnimationWrapper direction="right">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <BsTools className="text-sky-500" /> Applications & Products
          </h2>
          <p className="text-gray-600 dark:text-slate-300">
            Real products solving real problems.
          </p>
          <ApplicationGrid />
        </div>
      </ScrollAnimationWrapper>

      {/* Skills Section */}
      <ScrollAnimationWrapper>
        <div className="space-y-3">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <FaCode className="text-sky-500" /> Skills & Engineering Approach
          </h2>
          <p className="text-gray-600 dark:text-slate-300">
            Tools evolve. Foundations don&apos;t.
            <br />
            I use Go, Node.js, and Next.js to build systems that prioritize:
          </p>
          <ul className="text-gray-600 dark:text-slate-300 space-y-1 ml-4">
            <li>• Speed without fragility</li>
            <li>• Structure without over-engineering</li>
            <li>• Scalability without unnecessary cost</li>
            <li>• Developer experience that keeps teams fast, not frustrated</li>
          </ul>
          <p className="text-gray-600 dark:text-slate-300 mt-3">
            Design decisions matter.
            <br />
            Architecture matters.
            <br />
            Execution matters more than all of them.
          </p>
          <Skills />
        </div>
      </ScrollAnimationWrapper>

      {/* Contact Form Section */}
      <ScrollAnimationWrapper direction="left">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold flex items-center gap-2">
            <MdConnectWithoutContact className="text-sky-500" /> Let&apos;s Build
          </h2>
          <p className="text-gray-600 dark:text-slate-300">
            If you&apos;ve got a problem worth solving or a product worth scaling, reach out.
            <br />
            I&apos;ll bring the engineering clarity and execution discipline your idea needs.
          </p>
          <p className="text-gray-600 dark:text-slate-300 font-medium">
            Your project gets one thing from me: forward momentum.
          </p>
        </div>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-4 rounded-lg shadow-md dark:shadow-blue-950/20">
          <Form />
        </div>
      </ScrollAnimationWrapper>

      <div className="pb-10"></div>
    </div>
  );
}