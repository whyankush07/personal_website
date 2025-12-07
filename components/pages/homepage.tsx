
import Sociallinks from "@/components/includes/social";
import ProfileCover from "@/components/includes/profileCover";
import Instagram, { Testimonials, YouTube } from "@/components/footer/SocialCards";
import { ContainerTextFlip } from "../ui/container-text-flip";
import EmailCTA from "../footer/EmailCTA";
import { ScrollAnimationWrapper } from "@/context/ScrollAnimationWrapper";
import SocialsGrid from "../includes/SocialImagesGrid";
import YouTubeVideo from "../includes/youtubeIntro";

export default function Homepage() {
  return (
    <div className="flex flex-col space-y-5">
      <ScrollAnimationWrapper>
        <ProfileCover
          coverImageSrc="imagine-win.webp"
          profileImageSrc="/Professional.jpg"
          altCover="Cover image"
          altProfile="Profile picture"
        />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <div className="pt-12">
          <h1 className="font-semibold text-lg flex items-center gap-2 dark:text-white text-black leading-tight">
            <span className="whitespace-nowrap">Hi, people know me as</span>
            <p className="text-gray-600 dark:text-gray-300 sr-only">
              Content Creator, Developer, Freelancer, Powerlifter, Mentor
            </p>
            <span className="inline items-center">
              <ContainerTextFlip
                words={["Content Creator", "Developer", "Powerlifter", "Freelancer",]}
              />
            </span>
          </h1>
        </div>
      </ScrollAnimationWrapper>

      <p className="text-gray-600 dark:text-gray-300">
        I’m Ankush — engineering student on paper, builder by instinct. I write code with intent, design systems that don’t
        collapse under pressure, and ship products that range from AI-driven tools to full-blown developer infrastructure.
        When I’m not lifting or smashing shuttles on a court, I’m architecting something new.
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        I’ve taught full-stack development to hundreds, helped students land internships, led teams to win hackathons,
        and worked with early-stage founders who needed someone who actually understands how systems scale.
        One day I’m tuning Go routines, the next I’m breaking down tech and career strategy for my audience — impact stays constant.
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        If you want to see how I think, build, and operate, you’ll find everything across my socials.
      </p>


      <ScrollAnimationWrapper>
        <Sociallinks />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <SocialsGrid />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <div className="pt-4 rounded-md max-w-screen md:max-w-1/2 flex items-center justify-center">
          <YouTubeVideo />
        </div>
      </ScrollAnimationWrapper>

      <div className="py-3"></div>
    </div>
  );
}