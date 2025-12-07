'use client';
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

import { RiMailCheckFill } from "react-icons/ri";
import { FaPen, FaBookOpen, FaInstagram } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";
import { Button } from "@/components/ui/button";
import TwoGhostsSkeleton from "../skeleton/TwoGhostsSkeleton";
import { ScrollAnimationWrapper } from "@/context/ScrollAnimationWrapper";

const AllGhosts = dynamic(() => import("@/components/ghost/getallghosts"), {
  ssr: false,
  loading: () => <TwoGhostsSkeleton />
})

export default function Kaizen() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="flex flex-col space-y-5">
      {/* Header Section */}
      <ScrollAnimationWrapper>
        <div className="flex flex-col space-y-2">
          <h1 className="text-6xl text-sky-500 font-bold">
            My Writing Journey
          </h1>
          <div className="h-1 w-20 bg-sky-500 rounded-full"></div>
        </div>
      </ScrollAnimationWrapper>

      {/* Greeting Section */}
      <ScrollAnimationWrapper direction="left">
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md dark:shadow-blue-950/20">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
            <FaBookOpen className="text-sky-500" /> <span className="text-black dark:text-white italic">Hey</span> There! 👋🏼
          </h2>
          <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
            Have a look at my hobby!
          </p>
        </div>
      </ScrollAnimationWrapper>

      {/* Writing Introduction */}
      <ScrollAnimationWrapper direction="right">
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md dark:shadow-blue-950/20">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
            <FaPen className="text-sky-500" /> My Writing Passion
          </h2>
          <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
            Writing Content has become my hobby ever since I joined College.
            I write blogs on Life, Coding, Experiences, Personal Growth and growing
            tech world. I am a good observer and I keep a tight eye on events around
            me and on Social Media and then try to take out some learning from it.
          </p>
        </div>
      </ScrollAnimationWrapper>

      {/* Creative Process */}
      <ScrollAnimationWrapper direction="left">
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md dark:shadow-blue-950/20">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
            <MdOutlineArticle className="text-sky-500" /> Creative Process
          </h2>
          <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
            Well this is the place where I keep writing and show and hone my writing
            skills. To actually meet the writer inside me, I pick up and a Pen & a
            Paper and then make the pen my sword as my keyboard is for me while
            coding😁.
          </p>
        </div>
      </ScrollAnimationWrapper>

      {/* Social Media Content */}
      <ScrollAnimationWrapper direction="right">
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md dark:shadow-blue-950/20">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
            <FaInstagram className="text-sky-500" /> Voice & Visuals
          </h2>
          <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
            I also try to give life to my writings by adding my voice and
            B-Rolls. I keep posting such content on my instagram cause I love doing
            this. And become someone who puts good message to this youth and inspire
            someone like me who feels like changing something for himself and world.
            You can view them{" "}
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={"https://instagram.com/whyankush07/"}
                className="text-sky-500 font-semibold inline-flex items-center gap-1"
              >
                here! <span className="text-xs">↗</span>
              </Link>
            </motion.span>
          </p>
        </div>
      </ScrollAnimationWrapper>

      {/* Add Blog Button */}
      <ScrollAnimationWrapper>
        <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 p-6 rounded-lg shadow-md dark:shadow-blue-950/20 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <MdOutlineArticle size={150} />
          </div>
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
            <FaPen className="text-sky-500" /> Blog Management
          </h2>
          <p className="text-gray-600 dark:text-slate-300 mb-4">
            Access to add new blog content to the platform.
          </p>
          <div className="flex space-x-4 justify-start">
            {user?.email == "deshwalankush23@gmail.com" && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={"/addmyghost"}>
                  <Button variant="primary">Add Blog</Button>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </ScrollAnimationWrapper>

      {/* Blog Posts Section */}
      <ScrollAnimationWrapper direction="left">
        <div className="space-y-3">
          <h2 className="text-4xl text-sky-500 font-bold flex items-center gap-2">
            <FaBookOpen className="text-sky-500" /> My Blog Posts
          </h2>
          <p className="text-gray-600 dark:text-slate-300">
            Explore my thoughts, experiences, and insights through my blog posts
          </p>
        </div>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-lg shadow-md dark:shadow-blue-950/20 overflow-hidden">
          <AllGhosts />
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
            <p className="text-lg font-medium">Want to connect with me via Mail?</p>
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