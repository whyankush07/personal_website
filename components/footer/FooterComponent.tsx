import ProjectLinks from "@/components/projects/ProjectLinks";
import FreelanceLinks from "@/components/freelance/Freelance";
import Instagram from "./SocialCards";

export default function Footer() {
  return (
    <div className="w-full md:w-1/4 md:h-screen md:py-20 py-3 max-md:hidden">
      <div className="h-full w-full flex flex-col items-center px-4">
        <div className="w-full max-w-xs flex flex-col space-y-3 py-4">
          <ProjectLinks />
          <FreelanceLinks />
          <Instagram />
        </div>
      </div>
    </div>
  );
}