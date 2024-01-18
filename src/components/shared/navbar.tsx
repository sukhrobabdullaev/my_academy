import Link from "next/link";
import { LoginButton } from "./login-button";
import { ModeToggle } from "./theme";
import { League_Spartan } from "next/font/google";
import { Contact } from "./contact";

const league_Spartan = League_Spartan({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-zinc-50 dark:bg-zinc-900  border-b p-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className={`${league_Spartan.className} font-bold text-[30px]`}
            >
              academy.
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Contact />
            <ModeToggle />
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
