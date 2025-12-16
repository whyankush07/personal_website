"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function YouTubeVideo() {

    const [loaded, setLoaded] = useState(false);

    return (
        <>
            {loaded ?
                <div className="flex flex-col space-y-4 w-full">
                    <h1 className="text-center italic font-mono">Latest vlog</h1>
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/nqegQ7o69Ts?si=NSAp6_2FKF_UmK1p"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div> :
                <Button variant={'primary'} onClick={() => setLoaded(true)}>Load Video</Button>}
        </>
    )
}