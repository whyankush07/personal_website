"use client"

import { motion, AnimatePresence, useScroll } from "framer-motion"

export default function PageWrapper({ children }: { children: React.ReactNode }) {

    const { scrollYProgress } = useScroll();

    return (
        <AnimatePresence>
            <motion.div
                // key={router.pathname}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.8, duration: 1.3, ease: 'easeInOut' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}