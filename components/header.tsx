import Link from "next/link";

import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import Profile from "@/components/includes/profile";

export default async function Header() {
  return (
    <div className="sticky top-0 z-50 max-sm:w-screen flex justify-end space-x-4 items-center md:pr-6 pr-4 py-4 md:space-x-4 backdrop-blur-md bg-white/80 dark:bg-slate-950/80">
      <Link href="/messages">
        <Button className="rounded-full" variant={"primary"}>
          Guestbook
        </Button>
      </Link>
      <Profile />
      <ModeToggle />
    </div>
  );
}
