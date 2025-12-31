import Homepage from "@/components/pages/homepage"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankush Singh - Creating, Building, Lifting and Selling!!",
  description: "Welcome to Ankush's World. Here you will find all the projects, blogs and applications developed by Ankush.",
  keywords: "Ankush, Portfolio, Projects, Blogs, Applications",
}

export default function Home() {
  return (
    <>
      <Homepage />
    </>
  );
}
