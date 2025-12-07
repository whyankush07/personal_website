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
import { ScrollAnimationWrapper } from "@/components/pages/homepage";
import { useSession } from "next-auth/react";
import Testimonials from "../freelance/testimonials";

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
        <div className="flex flex-col space-y-2">
          <h1 className="text-sky-500 text-6xl font-bold">Professional Journey</h1>
          <div className="h-1 w-20 bg-sky-500 rounded-full"></div>
        </div>
      </ScrollAnimationWrapper>

      {/* Professional Summary */}
      <ScrollAnimationWrapper direction="left">
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md dark:shadow-blue-950/20">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
            <FaUserTie className="text-sky-500" /> Professional Overview
          </h2>
          <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
            As a Full Stack Developer with expertise in Go, Node.js, and Next.js, I specialize in building
            high-concurrency backend systems, microservice architectures, and real-time applications. I&apos;m currently
            in my third year of engineering, balancing academics with professional development and client work.
          </p>
        </div>
      </ScrollAnimationWrapper>

      {/* Services & Availability */}
      <ScrollAnimationWrapper direction="right">
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md dark:shadow-blue-950/20">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
            <FaHandshake className="text-sky-500" /> Available for Hire
          </h2>
          <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
            If you are a client looking for a freelancer, you are at the{" "}
            <span className="text-sky-500 font-semibold">right place</span>. My services include full-stack web development,
            system architecture design, and technical consultation. Feel free to contact me through my social media
            handles or by email. You can provide your project details using the form at the{" "}
            <span className="text-sky-500 font-semibold">bottom</span> of the page.
          </p>
        </div>
      </ScrollAnimationWrapper>

      {/* Social Media Engagement */}
      <ScrollAnimationWrapper direction="left">
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md dark:shadow-blue-950/20">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
            <MdConnectWithoutContact className="text-sky-500" /> Let&apos;s Connect
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            I regularly share my work and insights on full-stack development and emerging tech. Connect with me on{" "}
            <motion.a
              href={'https://x.com/whyankush07'}
              className="text-sky-500 font-semibold inline-flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Twitter <span className="text-xs">↗</span>
            </motion.a>{" "}
            and{" "}
            <motion.a
              href={'https://www.linkedin.com/in/whyankush07'}
              className="text-sky-500 font-semibold inline-flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              LinkedIn <span className="text-xs">↗</span>
            </motion.a>{" "}
            for the latest updates.
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
            Download my detailed resume to learn more about my experience, education, and technical skills.
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
            <FaHandshake className="text-sky-500" /> Client Testimonials
          </h2>
          <p className="text-gray-600 dark:text-slate-300">
            What clients say about working with me on their projects
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
            A showcase of the applications and products I&apos;ve developed
          </p>
          <ApplicationGrid />
        </div>
      </ScrollAnimationWrapper>

      {/* Skills Section */}
      <ScrollAnimationWrapper>
        <div className="space-y-3">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <FaCode className="text-sky-500" /> Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-slate-300">
            Core technologies and frameworks I&apos;ve mastered
          </p>
          <Skills />
        </div>
      </ScrollAnimationWrapper>

      {/* Contact Form Section */}
      <ScrollAnimationWrapper direction="left">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold flex items-center gap-2">
            <MdConnectWithoutContact className="text-sky-500" /> Let&apos;s Work Together
          </h2>
          <p className="text-gray-600 dark:text-slate-300">
            Have a project in mind? Let&apos;s discuss how I can help bring your vision to life.
          </p>
        </div>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-4 rounded-lg shadow-md dark:shadow-blue-950/20">
          <Form />
        </div>
      </ScrollAnimationWrapper>

      {/* Email Contact Section */}
      <ScrollAnimationWrapper direction="left">
        <div className="py-6 flex space-x-6 space-y-4 flex-wrap">
          <motion.div
            className="w-fit px-6 py-5 dark:text-slate-300 text-slate-500 bg-white dark:bg-slate-800/50 flex flex-col shadow-lg dark:shadow-blue-950/30 rounded-lg border-l-4 border-sky-500"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-lg font-medium">Prefer direct communication?</p>
            <motion.span
              className="text-sky-500 flex items-center space-x-2 mt-2 text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <RiMailCheckFill size={20} />
              <Link href="mailto:ankushsingh.dev@gmail.com">
                ankushsingh.dev@gmail.com
              </Link>
            </motion.span>
          </motion.div>
        </div>
      </ScrollAnimationWrapper>

      <div className="pb-10"></div>
    </div>
  );
}