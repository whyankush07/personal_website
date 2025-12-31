import type { Metadata } from "next";

export const siteConfig = {
    name: "Ankush' Singh",
    description: "Ankush Singh - Creating, Building, Lifting and Selling!!",
    url: "https://whyankush.wtf",
    ogImage: "https://whyankush.wtf/ankush_bg_image.png",
    profileImage: "https://whyankush.wtf/Ankush.png",
    twitter: "@whyankush07",
    themeColor: "#33F9FF"
};

export const metadata: Metadata = {
    title: {
        default: `${siteConfig.name} - Ankush's professional space!`,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: ["Ankush Singh Tech", "Ankush", "Software Developer", "Developer", "Ankush's World"],
    authors: [{ name: "Ankush Singh" }],
    creator: "Ankush Singh",

    metadataBase: new URL(siteConfig.url),
    alternates: {
        canonical: "/",
    },

    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: `${siteConfig.name} - Ankush's professional space!`,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [{
            url: siteConfig.ogImage,
            width: 1200,
            height: 627,
            alt: siteConfig.name,
        }],
    },

    twitter: {
        card: "summary_large_image",
        creator: siteConfig.twitter,
        title: `${siteConfig.name} - Ankush's professional space!`,
        description: siteConfig.description,
        images: [{
            url: siteConfig.ogImage,
            width: 1200,
            height: 627,
            alt: siteConfig.name,
        }],
    },

    manifest: "/manifest.webmanifest",

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // verification: {
    //     google: "",
    // },
};

export default siteConfig;