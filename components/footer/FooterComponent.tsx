import ProjectLinks from "@/components/projects/ProjectLinks";
import FreelanceLinks from "@/components/freelance/Freelance";
import Instagram, { YouTube } from "./SocialCards";

export default function Footer() {
  return (
    <div className="w-full h-fit py-1 md:py-20 overflow-y-auto">
      <div className="w-full flex flex-col items-center px-4">
        <div className="w-full max-w-xs flex flex-col space-y-3 md:space-y-4">
          <FreelanceLinks />
          <Instagram />
          <YouTube />
          <ProjectLinks />
        </div>
      </div>
    </div>
  );
}