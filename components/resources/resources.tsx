'use client';
import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, FileText, BookOpen, Users, Briefcase, GraduationCap, Target, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import {toast} from 'sonner'

interface ResourceLink {
    title: string;
    url: string;
    icon: React.ReactNode;
    description: string;
    category: 'roadmap' | 'guide' | 'blueprint';
}

const Resources = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1] as const
            }
        },
    };

    const profileVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1] as const
            }
        },
    };

    const getIconForResource = (filename: string) => {
        if (filename.includes('roadmap')) return <GraduationCap className="w-5 h-5" />;
        if (filename.includes('Freelancing')) return <Briefcase className="w-5 h-5" />;
        if (filename.includes('Projects')) return <BookOpen className="w-5 h-5" />;
        if (filename.includes('Blueprint')) return <Target className="w-5 h-5" />;
        if (filename.includes('full_stack')) return <Zap className="w-5 h-5" />;
        if (filename.includes('Cloud_Computing')) return <Users className="w-5 h-5" />;
        if (filename.includes('Machine_Learning')) return <Users className="w-5 h-5" />;
        if (filename.includes('Technical_skills')) return <Users className="w-5 h-5" />;
        if (filename.includes('AIML')) return <Users className="w-5 h-5" />;
        return <FileText className="w-5 h-5" />;
    };

    const getCategoryForResource = (filename: string): 'roadmap' | 'guide' | 'blueprint' => {
        if (filename.includes('roadmap')) return 'roadmap';
        if (filename.includes('Roadmap')) return 'roadmap';
        if (filename.includes('Blueprint')) return 'blueprint';
        return 'guide';
    };
    
    const formatTitle = (filename: string): string => {
        return filename
            .replace('.pdf', '')
            .replace(/_/g, ' ')
            .replace(/by Ankush/gi, '')
            .replace(/By Ankush/gi, '')
            .trim();
    };

    const getDescription = (filename: string): string => {
        if (filename.includes('Fourth_year')) return 'Complete roadmap for final year students';
        if (filename.includes('Third_year')) return 'Strategic guide for third year preparation';
        if (filename.includes('Second_year')) return 'Essential steps for second year students';
        if (filename.includes('Fresher')) return 'Complete guide for fresh graduates';
        if (filename.includes('Freelancing')) return 'Start your freelancing journey';
        if (filename.includes('Projects')) return 'Curated project ideas and implementations';
        if (filename.includes('Blueprint')) return 'The ultimate blueprint for tech success';
        if (filename.includes('full_stack')) return 'Complete full stack development path';
        if (filename.includes('Cloud_Computing')) return 'Guide to mastering cloud computing';
        if (filename.includes('Machine_Learning')) return 'Comprehensive machine learning resources';
        if (filename.includes('Technical_skills')) return 'Essential technical skills guide';
        if (filename.includes('AIML')) return 'AI and ML learning & winning resources';
        return 'Professional development resource';
    };

    const resources: ResourceLink[] = [
        'The_Crack30_Blueprint_by_Ankush.pdf',
        'Fresher_Roadmap_By_Ankush.pdf',
        'Second_year_roadmap_by_Ankush.pdf',
        'Third_year_roadmap_by_Ankush.pdf',
        'Fourth_year_roadmap_by_Ankush.pdf',
        'full_stack_roadmap.pdf',
        'Projects_by_Ankush.pdf',
        'Freelancing_Roadmap.pdf',
        'Cloud_Computing_Roadmap.pdf',
        'Machine_Learning_Resource.pdf',
        'Technical_skills_guide.pdf',
        'AIML_BluePrint_By_Ankush.pdf'
    ].map(filename => ({
        title: formatTitle(filename),
        url: `/Resources/${filename}`,
        icon: getIconForResource(filename),
        description: getDescription(filename),
        category: getCategoryForResource(filename)
    }));

    const profileData = {
        name: "Ankush Singh",
        title: "Full Stack Developer & Mentor",
        bio: "Free resources and roadmaps to help you succeed in tech",
        avatar: "/Professional.jpg"
    };

    const handleWaitlistJoin = () => {
        const hasJoined = localStorage.getItem('waitlistJoined');
        if (!hasJoined) {
            toast.success('Joined the waitlist successfully!');
            localStorage.setItem('waitlistJoined', 'true');
        } else {
            toast.success('You are already on the waitlist.');
        }
    }

    const router = useRouter();

    // useEffect(() => {
    //     const email = localStorage.getItem('userEmail');
    //     if (!email) {
    //         router.push('/auth');
    //         return;
    //     }
    //     const isVerified = localStorage.getItem('isVerified');

    //     if (!isVerified || isVerified !== 'true') {
    //         router.push('/auth');
    //     }
    // }, [router]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="min-h-screen bg-background text-foreground flex items-center justify-center p-4"
        >
            <div className="w-full max-w-md mx-auto">

                <motion.div
                    variants={profileVariants}
                    className="text-center mb-12"
                >
                    <Button onClick={handleWaitlistJoin} className="rounded-full float-right" variant={'primary'}>
                        Join waitlist
                    </Button>
                </motion.div>

                <motion.div
                    variants={profileVariants}
                    className="text-center mb-12"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-2xl font-bold mb-2 tracking-tight text-foreground"
                    >
                        {profileData.name}
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-muted-foreground text-sm mb-3 font-medium"
                    >
                        {profileData.title}
                    </motion.p>
                    <motion.p
                        variants={itemVariants}
                        className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto"
                    >
                        {profileData.bio}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="space-y-4"
                >
                    {resources.map((resource, index) => (
                        <motion.a
                            key={index}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.98 }}
                            className={`
                group relative block w-full p-4 rounded-xl border border-border 
                transition-all duration-300 ease-out
                ${hoveredIndex === index
                                    ? 'bg-primary text-primary-foreground border-primary shadow-2xl'
                                    : 'bg-card hover:bg-accent hover:border-accent-foreground/20'
                                }
              `}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="flex items-center space-x-4">
                                <motion.div
                                    className={`
                  flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
                  transition-all duration-300
                  ${hoveredIndex === index
                                            ? 'bg-primary-foreground text-primary'
                                            : 'bg-muted text-muted-foreground group-hover:bg-accent'
                                        }
                `}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {resource.icon}
                                </motion.div>

                                <div className="flex-1 min-w-0">
                                    <h3 className={`
                    font-semibold text-base transition-colors duration-300
                    ${hoveredIndex === index ? 'text-primary-foreground' : 'text-foreground'}
                  `}>
                                        {resource.title}
                                    </h3>
                                    <p className={`
                    text-sm transition-colors duration-300
                    ${hoveredIndex === index ? 'text-primary-foreground/80' : 'text-muted-foreground'}
                  `}>
                                        {resource.description}
                                    </p>
                                </div>

                                <motion.div
                                    className={`
                  flex-shrink-0 transition-all duration-300
                  ${hoveredIndex === index
                                            ? 'text-primary-foreground'
                                            : 'text-muted-foreground group-hover:text-foreground'
                                        }
                `}
                                    animate={{
                                        x: hoveredIndex === index ? 4 : 0
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </motion.div>
                            </div>

                            <motion.div
                                className={`
                absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium
                ${resource.category === 'roadmap' ? 'bg-blue-500/20 text-blue-400 dark:bg-blue-500/30 dark:text-blue-300' :
                                        resource.category === 'blueprint' ? 'bg-purple-500/20 text-purple-400 dark:bg-purple-500/30 dark:text-purple-300' :
                                            'bg-green-500/20 text-green-400 dark:bg-green-500/30 dark:text-green-300'}
              `}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                            >
                                {resource.category}
                            </motion.div>

                            <motion.div
                                className="absolute bottom-0 left-0 h-0.5 bg-primary"
                                initial={{ width: 0 }}
                                animate={{
                                    width: hoveredIndex === index ? '100%' : 0
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                    ))}
                </motion.div>

            </div>

            <motion.div
                className="fixed inset-0 pointer-events-none opacity-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--foreground)) 2px, transparent 2px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </motion.div>
        </motion.div>
    );
};

export default Resources;