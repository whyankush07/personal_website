'use client';
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

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
                ease: "easeOut" as const
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