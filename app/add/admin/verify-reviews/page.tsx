'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Heart, Sparkles, Users, Calendar } from 'lucide-react';
import Image from 'next/image';
import { toast } from '@/components/ui/use-toast';

interface Reviews {
    id: string;
    name: string;
    message: string;
    image: string;
    rating: number;
}

export default function Page() {
    const [testimonials, setTestimonials] = useState<Reviews[] | null>([]);
    const [loading, setLoading] = useState(true);
    const [selectedTestimonial, setSelectedTestimonial] = useState<Reviews | null>(null);

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/reviews/get');
            const result = await response.json();
            console.log('Fetched testimonials:', result.reviews);
            setTestimonials(result.reviews || []);
        } catch (error) {
            console.error('Error fetching testimonials:', error);
            setTestimonials([
                {
                    id: '1',
                    name: "Sarah Johnson",
                    message: "This service exceeded all my expectations! The attention to detail and customer support is phenomenal.",
                    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
                    rating: 5,
                },
                {
                    id: '2',
                    name: "Michael Chen",
                    message: "Absolutely amazing experience from start to finish. I couldn't be happier with the results!",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                    rating: 5
                },
                {
                    id: '3',
                    name: "Emily Rodriguez",
                    message: "Professional, efficient, and truly caring. This team goes above and beyond for their clients.",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                    rating: 4
                }
            ]);
        } finally {
            setLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9,
            rotateX: -15
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring" as const,
                damping: 25,
                stiffness: 120,
                duration: 0.6
            }
        },
        hover: {
            y: -10,
            scale: 1.03,
            rotateY: 5,
            transition: {
                type: "spring" as const,
                damping: 10,
                stiffness: 200
            }
        }
    };

    const sparkleVariants = {
        animate: {
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const handleVerify = async (id: string) => {
        try {
            const response = await fetch(`/api/reviews/verify`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error('Failed to verify testimonial');
            }

            setTestimonials((prev) => prev?.filter((testimonial) => testimonial.id !== id) || []);
            toast({
                title: "Success",
                description: "Testimonial verified successfully.",
            });
        } catch (error) {
            console.error('Error verifying testimonial:', error);
            toast({
                title: "Error",
                description: "Failed to verify testimonial. Please try again later.",
                variant: "destructive"
            })
        }
    }

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
            >
                <Star
                    className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
            </motion.div>
        ));
    };

    return (
        <div className="min-h-screen bg-background relative">
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-foreground/10 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 py-12">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                >
                    <motion.h1
                        className="text-4xl font-bold text-foreground mb-4"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 120 }}
                    >
                        What Our Students Say
                    </motion.h1>

                    <motion.p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Real stories from amazing people who are taught and mentored by me. Their feedback is invaluable and helps us improve every day.
                    </motion.p>

                    <motion.div
                        className="flex items-center justify-center gap-6 mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <Users className="w-4 h-4" />
                            <span>{testimonials?.length} Happy Students</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <Heart className="w-4 h-4 text-red-500" />
                            <span>100% Satisfaction</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {testimonials?.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="relative group cursor-pointer"
                            variants={cardVariants}
                            whileHover="hover"
                            onClick={() => setSelectedTestimonial(testimonial)}
                        >
                            <div className="absolute -inset-0.5 bg-primary/20 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300" />

                            <div className="relative bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border h-full flex flex-col hover:bg-card/80 transition-all duration-300">
                                {/* Profile Section */}
                                <div className="flex items-center gap-3 mb-3">
                                    <motion.div
                                        className="relative"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-muted/50 p-0.5">
                                            <Image
                                                width={40}
                                                height={40}
                                                unoptimized
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                    </motion.div>

                                    <div className="flex-1 min-w-0">
                                        <motion.h3
                                            className="text-sm font-semibold text-foreground truncate"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            {testimonial.name}
                                        </motion.h3>

                                        <motion.div
                                            className="flex items-center gap-0.5 mt-1"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-3 h-3 ${i < (testimonial.rating || 5) ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`}
                                                />
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>

                                <motion.p
                                    className="text-muted-foreground leading-relaxed flex-1 text-sm line-clamp-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    &apos;{testimonial.message}&apos;
                                </motion.p>

                                <motion.div
                                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ scale: 0 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <div className="w-6 h-6 bg-muted/50 rounded-full flex items-center justify-center">
                                        <motion.div
                                            className="w-1.5 h-1.5 bg-primary rounded-full"
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.5, 1, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <AnimatePresence>
                    {selectedTestimonial && (
                        <motion.div
                            className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedTestimonial(null)}
                        >
                            <motion.div
                                className="bg-card/90 backdrop-blur-lg rounded-2xl p-6 max-w-md w-full border border-border"
                                initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
                                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                                exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-muted/50 p-0.5 mx-auto mb-4">
                                        <Image
                                            width={64}
                                            height={64}
                                            unoptimized
                                            fetchPriority='high'
                                            src={selectedTestimonial.image}
                                            alt={selectedTestimonial.name}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">{selectedTestimonial.name}</h3>
                                    <div className="flex items-center justify-center gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < (selectedTestimonial.rating || 5) ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground text-base leading-relaxed">
                                        &apos;{selectedTestimonial.message}&apos;
                                    </p>
                                    <button
                                        className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md"
                                        onClick={() => handleVerify(selectedTestimonial.id)}
                                    >
                                        Verify Testimonial
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};