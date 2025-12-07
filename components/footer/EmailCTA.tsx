'use client';

import { ScrollAnimationWrapper } from "@/context/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import Link from "next/link";
import { RiMailCheckFill } from "react-icons/ri";

export default function EmailCTA() {
    return (
        <ScrollAnimationWrapper direction="left">
            <div className="py-3 flex space-x-6 space-y-4 flex-wrap">
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
    )
}