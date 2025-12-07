"use client";
import Link from "next/link";
import { LayoutGrid } from "../ui/layout-grid";

export default function SocialsGrid() {
    return (
        <div className="h-screen py-20 w-full">
            <LayoutGrid cards={cards} />
        </div>
    );
}

const SkeletonOne = () => {
    return (
        <Link href="https://www.instagram.com/howankush07" target="_blank" rel="noopener noreferrer">
            <p className="font-bold md:text-4xl text-xl text-white">
                Instagram
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Follow my journey through visual stories, behind-the-scenes moments, and daily insights into tech, fitness, and life.
            </p>
        </Link>
    );
};

const SkeletonTwo = () => {
    return (
        <Link href="https://www.linkedin.com/in/whyankush07/" target="_blank" rel="noopener noreferrer">
            <p className="font-bold md:text-4xl text-xl text-white">
                LinkedIn
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Connect with me professionally. Deep dives into engineering, career insights, and industry perspectives.
            </p>
        </Link>
    );
};
const SkeletonThree = () => {
    return (
        <Link href="https://github.com/whyankush07" target="_blank" rel="noopener noreferrer">
            <p className="font-bold md:text-4xl text-xl text-white">
                GitHub
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Explore my code, open-source contributions, and technical projects. Where ideas become reality through clean code.
            </p>
        </Link>
    );
};
const SkeletonFour = () => {
    return (
        <Link href="https://www.youtube.com/@howankush07" target="_blank" rel="noopener noreferrer">
            <p className="font-bold md:text-4xl text-xl text-white">
                YouTube
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Watch tutorials, tech talks, and content about full-stack development, system design, and building real products.
            </p>
        </Link>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail:
            "/InstagramPage.png",
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail:
            "/LinkedinPage.png",
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail:
            "/githubPage.png",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail:
            "/YoutubePage.png",
    },
];
