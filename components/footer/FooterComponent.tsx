import ProjectLinks from "@/components/projects/ProjectLinks";
import FreelanceLinks from "@/components/freelance/Freelance";
import Instagram, { YouTube } from "./SocialCards";
import { BookingCard } from "./BookingCard";

export default function Footer() {
  return (
    <div className="w-full h-full py-1 md:py-20 overflow-y-auto md:mb-3">
      <div className="w-full h-full flex flex-col items-center px-4">
        <div className="w-full max-w-xs flex flex-col space-y-3 md:space-y-4">
          <FreelanceLinks />
          <Instagram />
          <BookingCard />
          <YouTube />
          <ProjectLinks />
        </div>
      </div>
    </div>
  );
}