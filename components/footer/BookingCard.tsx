"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCalendarCheck } from "react-icons/fa";

export const BookingCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full"
        >
            {/* Pulsing glow effect */}
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
                style={{ backgroundColor: "#62c1e5" }}
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Main card with floating animation */}
            <motion.div
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative"
            >
                <Link
                    href="https://superprofile.bio/bookings/howankush07"
                    target="_blank"
                    className="block relative overflow-hidden rounded-2xl border-2 border-[#62c1e5]/30 bg-gradient-to-br from-card via-card to-[#62c1e5]/5 p-6 transition-all duration-300 hover:border-[#62c1e5]/60 hover:shadow-2xl hover:shadow-[#62c1e5]/20"
                >
                    {/* Animated gradient overlay on hover */}
                    <motion.div
                        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        style={{
                            background:
                                "radial-gradient(circle at center, rgba(98, 193, 229, 0.1) 0%, transparent 70%)",
                        }}
                    />

                    {/* Corner accent dots */}
                    <motion.div
                        className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#62c1e5]"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#62c1e5]"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />

                    <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        {/* Left content */}
                        <div className="flex items-start gap-4 flex-1">
                            {/* Icon with pulse effect */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#62c1e5]/10 flex items-center justify-center border border-[#62c1e5]/20"
                            >
                                <FaCalendarCheck className="text-[#62c1e5] text-xl" />
                            </motion.div>

                            {/* Text content */}
                            <div className="flex flex-col gap-1">
                                <motion.h3
                                    className="text-lg font-semibold text-foreground"
                                    whileHover={{ x: 2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Book 1:1 Session
                                </motion.h3>
                                <p className="text-sm text-muted-foreground">
                                    Schedule a personalized consultation
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-shrink-0"
                        >
                            <div className="relative group">
                                <motion.div
                                    className="absolute inset-0 rounded-lg bg-[#62c1e5] blur-md opacity-40 group-hover:opacity-60"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                                <div className="relative px-6 py-2.5 rounded-lg bg-[#62c1e5] text-white text-sm font-medium transition-all duration-300 group-hover:bg-[#52b1d5]">
                                    Book Now
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Animated shine effect */}
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        initial={{ x: "-100%", opacity: 0 }}
                        whileHover={{
                            x: "100%",
                            opacity: [0, 0.3, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                        }}
                    />
                </Link>
            </motion.div>

            {/* Bottom subtle indicator */}
            <motion.div
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full bg-gradient-to-r from-transparent via-[#62c1e5]/40 to-transparent"
                animate={{
                    scaleX: [0.8, 1, 0.8],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </motion.div>
    );
};