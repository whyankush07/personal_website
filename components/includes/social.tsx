'use client';
import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";

export default function Sociallinks() {
    const links = [
        {
            title: "GitHub",
            icon: (
                <Image className="dark:invert" src={'/github.svg'} height={36} width={36} alt="GitHub" />
            ),
            href: "https://github.com/whyankush07/",
        },

        {
            title: "LinkedIn",
            icon: (
                <Image className="dark:invert" src={'/linkedin.svg'} height={36} width={36} alt="LinkedIn" />
            ),
            href: "https://www.linkedin.com/in/whyankush07",
        },
        {
            title: "Twitter",
            icon: (
                <Image className="dark:invert" src={'/twitter.svg'} height={36} width={36} alt="Twitter" />
            ),
            href: "https://twitter.com/whyankush07",
        },
        {
            title: "LeetCode",
            icon: (
                <Image className="dark:invert" src={'/leetcode.svg'} height={36} width={36} alt="LeetCode" />
            ),
            href: "https://leetcode.com/whyankush07",
        },
        {
            title: "Instagram",
            icon: (
                <Image className="dark:invert" src={'/instagram.svg'} height={36} width={36} alt="Instagram" />
            ),
            href: "https://www.instagram.com/whyankush07/",
        },
    ];
    return (
        <div className="flex items-center justify-center h-fit w-full">
            <FloatingDock
                // mobileClassName="translate-y-20"
                items={links}
            />
        </div>
    );
}
